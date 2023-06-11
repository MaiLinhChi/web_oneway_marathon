import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';

import { getQueryParam, validationRules } from '@/utils/functions';
import Checkbox from '@/components/Checkbox';
import { useDispatch, useSelector } from 'react-redux';

import { TTournamentPaymentFormProps } from './TournamentPaymentRegulars.types';
import Button from '@/components/Button';
import { navigate } from '@reach/router';
import {
  EAddOrderAction,
  ERegisterTicketAction,
  ERunnerRegisterGroupAction,
  addOrderAction,
  registerTicketAction,
  runnerRegisterGroupAction,
} from '@/redux/actions';
import { Paths } from '@/pages/routers';
import { TRootState } from '@/redux/reducers';
import { EKeyTabTournamentRegisterPage } from '../TournamentRegisterPage.enums';

const TournamentPaymentRegulars: React.FC<TTournamentPaymentFormProps> = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const key = 'tab';
  const tabQuery = getQueryParam(key);
  const RegisterTicketLoading = useSelector(
    (state: any) => state.loadingReducer[ERegisterTicketAction.REGISTER_TICKET],
  );
  const addOrderLoading = useSelector((state: any) => state.loadingReducer[EAddOrderAction.ADD_ORDER]);
  const runnerRegisterLoading = useSelector(
    (state: any) => state.loadingReducer[ERunnerRegisterGroupAction.RUNNER_REISTER_GROUP],
  );
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.groupDetailResponse);
  const saveTicketState = useSelector((state: TRootState) => state.registerReducer?.saveTicket);
  const raceDetailState = useSelector((state: TRootState) => state.raceReducer.detailRaceResponse);
  const postOrderState = useSelector((state: TRootState) => state.ordersReducer.addOrder?.data);
  const handleSubmit = (values: any): void => {
    if (tabQuery === 'MULTIPLE') {
      const isExist = registerGroup?.membership?.some((item: any) => item.email === saveTicketState.email);
      if (!isExist) {
        dispatch(
          registerTicketAction.request({ body: saveTicketState }, (response): void =>
            handlerJoinGroupProcess(response),
          ),
        );
      } else {
        dispatch(
          registerTicketAction.request({ body: saveTicketState }, (response): void =>
            handlerJoinGroupSuccess(response),
          ),
        );
      }
    } else if (tabQuery === 'SINGLE') {
      if (!postOrderState) {
        dispatch(
          registerTicketAction.request({ body: saveTicketState }, (response): void =>
            handleRegitserTicketSuccess(response),
          ),
        );
        return;
      }
      dispatch(registerTicketAction.request({ body: saveTicketState }));
      navigate(Paths.TournamentPayment(`${postOrderState?._id}?tab=${EKeyTabTournamentRegisterPage.SINGLE}`));
    }
  };
  const handlerJoinGroupProcess = (bib: any): void => {
    const body = {
      email: saveTicketState.email,
      phone: saveTicketState.phone,
      fullName: saveTicketState.fullName,
      bibId: bib?.data?._id,
    };
    dispatch(
      runnerRegisterGroupAction.request({ id: registerGroup._id, body }, (response): void =>
        handlerJoinGroupSuccess(response),
      ),
    );
  };
  const handlerJoinGroupSuccess = (response: any): void => {
    navigate(Paths.TournamentRegisterGroupEnd);
  };
  const handleRegitserTicketSuccess = (bibResponse: any): void => {
    const body = {
      email: saveTicketState.email,
      products: [
        {
          productId: bibResponse?.data?._id,
          price: bibResponse?.data?.marathon.price,
          state: bibResponse?.data?.marathon.name,
        },
      ],
      total: bibResponse?.data?.marathon?.price,
      marathonId: raceDetailState._id,
    };
    dispatch(addOrderAction.request({ body }, (response): void => handleRegitserSuccess(response)));
  };
  const handleRegitserSuccess = (response: any): void => {
    navigate(Paths.TournamentPayment(`${response.data?._id}?tab=${EKeyTabTournamentRegisterPage.SINGLE}`));
  };
  useEffect(() => {
    if (!saveTicketState) navigate(Paths.Home);
  }, [saveTicketState]);
  return (
    <div className="TournamentPaymentForm">
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="TournamentRegisterPage-card">
          <div className="TournamentRegisterPage-card-title">Miễn trừ trách nhiệm</div>
          <div
            className="TournamentRegisterPage-card-description bg-gray"
            style={{ margin: '2.4rem 0', maxHeight: 464, overflow: 'auto' }}
          >
            <ol>
              <li>
                1. Bằng việc đăng ký tham dự giải <b>Oneway Marathon {raceDetailState?.name}</b> tổ chức vào “
                {raceDetailState?.startTime}”(sau đây gọi là “Sự kiện”), tôi đồng ý với văn bản xác nhận từ bỏ các quyền
                đòi hỏi, yêu cầu bồi thường và gánh vác rủi ro này.
              </li>
              <br />
              <li>2. Tôi đã đọc và hiểu các điều luật của Sự kiện và các thông tin liên quan đến Sự kiện.</li>
              <br />
              <li>
                3. Tôi hiểu rằng để tham gia Sự kiện cần phải có sự tập luyện và chuẩn bị về mặt thể chất. Tôi tuyên bố
                rằng tôi đã luyện tập đủ cho Sự kiện này và rằng tôi không nhận thấy có bệnh tật, chấn thương hoặc điều
                bất khả về thể chất nào có thể gây ra thương tích hoặc tử vong cho tôi trong khi tham dự Sự kiện.
              </li>
              <br />
              <li>
                4. Trong trường hợp tôi nhận ra một vấn đề về sức khoẻ nào, hoặc tôi bị ốm hoặc bị thương trước khi hoặc
                trong khi diễn ra Sự kiện, tôi sẽ rút khỏi Sự kiện.
              </li>
              <br />
              <li>
                5. Tôi xác nhận và hiểu rằng trong khi tham gia Sự kiện:
                <br />
                <br />- Tôi có thể bị thương, về mặt thể chất hoặc tinh thần, hoặc tử vong từ các lý do khác nhau, bao
                gồm, nhưng không giới hạn bởi, nỗ lực quá mức, mất nước, đau tim, trượt, vấp hoặc ngã, tai nạn với những
                người tham gia khác, khán giả và những người khác có mặt tại địa điểm tổ chức Sự kiện, hoặc các tai nạn
                gây ra bởi các hành động của chính tôi;
                <br />
                <br />- Tài sản cá nhân của tôi có thể bị mất hoặc hư hại;
                <br />
                <br />- Tôi có thể gây ra thương tích cho người khác hoặc gây hư hại cho tài sản của họ;
                <br />
                <br />- Các điều kiện tổ chức Sự kiện có thể thay đổi mà không cần thông báo trước;
                <br />
                <br />- Tôi tự gánh vác rủi ro và trách nhiệm cho bất kỳ thương tích, tử vong hoặc hư hại về tài sản nào
                là kết quả của việc tham gia Sự kiện của tôi.
              </li>
              <br />
              <li>
                6. Tôi đồng ý rằng nếu tôi bị thương hoặc cần được trợ giúp về y tế, những người tổ chức Sự kiện có thể
                thu xếp điều trị y tế và vận chuyển cấp cứu nếu những người tổ chức Sự kiện thấy cần thiết, với chi phí
                do tôi chịu. Tôi đồng ý rằng tôi tự chịu trách nhiệm về bảo hiểm đối với chi phí y tế và vận chuyển y
                khoa.
              </li>
              <br />
              <li>
                7. Tôi đồng ý miễn trừ và không gây thiệt hại cho những người tổ chức Sự kiện, những quan chức, nhân
                viên, đại lý, tình nguyện viên, đối tác hợp đồng, các cơ quan công quyền, người sở hữu đất và các nhà
                tài trợ, khỏi bất kỳ các yêu cầu bồi thường, đòi hỏi, quyền lợi hoặc lý do khởi tố, kiện tụng, chi phí
                và thủ tục tố tụng dưới bất kỳ hình thức nào, do tôi thực hiện, hoặc thay mặt cho tôi hoặc bởi các bên
                khác, xuất phát từ bất kỳ thương tích, mất mát, hư hại hoặc tử vong xảy ra với tôi hoặc với tài sản của
                tôi là kết quả của việc tôi tham gia Sự kiện, dù là do sơ suất, phá vỡ hợp đồng hoặc bất kỳ lý do nào
                khác.
              </li>
              <br />
              <li>
                8. Tôi cũng đồng ý rằng trong trường hợp tôi bị thương hoặc tài sản của tôi bị hư hại, tôi sẽ không đòi
                bồi thường, yêu cầu trách nhiệm pháp lý hoặc các hình thức khác từ những người tổ chức Sự kiện, đối với
                chấn thương và hư hại đó.
              </li>
              <br />
              <li>
                9. Tôi chấp nhận cho phép tên, kết quả Sự kiện, ảnh, video, truyền thông đa phương tiện hoặc phim của
                tôi được sử dụng cho bất kỳ mục đích hợp pháp nào bởi ban tổ chức Sự kiện mà không phải trả phí hoặc đền
                bù.
              </li>
              <br />
              <li>
                10. Tôi xác nhận rằng Ban tổ chức Sự kiện có thể thay đổi đường chạy so với nội dung quảng cáo mà không
                cần thông báo nếu Ban tổ chức Sự kiện thấy việc này là cần thiết. Tôi cũng xác nhận rằng Ban tổ chức Sự
                kiện có thể huỷ Sự kiện do điều kiện thời tiết, các điều kiện về an toàn, hoạt động khủng bố, các vấn đề
                siêu nhiên, dịch bệnh các trường hợp bất khả kháng mà Ban tổ chức không thể lường trước được và trong
                các trường hợp như vậy, lệ phí tham dự của tôi sẽ không được hoàn lại.
              </li>
              <br />
              <li>
                11. Tôi xác nhận rằng việc tôi (hoặc người được ủy quyền) ký vào bản giao nhận Bộ RACE KIT đồng nghĩa
                với việc tôi đã kiểm tra và đã nhận đầy đủ, chính xác số bib của tôi, chip điện tử đo thời gian chạy của
                mình, quà của Ban tổ chức và các nhà tài trợ dành cho tôi. Tôi hoàn toàn tự chịu trách nhiệm về việc làm
                mất bib và chip sau khi nhận từ Ban tổ chức.
              </li>
            </ol>
          </div>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Form.Item name="agree_bib" rules={[validationRules.noChecked()]}>
                <Checkbox label="Tôi đồng ý xác nhận miễn trừ trách nghiệm" />
              </Form.Item>
            </Col>
          </Row>
          <div className="TournamentPaymentForm-submit flex justify-end">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              title="Tiếp tục"
              loading={RegisterTicketLoading || addOrderLoading || runnerRegisterLoading}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default TournamentPaymentRegulars;
