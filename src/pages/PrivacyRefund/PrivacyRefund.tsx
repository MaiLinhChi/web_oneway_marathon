import React from 'react';

import Content from '@/components/Content';

const PrivacyRefund: React.FC = () => {
  return (
    <div className="PrivacyRefund">
      <Content>
        <h1 className="text-center">Chính sách đổi trả, hoàn tiền</h1>
        <ol>
          <li>
            Sau khi hoàn thành việc đăng ký mua vé, vận động viên (người tham gia sự kiện) sẽ không được hoàn lại phí
            đăng ký mua vé nếu không thể tham gia sự kiện với bất kỳ lý do gì.
          </li>
          <li>
            Trong trường hợp muốn thay đổi BIB cự ly, vận động viên (người tham gia sự kiện) cần thực hiện thông báo với
            Onewaymarathon.com trước ít nhất 1 tuần so với ngày diễn ra giải chạy. Việc xác nhận thông tin mới sẽ được
            chúng tôi cập nhật thông qua email xác nhận của Oneway và việc thay đổi cự ly hoàn toàn miễn phí. Vận động
            viên chỉ cần thanh toán phí chênh lệch giá vé theo giá trị của các cự ly, với cự ly nhỏ hơn sẽ không hoàn
            phí chênh lệch.
          </li>
          <li>
            Thời gian và Phương thức thanh toán phí chênh lệch/hoàn phí: Theo phương thức chuyển khoản. Nhân viên của
            Onewaymarathon.com sẽ gọi điện liên hệ với vận động viên (người tham gia sự kiện) để xác nhận thông tin tài
            khoản ngân hàng thụ hưởng.
          </li>
        </ol>
      </Content>
    </div>
  );
};

export default PrivacyRefund;
