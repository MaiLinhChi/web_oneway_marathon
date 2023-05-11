import React, { useEffect } from 'react';
import './TournamentRegisterGroupConfirm.scss';
import { Col, Form, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { showNotification } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';
import { EVertifyRegisterGroupAction, vertifyRegisterGroupAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { navigate, useParams } from '@reach/router';
import { Paths } from '@/pages/routers';
import { EKeyTabTournamentRegisterPage } from '@/pages/TournamentRegisterPage/TournamentRegisterPage.enums';

const TournamentRegisterGroupConfirm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const vertifyRegisterGroupLoading = useSelector(
    (state: any) => state.loadingReducer[EVertifyRegisterGroupAction.VERTIFY_REISTER_GROUP],
  );
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.registerGroupResponse);
  const handleSubmit = (values: any): void => {
    if (id) {
      const body = { ...values, group_slug: id };
      dispatch(vertifyRegisterGroupAction.request({ body }, (response): void => handlerVertifySuccess(response)));
    }
  };
  const handlerVertifySuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Xác nhận thành công !');
      navigate(Paths.TournamentRegisterGroupJoin);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  // useEffect(() => {
  //   if (!registerGroup) navigate(`${Paths.TournamentRegister}?tab=${EKeyTabTournamentRegisterPage.MULTIPLE}`);
  // }, [registerGroup]);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentRegisterPage-wrapper">
          <h2 className="TournamentRegisterPage-title">Đăng ký tham gia OneWay Vũng Tàu 2023</h2>

          <div className="TournamentRegisterPage-main">
            <Row gutter={[24, 24]} className="reverse">
              <Col span={24} lg={16}>
                <div className="TournamentRegisterPage-main-success">
                  <div className="TournamentRegisterPage-main-success-header">
                    <span>Tạo nhóm thành công</span>
                  </div>
                  <div className="TournamentRegisterPage-main-success-body">
                    <h3>Tên nhóm: {registerGroup?.group.group_name}</h3>
                    <ul className="TournamentRegisterPage-main-success-body-list">
                      <li>
                        <span>Họ và tên trưởng nhóm</span>
                        <span>{registerGroup?.group.full_name}</span>
                      </li>
                      <li>
                        <span>Số điện thoại</span>
                        <span>{registerGroup?.group.phone}</span>
                      </li>
                      <li>
                        <span>Email</span>
                        <span>{registerGroup?.group.email}</span>
                      </li>
                    </ul>
                    <Form
                      className="TournamentRegisterPage-main-success-body-form flex"
                      onFinish={handleSubmit}
                      form={form}
                    >
                      <Form.Item name="group_password" style={{ width: '100%' }}>
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
                <TournamentRegisterInformation payment />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegisterGroupConfirm;
