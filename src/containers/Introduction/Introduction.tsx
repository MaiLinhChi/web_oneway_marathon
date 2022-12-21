import React from 'react';
import { Col, Row } from 'antd';

import ImageIntroduction from '@/assets/images/image-introduction.png';

import { TIntroductionProps } from './Introduction.types.d';
import './Introduction.scss';

const Introduction: React.FC<TIntroductionProps> = () => {
  return (
    <section className="Introduction">
      <div className="container">
        <div className="Introduction-wrapper">
          <Row gutter={[64, 24]}>
            <Col span={17}>
              <h2 className="Introduction-title">
                Giới thiệu
                <span>OneWay Marathon</span>
              </h2>
              <div className="Introduction-description">
                OneWay là giải chạy marathon được tổ chức thường xuyên bởi Tạp chí Điện tử Doanh nhân trẻ, Đài Tiếng nói
                Việt Nam và Hội Nhà báo Việt Nam nhằm nâng cao sức khỏe thể chất và tinh thần thi đấu với mong muốn tạo
                động lực cho mọi người vượt qua giới hạn của bản thân.Giải chạy OneWay Cát Bà 2022 được tổ chức tại đảo
                Cát Bà, huyện Cát Hải, thành phố Hải Phòng. Đến với cuộc thi, các vận động viên không chỉ được rèn luyện
                sức khỏe mà còn mà còn có cơ hội khám phá những cung đường hoang sơ, hùng vĩ của đảo Cát Bà. Chúng tôi
                đã tạo nên nhiều cung đường cùng với nhiều loại địa hình khác nhau sẽ đưa bạn qua các địa điểm nổi tiếng
                như Núi Ngọc, Cát Tiên, Cái Bèo,.. để trải nghiệm thiên nhiên và người dân địa phương nơi đây.Đến với
                OneWay, mỗi vận động viên không chỉ được phục vụ các dịch vụ du lịch đầy đủ tiện nghi, mà bạn còn được
                tận hưởng nền ẩm thực phong phú, đa dạng của địa phương.Bạn đã sẵn sàng thử thách bản thân và trải
                nghiệm những cung đường mới cùng OneWay Cát Bà 2022 chưa? Hãy tham gia cùng chúng tôi!Vận động viên sẽ
                chọn một trong ba cự ly thi đấu, bao gồm: Milestone: 5km, Breakthrough: 10km và Half-marathon: 21km.
              </div>
            </Col>
            <Col span={7}>
              <div className="Introduction-image">
                <img src={ImageIntroduction} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
