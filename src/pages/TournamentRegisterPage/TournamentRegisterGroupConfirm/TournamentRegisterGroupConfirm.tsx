import React, { useCallback, useEffect, useState } from 'react';
import './TournamentRegisterGroupConfirm.scss';
import { Col, Form, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';
import { EVertifyRegisterGroupAction, getGroupByIdAction, vertifyRegisterGroupAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification, EViMessageCode } from '@/common/enums';
import { navigate, useParams } from '@reach/router';
import { Paths } from '@/pages/routers';

const TournamentRegisterGroupConfirm: React.FC = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState<any>();
  const dispatch = useDispatch();
  const { id } = useParams();
  const vertifyRegisterGroupLoading = useSelector(
    (state: any) => state.loadingReducer[EVertifyRegisterGroupAction.VERTIFY_REISTER_GROUP],
  );
  const groupState = useSelector((state: TRootState) => state.registerGroupReducer.groupDetailResponse);
  const handleSubmit = (values: any): void => {
    if (groupState) {
      const body = { ...values, _id: groupState._id };
      dispatch(vertifyRegisterGroupAction.request({ body }, (response): void => handlerVertifySuccess(response)));
    }
  };
  const getGroup = useCallback(() => {
    dispatch(
      getGroupByIdAction.request(
        { id },
        (): void => {},
        (err): void => handleGetDetailGroupError(err),
      ),
    );
  }, [dispatch, id]);
  const handleGetDetailGroupError = (err: any): void => {
    setError(err.data);
  };
  const handlerVertifySuccess = (response: any): void => {
    if (response.statusCode === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Xác nhận thành công !');
      navigate(Paths.TournamentRegisterGroupJoin(groupState?.marathonId));
    }
  };
  useEffect(() => {
    getGroup();
  }, [getGroup]);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentRegisterPage-wrapper">
          {!error ? (
            <div className="TournamentRegisterPage-main">
              <h2 className="TournamentRegisterPage-title">Đăng ký tham gia nhóm</h2>
              <Row gutter={[24, 24]} className="reverse">
                <Col span={24} lg={16}>
                  <div className="TournamentRegisterPage-main-success">
                    <div className="TournamentRegisterPage-main-success-header">
                      <span>Vui lòng kiểm tra thông tin</span>
                    </div>
                    <div className="TournamentRegisterPage-main-success-body">
                      <h3>Tên nhóm: {groupState?.groupName}</h3>
                      <ul className="TournamentRegisterPage-main-success-body-list">
                        <li>
                          <span>Họ và tên trưởng nhóm</span>
                          <span>{groupState?.membership?.[0].fullName}</span>
                        </li>
                        <li>
                          <span>Số điện thoại</span>
                          <span>{groupState?.membership?.[0].phone}</span>
                        </li>
                        <li>
                          <span>Email</span>
                          <span>{groupState?.membership?.[0].email}</span>
                        </li>
                      </ul>
                      <Form
                        className="TournamentRegisterPage-main-success-body-form flex"
                        onFinish={handleSubmit}
                        form={form}
                      >
                        <Form.Item name="password" style={{ width: '100%' }} rules={[validationRules.required()]}>
                          <Input type="password" placeholder="Nhập mật khẩu tham gia nhóm" />
                        </Form.Item>
                        <Button
                          title="Tiếp tục"
                          htmlType="submit"
                          loading={vertifyRegisterGroupLoading}
                          titleColor={EIconColor.WHITE}
                          borderColor={EIconColor.PERSIAN_GREEN}
                          backgroundColor={EIconColor.PERSIAN_GREEN}
                        />
                      </Form>
                    </div>
                  </div>
                </Col>
                <Col span={24} lg={7}>
                  <TournamentRegisterInformation
                    group={{ location: groupState?.marathonName, startTime: groupState?.startTime }}
                  />
                </Col>
              </Row>
            </div>
          ) : (
            <div className="TournamentRegisterPage-main small">
              <div className="TournamentRegisterPage-main-success">
                <div className="TournamentPaymentSucces-main-success-header">
                  <span>Có lỗi xảy ra</span>
                </div>
                <div className="TournamentPaymentSucces-main-success-body">
                  <p>{EViMessageCode[error.messageKey as keyof typeof EViMessageCode]}</p>
                  <div className="TournamentPaymentSucces-main-success-body-btn flex">
                    <Button
                      size="large"
                      title="Về trang chủ"
                      titleColor={EIconColor.WHITE}
                      borderColor={EIconColor.PERSIAN_GREEN}
                      backgroundColor={EIconColor.PERSIAN_GREEN}
                      link={Paths.Home}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentRegisterGroupConfirm;
