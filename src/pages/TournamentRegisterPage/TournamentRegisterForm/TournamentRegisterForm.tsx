import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';

import SelectDistance from '@/components/SelectDistance';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import DatePicker from '@/components/DatePicker';
import Checkbox from '@/components/Checkbox';
import Icon, { EIconName } from '@/components/Icon';

import { TTournamentRegisterFormProps } from './TournamentRegisterForm.types';
import './TournamentRegisterForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addressAction,
  cityAction,
  districtAction,
  ERegisterTicketAction,
  ERunnerRegisterGroupAction,
  getTicketsAction,
  registerTicketAction,
  runnerRegisterGroupAction,
  wardAction,
} from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';

const TournamentRegisterForm: React.FC<TTournamentRegisterFormProps> = ({ isGroup }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [billRequest, setBillRequest] = useState(false);
  const registerLoading = useSelector((state: any) => state.loadingReducer[ERegisterTicketAction.REGISTER_TICKET]);
  const registerRunnerLoading = useSelector(
    (state: any) => state.loadingReducer[ERunnerRegisterGroupAction.RUNNER_REISTER_GROUP],
  );
  const addressCountriesState = useSelector((state: TRootState) => state.addressReducer.countries);
  const addressCityState = useSelector((state: TRootState) => state.addressReducer.cities);
  const addressDistrictState = useSelector((state: TRootState) => state.addressReducer.districts);
  const addressWardState = useSelector((state: TRootState) => state.addressReducer.wards);
  const getAddress = useCallback(() => {
    dispatch(addressAction.request({}));
  }, [dispatch]);
  useEffect(() => {
    getAddress();
  }, [dispatch, getAddress]);
  const handleChangeCountries = (values: any): void => {
    const body = {
      country_id: values,
    };
    dispatch(cityAction.request({ body }, (response): void => {}));
  };
  const handleChangeDistrict = (values: any): void => {
    const body = {
      city_id: values,
    };
    dispatch(districtAction.request({ body }, (response): void => {}));
  };
  const handleChangeWard = (values: any): void => {
    const body = {
      district_id: values,
    };
    dispatch(wardAction.request({ body }, (response): void => {}));
  };
  const handleSubmit = (values: any): void => {
    const body = { ...values };
    if (isGroup) {
      dispatch(runnerRegisterGroupAction.request({ body }, (response): void => handleRunnerRegitserSuccess(response)));
    } else {
      // dispatch(registerTicketAction.request({ body }, (response): void => handleRegitserSuccess(response)));
    }
  };
  const handleRunnerRegitserSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đăng ký tạo nhóm thành công !');
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const handleRegitserSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đăng ký vé thành công !');
      // navigate(Paths.Home);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const handleSetBill = (value: boolean): void => {
    setBillRequest(value);
  };
  const [tickets, setTickets] = useState([]);
  // useEffect(() => {
  //   const body = { slug: 'cat-ba' };
  //   dispatch(getTicketsAction.request({ body }, (response): void => setTickets(response.data)));
  // });
  return (
    <div className="TournamentRegisterForm">
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="TournamentRegisterPage-card">
          <div className="TournamentRegisterPage-card-title">Chọn cự ly</div>
          <div className="TournamentRegisterPage-card-description">
            Loại vé hiện tại là <strong>Regular</strong> <a href="#">Xem bảng giá</a>{' '}
          </div>

          <Form.Item name="ticketId" rules={[validationRules.required()]}>
            <SelectDistance
              data={[
                { value: '1', label: '5', description: '420.000 VND', suffix: 'KM' },
                { value: '2', label: '10', description: '420.000 VND', suffix: 'KM' },
                { value: '3', label: '21', description: '420.000 VND', suffix: 'KM' },
                { value: '4', label: '42', description: '420.000 VND', suffix: 'KM' },
              ]}
            />
          </Form.Item>
          <div className="TournamentRegisterPage-card-title flex items-center justify-between">
            Nhập thông tin vận động viên
            <Button title="Nhập thông tin của tôi" type="text" />
          </div>

          <Row gutter={[24, 24]}>
            <Col span={24} lg={12}>
              <Form.Item name="email" label="Email">
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="fullName" label="Họ và tên">
                <Input placeholder="Họ và tên" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="birthday" label="Ngày sinh">
                <DatePicker placeholder="Ngày sinh" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="gender" label="Giới tính">
                <Select
                  placeholder="Giới tính"
                  options={[
                    { label: 'Nam', value: '0' },
                    { label: 'Nữ', value: '1' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="nationality" label="Quốc tịch">
                <Select
                  placeholder="Quốc tịch"
                  options={addressCountriesState}
                  onChange={(option): void => handleChangeCountries(option?.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="idCard" label="Số CMND/Hộ chiếu">
                <Input placeholder="Số CMND/Hộ chiếu" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="phone" label="Số điện thoại">
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row gutter={[4, 24]}>
                <Col span={24} lg={6}>
                  <Form.Item name="city" label="Địa chỉ">
                    <Select
                      placeholder="Thành phố"
                      options={addressCityState}
                      onChange={(option): void => handleChangeDistrict(option?.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={24} lg={6}>
                  <Form.Item name="district" label=" ">
                    <Select
                      placeholder="Quận/Huyện"
                      options={addressDistrictState}
                      onChange={(option): void => handleChangeWard(option?.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={24} lg={6}>
                  <Form.Item name="ward" label=" ">
                    <Select placeholder="Phường/Xã" options={addressWardState} />
                  </Form.Item>
                </Col>
                <Col span={24} lg={6}>
                  <Form.Item name="address" label=" ">
                    <Input placeholder="Số nhà/Đường" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="emergencyContactName" label="Liên hệ khẩn cấp">
                <Input placeholder="Tên người liên hệ khẩn cấp" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="emergencyContactPhone" label="Số điện thoại của người liên hệ khẩn cấp">
                <Input placeholder="Số điện thoại người liên hệ" />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <div
                className="TournamentRegisterPage-card-description text-right"
                style={{ fontSize: '1.4rem', position: 'relative', zIndex: 1, marginBottom: '-2rem' }}
              >
                <a href="#">Bảng kích thước</a>
              </div>
              <Form.Item name="size" label="Size áo">
                <Select placeholder="Chọn size áo" options={[]} />
              </Form.Item>
            </Col>
            <Col span={24} lg={12}>
              <Form.Item name="nameBIB" label="Tên trên BIB">
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
                <Select placeholder="Chọn câu lạc bộ" options={[]} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="times"
                label={
                  <>
                    <div className="mainlabel">Thời gian dự kiến hoàn thành cự ly</div>
                    <div className="sublabel">
                      Đây là một trong những thông tin quan trọng để BTC phân chia thứ tự VĐV xuất phát.
                    </div>
                  </>
                }
              >
                <Input placeholder="hh:mm (Ví dụ: 02:30)" suffix={<Icon name={EIconName.Clock} />} />
              </Form.Item>
            </Col>
            {!isGroup ? (
              <>
                <Col span={24}>
                  <Form.Item name="exportBill">
                    <Checkbox label="Yêu cầu xuất hóa đơn" value={billRequest} onChange={handleSetBill} />
                  </Form.Item>
                </Col>
                {billRequest && (
                  <>
                    <Col span={24} lg={12}>
                      <Form.Item name="taxID">
                        <Input placeholder="Mã số thuế" />
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item name="taxNameCompany">
                        <Input placeholder="Tên công ty" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="taxAddress">
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
