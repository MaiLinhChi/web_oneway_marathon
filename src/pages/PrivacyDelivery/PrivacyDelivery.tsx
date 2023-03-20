import React from 'react';

import Content from '@/components/Content';

const PrivacyDelivery: React.FC = () => {
  return (
    <div className="PrivacyDelivery">
      <Content>
        <h1 className="text-center">Chính sách vận chuyển, giao nhận</h1>
        <p>
          Vé điện tử kèm Số báo danh thi đấu (BIB) để tham dự sự kiện sẽ được gửi tới Vận động viên (Người tham gia sự
          kiện) qua email và tin nhắn để sử dụng khi tham dự sự kiện. Onewaymarathon.com ưu tiên cung cấp vé điện tử cho
          khách hàng (chúng tôi chỉ cung cấp vé giấy cho khách hàng trong trường hợp có yêu cầu từ đơn vị tổ chức sự
          kiện đó).{' '}
        </p>
        <p>
          Vé giấy sẽ được nhân viên của Onewaymarathon.com giao tận tay khách hàng nếu ở nội thành Thành phố Hồ Chí
          Minh; đối với các khách hàng ở ngoại thành hoặc ở xa chúng tôi sẽ sử dụng dịch vụ chuyển phát của các nhà cung
          cấp dịch vụ vận chuyển để giao vé cho khách hàng.{' '}
        </p>
        <ol>
          <li>
            Đối với phí giao nhận cho các khách ở tỉnh, phí dịch vụ sẽ được tính theo phí của nhà cung cấp dịch vụ vận
            chuyển, Onewaymarathon.com sẽ gọi xác nhận và báo phí trước khi tiến hành giao vé cho khách hàng. Biểu phí
            vận chuyển có thể thay đổi tùy theo đơn vị vận chuyển.
          </li>
          <li>
            Đối với thời gian giao nhận:
            <ul>
              <li>Trong nội thành Thành phố Hồ Chí Minh: 4 - 6 giờ, kể từ khi xác nhận đơn hàng thành công.</li>
              <li>Ở ngoại thành hoặc các tỉnh khác: 1 - 3 ngày, kể từ khi xác nhận đơn hàng thành công.</li>
            </ul>
          </li>
        </ol>
      </Content>
    </div>
  );
};

export default PrivacyDelivery;
