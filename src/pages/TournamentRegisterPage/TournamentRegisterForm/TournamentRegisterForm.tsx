import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';

import SelectDistance from '@/components/SelectDistance';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import DatePicker from '@/components/DatePicker';
import Checkbox from '@/components/Checkbox';
import ShirtSize from '@/assets/images/t-shirt-size.jpg';
import Icon, { EIconName } from '@/components/Icon';
import { TTournamentRegisterFormProps } from './TournamentRegisterForm.types';
import './TournamentRegisterForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  ERegisterTicketAction,
  ERunnerRegisterGroupAction,
  runnerRegisterGroupAction,
  wardAction,
  registerTicketAction,
  addressAction,
  cityAction,
  districtAction,
  getClubsAction,
} from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import { navigate } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import { EKeyTabTournamentRegisterPage } from '../TournamentRegisterPage.enums';

const TournamentRegisterForm: React.FC<TTournamentRegisterFormProps> = ({ isGroup, data }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [billRequest, setBillRequest] = useState(false);
  const [nationality, setNationality] = useState('');
  const registerLoading = useSelector((state: any) => state.loadingReducer[ERegisterTicketAction.REGISTER_TICKET]);
  const registerRunnerLoading = useSelector(
    (state: any) => state.loadingReducer[ERunnerRegisterGroupAction.RUNNER_REISTER_GROUP],
  );
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);
  const clubsState = useSelector((state: TRootState) => state.clubsReducer.clubs);
  const addressCityState = useSelector((state: TRootState) => state.addressReducer.cities);
  const addressDistrictState = useSelector((state: TRootState) => state.addressReducer.districts);
  const addressWardState = useSelector((state: TRootState) => state.addressReducer.wards);
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.registerGroupResponse);
  const formatDate = (date: any): string => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1),
      day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  };
  const getPrice = (value: any): any => {
    const today = new Date();
    const a = value?.map((item: any) => {
      return item?.price?.find((price: any) => new Date(price.startSell).getTime() >= today.getTime());
    });
    return a?.map((item: any, index: any) => {
      return { ...item, distance: value[index].distance };
    });
  };
  const handleSubmit = (values: any): void => {
    let body = null;
    if (isGroup) {
      body = {
        ...values,
        birthday: formatDate(values?.birthday),
        city: values?.city?.value,
        district: values?.district?.value,
        gender: values?.gender?.value,
        country: values?.country?.value,
        ticketId: values?.ticketId?.value,
        ward: values?.ward?.value,
        group_slug: registerGroup?.group?.slug,
        nationality: values?.country.value,
        checkVat: values?.checkVat ? values?.checkVat.value : false,
      };
      dispatch(runnerRegisterGroupAction.request({ body }, (response): void => handleRunnerRegitserSuccess(response)));
    } else {
      const { distance, checkVat, address, club, ...ress } = values;
      body = {
        ...ress,
        address: {
          province: address.city.label,
          district: address.district.label,
          ward: address.ward.label,
          street: address.street,
        },
        birthday: formatDate(values?.birthday),
        nationality: values?.nationality.value,
        gender: values?.gender?.value,
        shirtSize: values?.shirtSize?.value,
        marathon: {
          marathonId: data._id,
          ...values.distance,
        },
        clubId: club ? club.value : '',
        price: distance.price,
      };
      delete body.marathon.price;
      delete body.clubId;
      if (!checkVat) {
        delete body.vat;
      }
      if (nationality !== 'vn') {
        delete body.address;
      }
      dispatch(registerTicketAction.request({ body }, (response): void => handleRegitserSuccess(response)));
    }
  };
  const handleRunnerRegitserSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đăng ký tạo nhóm thành công !');
      navigate(Paths.TournamentRegisterGroupEnd);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const handleRegitserSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đăng ký vé thành công !');
      navigate(Paths.TournamentPayment(`${response.data._id}?tab=${EKeyTabTournamentRegisterPage.SINGLE}`));
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const handleSetBill = (value: boolean): void => {
    setBillRequest(value);
  };
  const handleUpdateInfoMe = (): void => {
    if (!profileState) {
      showNotification(ETypeNotification.ERROR, 'Yêu cầu login !');
      return;
    }
    form.setFieldsValue({
      email: profileState.email,
      fullName: profileState.fullname,
      phone: profileState.mobile,
    });
  };
  // const handleChangeCity = (values: any): void => {
  //   const params = {
  //     country_id: values,
  //   };
  //   form.setFieldsValue({ city: null, district: null, ward: null });
  //   dispatch(cityAction.request({ params }, (response): void => {}));
  // };
  const handleChangeDistrict = (values: any): void => {
    const params = {
      provinceId: values,
    };
    form.setFieldsValue({ district: null, ward: null });
    dispatch(districtAction.request({ params }, (response): void => {}));
  };
  const handleChangeWard = (values: any): void => {
    const params = {
      districtId: values,
    };
    form.setFieldsValue({ ward: null });
    dispatch(wardAction.request({ params }, (response): void => {}));
  };

  const getInfo = useCallback(async () => {
    dispatch(cityAction.request({}));
    dispatch(getClubsAction.request({}));
  }, [dispatch]);
  useEffect(() => {
    getInfo();
  }, [dispatch, getInfo]);

  return (
    <div className="TournamentRegisterForm">
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="TournamentRegisterPage-card">
          <div className="TournamentRegisterPage-card-title">Chọn cự ly</div>
          <div className="TournamentRegisterPage-card-description">
            Loại vé hiện tại là <strong>{getPrice(data.race)?.[0]?.name}</strong> <a href="#">Xem bảng giá</a>{' '}
          </div>

          <Form.Item name="distance" rules={[validationRules.required()]}>
            <SelectDistance single={getPrice(data.race)} />
          </Form.Item>
          <div className="TournamentRegisterPage-card-title flex items-center justify-between">
            Nhập thông tin vận động viên
            <Button title="Nhập thông tin của tôi" type="text" onClick={handleUpdateInfoMe} />
          </div>

          <Row gutter={[24, 24]}>
            <Col span={24} lg={12}>
              <Form.Item name="email" label="Email" rules={[validationRules.email(), validationRules.required()]}>
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item
                name="fullName"
                label="Họ và tên"
                rules={[
                  validationRules.required(),
                  validationRules.noSpecialKey(),
                  validationRules.minLength(3),
                  validationRules.maxLength(15),
                ]}
              >
                <Input placeholder="Họ và tên" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="birthday" label="Ngày sinh" rules={[validationRules.required(), validationRules.age()]}>
                <DatePicker placeholder="Ngày sinh" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="gender" label="Giới tính" rules={[validationRules.required()]}>
                <Select
                  placeholder="Giới tính"
                  options={[
                    { label: 'Nam', value: 'male' },
                    { label: 'Nữ', value: 'female' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="nationality" label="Quốc tịch" rules={[validationRules.required()]}>
                <Select
                  placeholder="Quốc tịch"
                  options={[
                    { label: 'Vietnamese', value: 'vn' },
                    { label: 'Australia', value: 'Australia' },
                    { label: 'Chinese', value: 'Chinese' },
                    { label: 'Laos', value: 'Laos' },
                    { label: 'Thailand', value: 'Thailand' },
                    { label: 'Philippines', value: 'Philippines' },
                    { label: 'Campuchia', value: 'Campuchia' },
                  ]}
                  onChange={(item: any): void => setNationality(item.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item
                name="passport"
                label="Số CMND/Căn cước"
                rules={[validationRules.required(), validationRules.minLength(9), validationRules.maxLength(12)]}
              >
                <Input placeholder="Số CMND/Căn cước" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[validationRules.required(), validationRules.phone(), validationRules.number()]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row gutter={[4, 24]}>
                <Col span={24} lg={6}>
                  <Form.Item name={['address', 'city']} label="Địa chỉ" rules={[validationRules.required()]}>
                    <Select
                      placeholder="Thành phố"
                      options={addressCityState}
                      onChange={(option: any): void => handleChangeDistrict(option?.value)}
                      disabled={nationality !== 'vn' ? true : false}
                    />
                  </Form.Item>
                </Col>
                <Col span={24} lg={6}>
                  <Form.Item name={['address', 'district']} label=" ">
                    <Select
                      placeholder="Quận"
                      options={addressDistrictState}
                      onChange={(option): void => handleChangeWard(option?.value)}
                      disabled={nationality !== 'vn' ? true : false}
                    />
                  </Form.Item>
                </Col>
                <Col span={24} lg={6}>
                  <Form.Item name={['address', 'ward']} label=" ">
                    <Select
                      placeholder="Phường"
                      options={addressWardState}
                      disabled={nationality !== 'vn' ? true : false}
                    />
                  </Form.Item>
                </Col>
                <Col span={24} lg={6}>
                  <Form.Item name={['address', 'street']} label=" ">
                    <Input placeholder="Số nhà/Đường" disabled={nationality !== 'vn' ? true : false} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item
                name="emergencyContactName"
                label="Liên hệ khẩn cấp"
                rules={[
                  validationRules.required(),
                  validationRules.minLength(3),
                  validationRules.maxLength(15),
                  validationRules.noSpecialKey(),
                ]}
              >
                <Input placeholder="Tên người liên hệ khẩn cấp" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item
                name="emergencyContactPhone"
                label="Số điện thoại của người liên hệ khẩn cấp"
                rules={[validationRules.required(), validationRules.phone(), validationRules.number()]}
              >
                <Input placeholder="Số điện thoại người liên hệ" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <div
                className="TournamentRegisterPage-card-description text-right"
                style={{ fontSize: '1.4rem', position: 'relative', zIndex: 1, marginBottom: '-2rem' }}
              >
                <a href="#">Bảng kích thước</a>
                <img src={ShirtSize} alt="" className="shirt-size" />
              </div>
              <Form.Item name="shirtSize" label="Size áo" rules={[validationRules.required()]}>
                <Select
                  placeholder="Size áo"
                  options={[
                    { label: 'XS', value: 'XS' },
                    { label: 'S', value: 'S' },
                    { label: 'M', value: 'M' },
                    { label: 'L', value: 'L' },
                    { label: 'XL', value: 'XL' },
                    { label: 'XXL', value: 'XXL' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item
                name="nameBib"
                label="Tên trên BIB"
                rules={[validationRules.minLength(3), validationRules.noSpecialKey()]}
              >
                <Input placeholder="Tên trên BIB" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="club"
                label={
                  <>
                    <div className="mainlabel">Câu lạc bộ</div>
                    <div className="sublabel">
                      Nếu CLB của bạn chưa có trong danh sách, vui lòng liên hệ hotline để được cập nhật. <br />{' '}
                      Hotline: 08 1800 7898
                    </div>
                  </>
                }
              >
                <Select placeholder="Chọn câu lạc bộ" options={clubsState} />
              </Form.Item>
              {/* <Form.Item name="club">
                <Checkbox label="Câu lạc bộ" value={billRequest} onChange={handleSetBill} />
              </Form.Item> */}
            </Col>
            <Col span={24}>
              <Form.Item
                name="timeEstimation"
                label={
                  <>
                    <div className="mainlabel">Thời gian dự kiến hoàn thành cự ly</div>
                    <div className="sublabel">
                      Đây là một trong những thông tin quan trọng để BTC phân chia thứ tự VĐV xuất phát.
                    </div>
                  </>
                }
                rules={[validationRules.required()]}
              >
                <Input type="time" />
              </Form.Item>
            </Col>
            {!isGroup ? (
              <>
                <Col span={24}>
                  <Form.Item name="checkVat">
                    <Checkbox label="Yêu cầu xuất hóa đơn" value={billRequest} onChange={handleSetBill} />
                  </Form.Item>
                </Col>
                {billRequest && (
                  <>
                    <Col span={24} lg={12}>
                      <Form.Item name={['vat', 'taxCode']}>
                        <Input placeholder="Mã số thuế" />
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item name={['vat', 'companyName']}>
                        <Input placeholder="Tên công ty" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name={['vat', 'companyAddress']}>
                        <Input placeholder="Địa chỉ" />
                      </Form.Item>
                    </Col>
                  </>
                )}
              </>
            ) : (
              ''
            )}

            <Col lg={24} />

            <Col span={24}>
              <div className="TournamentRegisterForm-submit flex justify-end">
                <Button
                  title="Tiếp tục"
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={isGroup ? registerRunnerLoading : registerLoading}
                />
              </div>
            </Col>
            <Col lg={24} />
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default TournamentRegisterForm;
