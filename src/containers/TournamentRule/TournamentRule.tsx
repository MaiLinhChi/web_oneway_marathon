import React from 'react';

import { TTournamentRuleProps } from './TournamentRule.types.d';
import './TournamentRule.scss';

const TournamentRule: React.FC<TTournamentRuleProps> = ({ color }) => {
  return (
    <div className="TournamentRule">
      <div className="container">
        <div className="TournamentRule-wrapper">
          <h2 className="TournamentRule-title">
            Quy Định và <span style={{ color }}>thể lệ</span>
          </h2>
          <div className="TournamentRule-main">
            <h4>Điều kiện tham dự</h4>
            <p>
              Người tham dự phải có khả năng hoàn thành đường đua, từ vạch xuất phát đến vạch về đích, trong thời gian
              quy định cho những cự ly tương ứng dưới đây:
            </p>
            <ul>
              <li>Half Marathon (21.1km) – 4 giờ sau đợt xuất phát cuối cùng</li>
              <li>10KM – 2 giờ sau đợt xuất phát cuối cùng</li>
              <li>5KM - 1 giờ sau đợt xuất phát cuối cùng</li>
            </ul>

            <p>
              Chú ý: Sẽ có một số thay đổi hoặc điều chỉnh về các điểm “cut off” (địa điểm cố định trên đường đua VĐV
              phải vượt qua tròng vòng thời gian nhất định) tại một số chặng của cuộc đua. Thông tin chi tiết sẽ được
              thông báo sát với ngày thi đấu. Vì lý do an toàn và tránh các trường hợp bị tắc nghẽn tại các nút giao
              thông, vận động viên phải tuyệt đối nghe theo sự hướng dẫn của Ban tổ chức, bất kì hành vi nào vi phạm sẽ
              bị hủy bỏ quyền thi đấu ngay lập tức.
            </p>
            <p>Những người tham dự phải đáp ứng đủ yêu cầu về độ tuổi tương ứng với các cự ly đăng ký:</p>
            <ul>
              <li>
                Tất cả vận động viên tham gia cự ly Bán Marathon – 21.1km phải từ 16 tuổi trở lên tính trong năm 2022.
              </li>
              <li>Tất cả vận động viên tham gia cự ly 10km phải từ 14 tuổi trở lên tính trong năm 2022.</li>
              <li>Tất cả vận động viên tham gia cự ly 5km phải từ 11 tuổi trở lên tính trong năm 2022.</li>
              <li>
                Tất cả các vận động viên tham gia dưới 18 tuổi tính trong năm 2022 đều phải có sự xác nhận của người bảo
                trợ hoặc cha mẹ. Người bảo trợ hoặc cha mẹ phải ký vào đơn kê khai đăng ký trước khi diễn ra cuộc đua.
                Ban tổ chức có quyền từ chối quyền thi đấu đối với các vận động viên chưa hoàn thành đơn xác nhận có chữ
                ký của người bảo trợ hoặc cha mẹ.
              </li>
            </ul>
            <br />
            <br />
            <br />
            <h4>Hủy và thay đổi BIB</h4>
            <p>
              Sau khi khi hoàn thành việc đăng ký, vận động viên sẽ không được hoàn lại phí đăng kí nếu không thể tham
              gia sự kiện GIải chạy OneWay Cát Bà 2022 với bất kỳ lý do gì.
            </p>
            <p>
              Trong trường hợp muốn thay đổi BIB cự ly, vận động viên vui lòng theo dõi các thông báo cụ thể trên các
              trang thông tin của giải về hạn thay đổi thông tin, cự ly và chuyển nhượng BIB. Mọi thắc mắc vui lòng liên
              hệ qua email <a href="mailto: info@onewaymarathon.com">info@onewaymarathon.com</a> hoặc hotline{' '}
              <a href="tel: 0818007898">08 1800 7898</a>.
            </p>
            <br />
            <br />
            <br />
            <h4>Điều khoản thanh toán số báo danh thi đấu BIB</h4>
            <ol>
              <li>
                Việc tiến hành thanh toán suất BIB là bước tiếp theo sau khi vận động viên đã đọc và đồng ý tất cả nội
                dung của giải chạy; về qui định, qui chuẩn của vận động viên tham gia giải chạy. Vận động viên cam kết
                không có bất kỳ khiếu nại nào về việc không đủ tiêu chuẩn để tham gia mặc dù đã thanh toán.
              </li>
              <li>
                Số báo danh thi đấu (BIB) dành riêng cho mỗi người tham dự và không thể thay đổi. Việc tự ý mua bán/hoặc
                chuyển nhượng BIB bị nghiêm cấm, kết quả sẽ không được công nhận khi bị phát hiện người chạy sai tên,
                sai BIB, sai thông tin đã đăng ký.
              </li>
              <li>
                Về chính sách ghi nhận thanh toán hoàn tất và chốt vé cho khách: sau khi ghi nhận thông tin đăng ký thì
                Oneway sẽ gọi điện hay email để xác nhận; trong vòng 24h giờ quý khách cần thanh toán để chốt vé.{' '}
              </li>
              <li>
                Các điều khoản liên quan đến hoàn hủy vé: Sau khi hoàn thành việc đăng ký, vận động viên sẽ không được
                hoàn lại phí đăng ký nếu không thể tham gia sự kiện với bất kỳ lý do gì.{' '}
              </li>
              <li>
                Trong trường hợp muốn thay đổi BIB cự ly cần thực hiện trước ít nhất 1 tuần so với ngày diễn ra giải
                chạy. Việc xác nhận thông tin mới sẽ được cập nhật thông qua email xác nhận của Oneway và việc thay đổi
                cự ly hoàn toàn miễn phí. Vận động viên chỉ cần thanh toán phí chênh lệch theo giá trị của các cự ly,
                với cự ly nhỏ hơn sẽ không hoàn phí chênh lệch.
              </li>
              <li>
                Điều khoản bảo mật thông tin : Onepay không lưu giữ thông tin thẻ của Khách hàng, thông tin chỉ dùng để
                thực hiện thanh toán và dùng trong trường hợp cần thiết đối chiếu với thông tin của vận động viên.{' '}
              </li>
              <li>
                Trách nhiêm và quyền hạn của onepay đối với sự kiện bất khả kháng: Chúng tôi có quyền hủy đặt chỗ hoặc
                thay đổi dịch vụ bất kỳ lúc nào khi phát sinh các trường hợp không lường trước được. Những trường hợp
                như vậy bao gồm nhưng không giới hạn ở: chiến tranh hoặc đe dọa chiến tranh, lây lan dịch bệnh, bạo
                loạn, xung đột dân sự, hoạt động khủng bố, tranh chấp công nghiệp, thảm họa tự nhiên hoặc hạt nhân, hỏa
                hoạn, thời tiết bất lợi và / hoặc điều kiện giao thông, hành động của chính phủ hoặc đối với bất kỳ lý
                do nào nằm ngoài tầm kiểm soát của chúng tôi. Trong những trường hợp này, chúng tôi không chịu trách
                nhiệm pháp lý khi giải chạy buộc phải hủy bỏ hoặc thay đổi do bất kỳ trường hợp không lường trước được.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRule;
