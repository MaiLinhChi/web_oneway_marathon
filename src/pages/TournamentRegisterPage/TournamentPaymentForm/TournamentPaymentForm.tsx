import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';

import { showNotification, validationRules } from '@/utils/functions';
import Checkbox from '@/components/Checkbox';
import Radio from '@/components/Radio';
import { useDispatch, useSelector } from 'react-redux';

import { TTournamentPaymentFormProps } from './TournamentPaymentForm.types';
import './TournamentPaymentForm.scss';
// import Input from '@/components/Input';
import Button from '@/components/Button';
// import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { navigate, useParams } from '@reach/router';
import { EOrderEditAction, getOrderDetailAction, OrderEditAction, updatePromotionAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { Paths } from '@/pages/routers';
// import { TRootState } from '@/redux/reducers';
import { getPaymentMethod } from '@/services/api';
import AuthHelpers from '@/services/helpers';
import numeral from 'numeral';

const TournamentPaymentForm: React.FC<TTournamentPaymentFormProps> = () => {
  const dispatch = useDispatch();
  const [promotion, setPromotion] = useState('');
  const [arrPromotion, setArrPromotion] = useState(['']);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [total, settotal] = useState('');
  const [paymentItems, setPaymentItems] = useState<any>({});
  const [form] = Form.useForm();
  const { id } = useParams();
  const [totalFee, setTotalFee] = useState<any>();
  const atk = AuthHelpers.getAccessToken();
  const orderEditLoading = useSelector((state: any) => state.loadingReducer[EOrderEditAction.ORDER_EDIT]);
  // const orderState = useSelector((state: TRootState) => state.orderDetailReducer.getOrderDetailResponse);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const handlerChange = (e): void => {
  //   setPromotion(e.target.value);
  // };
  const handleSubmit = (values: any): void => {
    const body = {
      gateway: values.payment_method.gateway,
      bankCode: values.payment_method.bankCode,
      price: paymentItems.price,
    };
    if (id) {
      const headers = {
        params: {
          authorization: `Bearer ${atk}`,
        },
        id,
      };
      dispatch(
        OrderEditAction.request({ body, headers }, (response): void => handlerGetPaymentMethodSuccess(response)),
      );
    }
  };
  const getOrderDetail = useCallback(() => {
    if (id)
      dispatch(
        getOrderDetailAction.request({ paths: { id } }, (response): void => handlerGetOrderDetailSuccess(response)),
      );
  }, [dispatch, id]);
  const getPaymentMethodApi = useCallback(async () => {
    const params = {
      status: 'active',
    };
    const res = await getPaymentMethod({ params });
    setPaymentMethods(res.data);
  }, []);
  const handlerGetOrderDetailSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      // showNotification(ETypeNotification.SUCCESS, 'Lấy chi tiết đơn hàng thành công !');
      // setInfo(response.data.order.items[0]);
      // settotal(response.data.order.total);
      setPaymentItems(response.data);
      // setArrPromotion(response.data.order.promotionCodeUsages);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
      navigate(Paths.Home);
    }
  };
  const handlerGetPaymentMethodSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Chuyển trang thanh toán');
      navigate(response.url.uri);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const handlerClickApplyPromotion = (): void => {
    const body = {
      promotionCode: promotion,
      // orderShortCode: orderState.data.order.shortCode,
    };
    dispatch(
      updatePromotionAction.request({ body }, (response): void =>
        handlerClickApplyPromotionSuccess(response, promotion),
      ),
    );
  };
  const handlerClickApplyPromotionSuccess = (response: any, code: string): void => {
    if (response.status === EResponseCode.OK) {
      setArrPromotion([code]);
      showNotification(ETypeNotification.SUCCESS, 'Áp dụng mã giảm giá thành công !');
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const handleCannelPromote = (): void => {
    setArrPromotion(['']);
  };
  useEffect(() => {
    getOrderDetail();
    getPaymentMethodApi();
  }, [getOrderDetail, getPaymentMethodApi]);
  return (
    <div className="TournamentPaymentForm">
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="TournamentRegisterPage-card">
          <div className="TournamentRegisterPage-card-title">Thông tin hoá đơn</div>
          <div className="TournamentRegisterPage-card-table expand-x">
            <table>
              <tbody>
                {
                  <tr className="spacing-bottom">
                    <td>
                      {paymentItems?.state} - {paymentItems?.distance}m
                    </td>
                    <td>x1</td>
                    <td className="text-right">
                      <strong>{parseInt(paymentItems?.price).toLocaleString('ES-es')} VNĐ</strong>
                    </td>
                  </tr>
                }
                {/* {arrPromotion[0] !== '' &&
                  arrPromotion.map((e: any, i) => (
                    <tr className="border-top border-bottom">
                      <td>
                        Giảm {parseInt(e.discount).toLocaleString('ES-es')} {e.discountType === 'percent' ? '%' : 'VNĐ'}
                      </td>
                      <td />
                      <td className="text-right">
                        <strong>- {parseInt(e.discountAmount).toLocaleString('ES-es')} VNĐ</strong>
                      </td>
                    </tr>
                  ))} */}
                {totalFee && (
                  <tr className="spacing-bottom">
                    <td>Phí thanh toán</td>
                    <td />
                    <td className="text-right">
                      <strong>{totalFee} VNĐ</strong>
                    </td>
                  </tr>
                )}
                <tr className="spacing-top">
                  <td>Tổng thanh toán</td>
                  <td />
                  <td className="text-right">
                    <strong style={{ color: '#1964FF', fontWeight: 900 }}>
                      {parseInt(totalFee ? paymentItems?.price + totalFee : paymentItems?.price).toLocaleString(
                        'ES-es',
                      )}
                      {''} VNĐ
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="TournamentPaymentForm-voucher">
            <div className="TournamentPaymentForm-voucher-form flex">
              <Input onChange={handlerChange} />
              <Button title="Áp dụng" type="primary" htmlType="button" onClick={handlerClickApplyPromotion} />
            </div>

            <div className="TournamentPaymentForm-voucher-list">
              {arrPromotion[0] !== '' &&
                arrPromotion.map((e: any, i) => (
                  <div key={i} className="TournamentPaymentForm-voucher-list-item flex items-center">
                    <Icon name={EIconName.MinusCircle} color={EIconColor.RED_ORANGE} onClick={handleCannelPromote} />
                    <span>{e.code}</span>
                  </div>
                ))}
            </div>
          </div> */}

          <div className="TournamentRegisterPage-card-title">Hình thức thanh toán</div>
          <Form.Item name="payment_method" rules={[validationRules.required()]}>
            <Radio
              spacing={16}
              options={paymentMethods}
              onChange={(item: any): void => setTotalFee((item.feePercent * paymentItems?.price) / 100 + item.fee)}
            />
          </Form.Item>

          <div className="TournamentRegisterPage-card-description bg-soft-blue" style={{ margin: '2.4rem 0' }}>
            <p style={{ marginBottom: '0.4rem' }}>
              <strong>Lưu ý:</strong>
            </p>
            <ul>
              <li>Quý khách có 15 phút để thực hiện thanh toán online qua ATM hoặc Visa.</li>
              <li>Thông tin thanh toán của quý khách hoàn toàn được bảo mật bởi ngân hàng.</li>
            </ul>
          </div>

          <div
            className="TournamentRegisterPage-card-description bg-gray"
            style={{ margin: '2.4rem 0', maxHeight: 264, overflow: 'auto' }}
          >
            <p style={{ marginBottom: '0.8rem' }}>
              <strong>Điều khoản thanh toán số báo danh thi đấu BIB</strong>
            </p>
            <ol>
              <li>
                1. Việc tiến hành thanh toán suất BIB là bước tiếp theo sau khi vận động viên đã đọc và đồng ý tất cả
                nội dung của giải chạy; về qui định, qui chuẩn của vận động viên tham gia giải chạy. Vận động viên cam
                kết không có bất kỳ khiếu nại nào về việc không đủ tiêu chuẩn để tham gia mặc dù đã thanh toán.
              </li>
              <li>
                2. Số báo danh thi đấu (BIB) dành riêng cho mỗi người tham dự và không thể thay đổi. Việc tự ý mua
                bán/hoặc chuyển nhượng BIB bị nghiêm cấm, kết quả sẽ không được công nhận khi bị phát hiện người chạy
                sai tên, sai BIB, sai thông tin đã đăng ký.
              </li>
              <li>
                3. Về chính sách ghi nhận thanh toán hoàn tất và chốt vé cho khách: sau khi ghi nhận thông tin đăng ký
                thì Oneway sẽ gọi điện hay email để xác nhận; trong vòng 24h giờ quý khách cần thanh toán để chốt vé.{' '}
              </li>
              <li>
                4. Các điều khoản liên quan đến hoàn hủy vé: Sau khi hoàn thành việc đăng ký, vận động viên sẽ không
                được hoàn lại phí đăng ký nếu không thể tham gia sự kiện với bất kỳ lý do gì.{' '}
              </li>
              <li>
                5. Trong trường hợp muốn thay đổi BIB cự ly cần thực hiện trước ít nhất 1 tuần so với ngày diễn ra giải
                chạy. Việc xác nhận thông tin mới sẽ được cập nhật thông qua email xác nhận của Oneway và việc thay đổi
                cự ly hoàn toàn miễn phí. Vận động viên chỉ cần thanh toán phí chênh lệch theo giá trị của các cự ly,
                với cự ly nhỏ hơn sẽ không hoàn phí chênh lệch.
              </li>
              <li>
                6. Điều khoản bảo mật thông tin : Onepay không lưu giữ thông tin thẻ của Khách hàng, thông tin chỉ dùng
                để thực hiện thanh toán và dùng trong trường hợp cần thiết đối chiếu với thông tin của vận động viên.{' '}
              </li>
              <li>
                7. Trách nhiêm và quyền hạn của onepay đối với sự kiện bất khả kháng: Chúng tôi có quyền hủy đặt chỗ
                hoặc thay đổi dịch vụ bất kỳ lúc nào khi phát sinh các trường hợp không lường trước được. Những trường
                hợp như vậy bao gồm nhưng không giới hạn ở: chiến tranh hoặc đe dọa chiến tranh, lây lan dịch bệnh, bạo
                loạn, xung đột dân sự, hoạt động khủng bố, tranh chấp công nghiệp, thảm họa tự nhiên hoặc hạt nhân, hỏa
                hoạn, thời tiết bất lợi và / hoặc điều kiện giao thông, hành động của chính phủ hoặc đối với bất kỳ lý
                do nào nằm ngoài tầm kiểm soát của chúng tôi. Trong những trường hợp này, chúng tôi không chịu trách
                nhiệm pháp lý khi giải chạy buộc phải hủy bỏ hoặc thay đổi do bất kỳ trường hợp không lường trước được.
              </li>
            </ol>
          </div>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Form.Item name="agree_bib" rules={[validationRules.noChecked()]}>
                <Checkbox label="Tôi đã đọc và đồng ý với điều khoản thanh toán số báo danh thi đấu BIB" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="agree_policy" rules={[validationRules.noChecked()]}>
                <Checkbox
                  label={
                    <>
                      Tôi đã đọc và đồng ý với <a href="#">Điều khoản và quy định</a> của OneWay 2022
                    </>
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="agree_correct_info" rules={[validationRules.noChecked()]}>
                <Checkbox label="Tôi xin cam kết thông tin mà tôi đã khai là đúng sự thật, nếu sai tôi xin chịu hoàn toàn trách nhiệm" />
              </Form.Item>
            </Col>
          </Row>
          <div className="TournamentPaymentForm-submit flex justify-end">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              loading={orderEditLoading}
              title={
                <>
                  Thanh toán {''}
                  <strong>
                    {parseInt(totalFee ? paymentItems?.price + totalFee : paymentItems?.price).toLocaleString('ES-es')}
                    {''} VND
                  </strong>
                </>
              }
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default TournamentPaymentForm;
