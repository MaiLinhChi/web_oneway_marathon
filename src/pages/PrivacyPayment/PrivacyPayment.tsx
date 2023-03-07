import React from 'react';

import Content from '@/components/Content';

const PrivacyPayment: React.FC = () => {
  return (
    <div className="PrivacyPayment">
      <Content>
        <h1 className="text-center">Chính sách thanh toán</h1>
        <h2>I. ĐIỀU KHOẢN THANH TOÁN SỐ BÁO DANH THI ĐẤU BIB</h2>
        <br />

        <ol>
          <li>
            Việc tiến hành thanh toán suất BIB là bước tiếp theo sau khi vận động viên đã đọc và đồng ý tất cả nội dung
            của giải chạy; về qui định, qui chuẩn của vận động viên tham gia giải chạy. Vận động viên cam kết không có
            bất kỳ khiếu nại nào về việc không đủ tiêu chuẩn để tham gia mặc dù đã thanh toán.
          </li>
          <li>
            Số báo danh thi đấu (BIB) dành riêng cho mỗi người tham dự và không thể thay đổi. Việc tự ý mua bán/hoặc
            chuyển nhượng BIB bị nghiêm cấm, kết quả sẽ không được công nhận khi bị phát hiện người chạy sai tên, sai
            BIB, sai thông tin đã đăng ký.
          </li>
          <li>
            Về chính sách ghi nhận thanh toán hoàn tất và chốt vé cho khách: sau khi ghi nhận thông tin đăng ký thì nhân
            viên của Onewaymarathon.com sẽ gọi điện hay email để xác nhận; trong vòng 24h giờ quý khách cần thanh toán
            để chốt vé.
          </li>
          <li>
            Các điều khoản liên quan đến hoàn hủy vé: Sau khi hoàn thành việc đăng ký, vận động viên sẽ không được hoàn
            lại phí đăng ký nếu không thể tham gia sự kiện với bất kỳ lý do gì.
          </li>
          <li>
            Trong trường hợp muốn thay đổi BIB cự ly cần thực hiện trước ít nhất 1 tuần so với ngày diễn ra giải chạy.
            Việc xác nhận thông tin mới sẽ được cập nhật thông qua email xác nhận của Onewaymarathon.com và việc thay
            đổi cự ly hoàn toàn miễn phí. Vận động viên chỉ cần thanh toán phí chênh lệch theo giá trị của các cự ly,
            với cự ly nhỏ hơn sẽ không hoàn phí chênh lệch.
          </li>
          <li>
            Trách nhiêm và quyền hạn của Onewaymarathon.com đối với sự kiện bất khả kháng: Chúng tôi có quyền hủy đặt
            chỗ hoặc thay đổi dịch vụ bất kỳ lúc nào khi phát sinh các trường hợp không lường trước được. Những trường
            hợp như vậy bao gồm nhưng không giới hạn ở: chiến tranh hoặc đe dọa chiến tranh, lây lan dịch bệnh, bạo
            loạn, xung đột dân sự, hoạt động khủng bố, tranh chấp công nghiệp, thảm họa tự nhiên hoặc hạt nhân, hỏa
            hoạn, thời tiết bất lợi và / hoặc điều kiện giao thông, hành động của chính phủ hoặc đối với bất kỳ lý do
            nào nằm ngoài tầm kiểm soát của chúng tôi. Trong những trường hợp này, chúng tôi không chịu trách nhiệm pháp
            lý khi giải chạy buộc phải hủy bỏ hoặc thay đổi do bất kỳ trường hợp không lường trước được.
          </li>
        </ol>

        <h2>II. HÌNH THỨC THANH TOÁN</h2>
        <br />
        <p>
          Hiện tại, website Onewaymarathon chấp nhận hình thức thanh toán trực tuyến qua cổng thanh toán Onepay. Người
          dùng có thể lựa chọn thanh toán trực tuyến qua cổng bằng các loại thẻ sau:
        </p>
        <ol>
          <li>
            Thanh toán trực tuyến bằng thẻ ATM/tài khoản ngân hàng (ATM Card/ Bank Account)
            <ul>
              <li>
                Tại bước thanh toán trên website, người dùng nhấn chọn nút “ATM Card/ Bank Account”. Sau đó, hệ thống
                điều chuyển sang giao diện cổng thanh toán OnePay. Người dùng nhấn chọn ngân hàng của mình, nhập đầy đủ
                thông tin về số thẻ, tháng/năm phát hành thẻ và tên chủ thẻ và nhấn nút “Thanh toán” để hoàn tất giao
                dịch.
              </li>
              <li>Thanh toán trực tuyến bằng thẻ Visa/Mastercard (Credit card):</li>
            </ul>
          </li>
          <li>
            Tại bước thanh toán trên website, người dùng nhấn chọn nút “Credit card”. Sau đó, hệ thống điều chuyển sang
            giao diện cổng thanh toán OnePay. Người dùng nhập đầy đủ thông tin về số thẻ, tháng/năm hết hạn và CSC*, sau
            đó nhấn nút “Thanh toán” để hoàn tất giao dịch.
          </li>
        </ol>

        <h2>III. BẢO MẬT THÔNG TIN THANH TOÁN</h2>
        <br />
        <h3>Cam kết bảo mật thanh toán:</h3>
        <br />
        <p>
          Hệ thống thanh toán thẻ được cung cấp bởi đối tác cổng thanh toán OnePay (“Đối Tác Cổng Thanh Toán”) đã được
          cấp phép hoạt động hợp pháp tại Việt Nam. Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ tại website
          Onewaymarathon.com đảm bảo tuân thủ theo các tiêu chuẩn bảo mật ngành.
        </p>
        <h3>Quy định bảo mật thanh toán:</h3>
        <br />
        <ol>
          <li>
            Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa đảm bảo tuân thủ các tiêu chuẩn bảo mật của
            OnePay gồm:
            <ul>
              <li>
                Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL
                (Secure Sockets Layer):
              </li>
              <li>Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.</li>
              <li>Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy cập tài khoản được xác thực.</li>
              <li>Tiêu chuẩn mã hóa MD5 128 bit.</li>
              <li>
                Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy định của Ngân hàng
                nhà nước Việt Nam.
              </li>
            </ul>
          </li>
          <li>
            Chính sách bảo mật giao dịch trong thanh toán của Onewaymarathon.com áp dụng với Khách hàng:
            <ul>
              <li>
                Onewaymarathon.com cung cấp tiện ích lưu giữ token – chỉ lưu chuỗi đã được mã hóa bởi OnePay cung cấp
                cho Onewaymarathon.com. Onewaymarathon.com không trực tiếp lưu trữ thông tin thẻ khách hàng. Việc bảo
                mật thông tin thẻ thanh toán Khách hàng được thực hiện bởi OnePay.
              </li>
              <li>
                Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng mà có khả năng sử dụng để xác lập giao dịch
                không được lưu trên hệ thống của Onewaymarathon.com.{' '}
              </li>
              <li>Đối với thẻ nội địa: Onewaymarathon.com chỉ lưu trữ mã đơn hàng, mã giao dịch và tên ngân hàng.</li>
              <li>
                Onepay không lưu giữ thông tin thẻ của Khách hàng, thông tin chỉ dùng để thực hiện thanh toán và dùng
                trong trường hợp cần thiết đối chiếu với thông tin của vận động viên.
              </li>
              <li>
                Onewaymarathon.com cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo mật cần thiết cho mọi hoạt
                động thanh toán thực hiện trên website Onewaymarathon.com.{' '}
              </li>
            </ul>
          </li>
        </ol>
      </Content>
    </div>
  );
};

export default PrivacyPayment;
