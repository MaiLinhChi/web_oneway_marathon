import React from 'react';

import Content from '@/components/Content';
import ImageBuyOnlineTicket1 from '@/assets/images/image-buy-online-ticket-1.png';
import ImageBuyOnlineTicket2 from '@/assets/images/image-buy-online-ticket-2.png';
import ImageBuyOnlineTicket3 from '@/assets/images/image-buy-online-ticket-3.png';
import ImageBuyOnlineTicket4 from '@/assets/images/image-buy-online-ticket-4.png';
import ImageBuyOnlineTicket5 from '@/assets/images/image-buy-online-ticket-5.png';
import ImageBuyOnlineTicket6 from '@/assets/images/image-buy-online-ticket-6.png';

const BuyOnlineTicketTutorials: React.FC = () => {
  return (
    <div className="BuyOnlineTicketTutorials">
      <Content>
        <h1 className="text-center">Hướng dẫn mua vé trực tuyến</h1>
        <p>
          Trước khi tiến hành đăng ký mua vé tham gia giải chạy, vận động viên cần lưu ý đọc kỹ các quy định về thế lệ
          giải chạy và cơ cấu giải thưởng trong mục “Quy định và giải thưởng” trên đầu trang chủ website.
        </p>
        <img src={ImageBuyOnlineTicket1} alt="" />
        <p>
          Để đăng ký tham gia giải chạy, vận động viên thực hiện mua vé trực tuyến trên website Onewaymarathon.com theo
          quy trình sau:
        </p>
        <p>
          Bước 1:
          <br />
          Trên giao diện trang chủ website, vận động viên kéo chuột xuống mục Giá vé, sau đó lựa chọn cự ly chạy (5km,
          10km hoặc 21km) để xem từng loại vé.
        </p>
        <img src={ImageBuyOnlineTicket2} alt="" />
        <p>Nhấn chọn nút “Mua ngay” để chuyển sang giao diện nhập thông tin đơn hàng mua.</p>
        <p>
          Bước 2:
          <br />
          Tại giao diện mua vé, vận động viên cần nhập đầy đủ thông tin thành viên, bao gồm: Họ và tên; Tên trên BIB;
          Giới tính; Ngày sinh; Số điện thoại; Email; Số CMND/Hộ chiếu; Quốc tịch; Địa chỉ; Thông tin liên hệ khẩn cấp
          và Cỡ áo.
        </p>
        <img src={ImageBuyOnlineTicket3} alt="" />
        <p>Vận động viên nhấn nút “Tiếp theo” để chuyển sang bước thanh toán đơn hàng.</p>
        <p>
          Bước 3:
          <br />
          Tại form “Đăng ký phương tiện di chuyển”, vận động viên cần nhập đầy đủ thông tin về tổ chức của mình (nếu
          có), địa điểm, phương thức di chuyển và thông tin người đi kèm (nếu có).
        </p>
        <img src={ImageBuyOnlineTicket4} alt="" />
        <p>Vận động viên nhấn nút “Tiếp theo” để chuyển sang bước thanh toán đơn hàng.</p>
        <p>
          Bước 4:
          <br />
          Tại giao diện thanh toán đơn hàng, vận động viên nhấn chọn hình thức thanh toán trực tuyến qua thẻ Visa,
          MasterCard hoặc thẻ ATM nội địa và nhấn nút “Yêu cầu xuất hóa đơn” (nếu có nhu cầu). Sau đó, vận động viên
          nhấn nút “Thanh toán”.
        </p>
        <p>
          Trước khi tiến hành đăng ký mua vé tham gia giải chạy, vận động viên cần lưu ý đọc kỹ các quy định về thế lệ
          giải chạy và cơ cấu giải thưởng trong mục “Quy định và giải thưởng” trên đầu trang chủ website.
        </p>
        <img src={ImageBuyOnlineTicket5} alt="" />
        <p>
          Hệ thống sẽ chuyển sang giao diện cổng thanh toán của OnePay. Tại đây, vận động viên lựa chọn ngân hàng và
          nhập đầy đủ thông tin thẻ, sau đó nhấn nút “Thanh toán” để hoàn tất giao dịch.
        </p>
        <img src={ImageBuyOnlineTicket6} alt="" />
        <p>
          Sau khi ghi nhận thông tin đăng ký của vận động viên, nhân viên Onewaymarathon.com sẽ gọi điện hay email để
          xác nhận chốt vé của vận động viên.
        </p>
      </Content>
    </div>
  );
};

export default BuyOnlineTicketTutorials;
