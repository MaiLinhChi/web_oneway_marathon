import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';

import UploadAvatar from '@/components/UploadAvatar';
import Button from '@/components/Button';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import Select from '@/components/Select';

import { TPersonalInfoProps } from './PersonalInfo.types';
import './PersonalInfo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import {
  addressAction,
  cityAction,
  districtAction,
  EUpdateProfileAction,
  updateProfileAction,
  wardAction,
} from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { formatMomentToString, showNotification } from '@/utils/functions';

const PersonalInfo: React.FC<TPersonalInfoProps> = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [, setFormValues] = useState({});
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data?.user);
  const addressCountriesState = useSelector((state: TRootState) => state.addressReducer.countries);
  const addressCityState = useSelector((state: TRootState) => state.addressReducer.cities);
  const addressDistrictState = useSelector((state: TRootState) => state.addressReducer.districts);
  const addressWardState = useSelector((state: TRootState) => state.addressReducer.wards);
  const updateInfoLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUpdateProfileAction.UPDATE_PROFILE],
  );
  const getAddress = useCallback(() => {
    dispatch(addressAction.request({}));
  }, [dispatch]);
  useEffect(() => {
    form.setFieldsValue({
      ...profileState,
      avatar: profileState?.avatar || undefined,
      gender: profileState?.gender.toString(),
      birthday: '',
      name: profileState?.name,
      id_card: profileState?.id_card,
      phone: profileState?.phone,
    });
  }, [profileState, form]);
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
  const handlerSubmit = (values: any): void => {
    const body = {
      name: values.name,
      gender: values.gender.value,
      phone: values.phone,
      address: values.address,
      city: values.city.value,
      country: values.country.value,
      district: values.district.value,
      ward: values.ward.value,
      idCard: values.idCard,
      birthday: values.birthday,
      email: values.email,
      emergencyContactName: values.emergencyContactName,
      emergencyContactPhone: values.emergencyContactPhone,
    };
    dispatch(updateProfileAction.request({ body }, (response): void => handleUpdateInfoSuccess(response)));
  };
  const handleUpdateInfoSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Cập nhật thông tin profile thành công !');
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  return (
    <div className="PersonalInfo">
      <Form form={form} layout="vertical" onFinish={handlerSubmit}>
        <div className="PersonalInfo-header flex items-start">
          <div className="PersonalInfo-avatar">
            <Form.Item name="avatar">
              <UploadAvatar />
            </Form.Item>
          </div>
          <div className="PersonalInfo-info">
            <div className="PersonalInfo-info-title">@{profileState?.name}</div>
            <div className="PersonalInfo-info-description">
              Bio Max 3 row (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim)
            </div>
          </div>
          <div className="PersonalInfo-submit">
            <Button title="Lưu thay đổi" loading={updateInfoLoading} type="primary" htmlType="submit" />
          </div>
        </div>
        {/*<UploadAvatar />*/}

        <div className="PersonalInfo-body">
          <div className="PersonalInfo-group">
            <div className="PersonalInfo-title">
              Thông tin <span>cá nhân</span>
            </div>

            <Row gutter={[24, 24]}>
              <Col lg={{ span: 24 }} xs={{ span: 24 }}>
                <Form.Item name="name" label="Họ và tên">
                  <Input placeholder="Họ và tên" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item name="birthday" label="Ngày sinh">
                  <DatePicker placeholder="Ngày sinh" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
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
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item name="email" label="Email">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item name="phone" label="Số điện thoại">
                  <Input placeholder="Số điện thoại" />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div className="PersonalInfo-group">
            <div className="PersonalInfo-title">
              Xác nhận <span>danh tính</span>
            </div>

            <Row gutter={[24, 24]}>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item name="id_card" label="Số CMND/Hộ chiếu">
                  <Input placeholder="Số CMND/Hộ chiếu" />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item name="country" label="Quốc tịch">
                  <Select
                    placeholder="Quốc tịch"
                    options={addressCountriesState}
                    onChange={(option): void => handleChangeCountries(option?.value)}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Row gutter={[4, 24]}>
                  <Col lg={{ span: 6 }} md={{ span: 24 }} xs={{ span: 24 }}>
                    <Form.Item name="city" label="Địa chỉ">
                      <Select
                        placeholder="Thành phố"
                        options={addressCityState}
                        onChange={(option): void => handleChangeDistrict(option?.value)}
                      />
                    </Form.Item>
                  </Col>
                  {!isMobile ? (
                    <>
                      <Col lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name="district" label=" ">
                          <Select
                            placeholder="Quận/Huyện"
                            options={addressDistrictState}
                            onChange={(option): void => handleChangeWard(option?.value)}
                          />
                        </Form.Item>
                      </Col>
                      <Col lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }}>
                        <Form.Item name="ward" label=" ">
                          <Select placeholder="Phường/Xã" options={addressWardState} />
                        </Form.Item>
                      </Col>
                      <Col lg={{ span: 6 }} md={{ span: 6 }} xs={{ span: 24 }} className="flex items-end">
                        <Form.Item name="address">
                          <Input placeholder="Số nhà/Đường" />
                        </Form.Item>
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item name="province">
                          <Select placeholder="Quận/Huyện" options={addressDistrictState} />
                        </Form.Item>
                      </Col>
                      <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item name="ward_id">
                          <Select placeholder="Phường/Xã" />
                        </Form.Item>
                      </Col>
                      <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
                        <Form.Item name="address">
                          <Input placeholder="Số nhà/Đường" />
                        </Form.Item>
                      </Col>
                    </>
                  )}
                </Row>
              </Col>
              <Col span={24}>
                <Row gutter={[4, 24]}>
                  <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item name="emergencyContactName" label="Liên hệ khẩn cấp">
                      <Input placeholder="Tên người liên hệ khẩn cấp" />
                    </Form.Item>
                  </Col>
                  <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item name="emergencyContactPhone" label="Người liên hệ ">
                      <Input placeholder="Số điện thoại người liên hệ" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PersonalInfo;
