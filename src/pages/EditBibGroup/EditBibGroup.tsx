import React, { useCallback, useEffect, useState } from 'react';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  EUpdateTicketAction,
  cityAction,
  districtAction,
  getClubsAction,
  getTicketDetailAction,
  updateTicketAction,
  wardAction,
} from '@/redux/actions';
import { Paths } from '../routers';
import { navigate, useParams } from '@reach/router';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import Select from '@/components/Select';
import ShirtSize from '@/assets/images/t-shirt-size.jpg';
import TimePicker from '@/components/TimePicker';
import Button from '@/components/Button';
import { TRootState } from '@/redux/reducers';
import './EditBibGroup.scss';
import Icon, { EIconName } from '@/components/Icon';
import moment from 'moment';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { getTicketDetail } from '@/services/registers';

dayjs.extend(customParseFormat);

const BuyOnlineTicketTutorials: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [nationality, setNationality] = useState('');
  const [ticketState, setTicketState] = useState<any>({});
  const updateTicketLoading = useSelector((state: any) => state.loadingReducer[EUpdateTicketAction.UPDATE_TICKET]);
  const clubsState = useSelector((state: TRootState) => state.clubsReducer.clubs);
  const addressCityState = useSelector((state: TRootState) => state.addressReducer.cities);
  const addressDistrictState = useSelector((state: TRootState) => state.addressReducer.districts);
  const addressWardState = useSelector((state: TRootState) => state.addressReducer.wards);
  const handleSubmit = (values: any): void => {
    let body = null;
    const { distance, checkVat, address, club, status, ...ress } = values;
    body = {
      ...ress,
      address: {
        province: address?.province?.label || address?.province || null,
        district: address?.district?.label || address?.district || null,
        ward: address?.ward?.label || address?.ward || null,
        street: address?.street || null,
      },
      birthday: values?.birthday,
      nationality: values?.nationality.value || values?.nationality,
      gender: values?.gender?.value || values?.gender,
      shirtSize: values?.shirtSize?.value || values?.shirtSize,
      timeEstimation: values.timeEstimation.format('HH:mm:ss'),
      clubId: club ? club.value : '',
    };
    if (!club) {
      delete body.clubId;
    }
    if (nationality !== 'vn') {
      delete body.address;
    }
    dispatch(updateTicketAction.request({ id: ticketState._id, body }));
    navigate(Paths.TournamentDetail(ticketState?.marathon?.marathonId));
  };
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

  const handleChangeNationality = (value: any): void => {
    if (value !== 'vn') {
      form.setFieldsValue({ address: null });
    }
    setNationality(value);
  };

  const getTicketDetailGroup = useCallback(async () => {
    const res = await getTicketDetail({ id });
    setTicketState(res.data);
  }, [id]);

  const getInfo = useCallback(async () => {
    dispatch(cityAction.request({}));
    dispatch(getClubsAction.request({}));
  }, [dispatch]);
  useEffect(() => {
    getInfo();
    if (ticketState) {
      form.setFieldsValue({
        email: ticketState.email,
        distance: ticketState.marathon,
        fullName: ticketState.fullName,
        birthday: moment(ticketState?.birthday),
        gender: ticketState.gender,
        nationality: ticketState.nationality,
        passport: ticketState.passport,
        phone: ticketState.phone,
        address: ticketState.address,
        emergencyContactName: ticketState.emergencyContactName,
        emergencyContactPhone: ticketState.emergencyContactPhone,
        shirtSize: ticketState.shirtSize,
        nameBib: ticketState.nameBib,
        club: ticketState.clubId,
        timeEstimation: dayjs(ticketState?.timeEstimation, 'HH:mm:ss'),
      });
      setNationality(ticketState.nationality);
    }
  }, [dispatch, getInfo, getTicketDetailGroup, ticketState, form]);
  useEffect(() => {
    getTicketDetailGroup();
  }, [getTicketDetailGroup]);
  return (
    <div className="EditBibGroup">
      <div className="EditBibGroup-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="EditBibGroup-container">
        <div className="EditBibGroup-wrapper">
          <div className="EditBibGroup-main">
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
              <div className="EditBibGroup-card">
                <div className="EditBibGroup-card-title flex items-center justify-between">
                  Chỉnh sửa thông tin vận động viên
                </div>
                <Row gutter={[24, 24]}>
                  <Col span={24} lg={12}>
                    <Form.Item name="email" label="Email" rules={[validationRules.email(), validationRules.required()]}>
                      <Input placeholder="Email" suffix={<Icon name={EIconName.Edit} />} />
                    </Form.Item>
                  </Col>
                  <Col span={24} lg={12}>
                    <Form.Item
                      name="fullName"
                      label="Họ và tên"
                      rules={[validationRules.required(), validationRules.noSpecialKey()]}
                    >
                      <Input placeholder="Họ và tên" suffix={<Icon name={EIconName.Edit} />} />
                    </Form.Item>
                  </Col>
                  <Col span={24} lg={12}>
                    <Form.Item
                      name="birthday"
                      label="Ngày sinh"
                      rules={[validationRules.required(), validationRules.age()]}
                    >
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
                          { label: 'VietNam', value: 'vn' },
                          { label: 'Australia', value: 'Australia' },
                          { label: 'China', value: 'Chinese' },
                          { label: 'Laos', value: 'Laos' },
                          { label: 'Thailand', value: 'Thailand' },
                          { label: 'Philippines', value: 'Philippines' },
                          { label: 'Campuchia', value: 'Campuchia' },
                        ]}
                        onChange={(item: any): void => handleChangeNationality(item.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24} lg={12}>
                    <Form.Item
                      name="passport"
                      label="Số CMND/Căn cước"
                      rules={[validationRules.required(), validationRules.minLength(9), validationRules.maxLength(12)]}
                    >
                      <Input placeholder="Số CMND/Căn cước" suffix={<Icon name={EIconName.Edit} />} />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="phone"
                      label="Số điện thoại"
                      rules={[validationRules.required(), validationRules.phone(), validationRules.number()]}
                    >
                      <Input placeholder="Số điện thoại" suffix={<Icon name={EIconName.Edit} />} />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Row gutter={[4, 24]}>
                      <Col span={24} lg={6}>
                        <Form.Item
                          name={['address', 'province']}
                          label="Địa chỉ"
                          rules={[nationality === 'vn' ? validationRules.required() : {}]}
                        >
                          <Select
                            placeholder="Thành phố"
                            options={addressCityState}
                            onChange={(option: any): void => handleChangeDistrict(option?.value)}
                            disabled={nationality !== 'vn' ? true : false}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24} lg={6}>
                        <Form.Item
                          name={['address', 'district']}
                          label=" "
                          rules={[nationality === 'vn' ? validationRules.required() : {}]}
                        >
                          <Select
                            placeholder="Quận"
                            options={addressDistrictState}
                            onChange={(option): void => handleChangeWard(option?.value)}
                            disabled={nationality !== 'vn' ? true : false}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24} lg={6}>
                        <Form.Item
                          name={['address', 'ward']}
                          label=" "
                          rules={[nationality === 'vn' ? validationRules.required() : {}]}
                        >
                          <Select
                            placeholder="Phường"
                            options={addressWardState}
                            disabled={nationality !== 'vn' ? true : false}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24} lg={6}>
                        <Form.Item
                          name={['address', 'street']}
                          label=" "
                          rules={[nationality === 'vn' ? validationRules.required() : {}]}
                        >
                          <Input placeholder="Số nhà/Đường" disabled={nationality !== 'vn' ? true : false} />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24} lg={12}>
                    <Form.Item
                      name="emergencyContactName"
                      label="Liên hệ khẩn cấp"
                      rules={[validationRules.required(), validationRules.noSpecialKey()]}
                    >
                      <Input placeholder="Tên người liên hệ khẩn cấp" suffix={<Icon name={EIconName.Edit} />} />
                    </Form.Item>
                  </Col>
                  <Col span={24} lg={12}>
                    <Form.Item
                      name="emergencyContactPhone"
                      label="Số điện thoại của người liên hệ khẩn cấp"
                      rules={[validationRules.required(), validationRules.phone(), validationRules.number()]}
                    >
                      <Input placeholder="Số điện thoại người liên hệ" suffix={<Icon name={EIconName.Edit} />} />
                    </Form.Item>
                  </Col>
                  <Col span={24} lg={12}>
                    <div
                      className="TournamentRegisterPage-card-description text-right"
                      style={{ fontSize: '1.4rem', position: 'relative', zIndex: 1, marginBottom: '-2rem' }}
                    >
                      <a href="#" className="hover-text">
                        <img src={ShirtSize} alt="image" className="hover" />
                        Bảng kích thước
                      </a>
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
                    <Form.Item name="nameBib" label="Tên trên BIB" rules={[validationRules.noSpecialKey()]}>
                      <Input placeholder="Tên trên BIB" suffix={<Icon name={EIconName.Edit} />} />
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
                      <Select placeholder="Chọn câu lạc bộ" options={clubsState} allowClear />
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
                      <TimePicker showNow={false} placeholder="Thời gian dự kiến" />
                    </Form.Item>
                  </Col>

                  <Col lg={24} />

                  <Col span={24}>
                    <div className="TournamentRegisterForm-submit flex justify-end">
                      <Button
                        title="Hoàn thành"
                        type="primary"
                        size="large"
                        htmlType="submit"
                        loading={updateTicketLoading}
                      />
                    </div>
                  </Col>
                  <Col lg={24} />
                </Row>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOnlineTicketTutorials;
