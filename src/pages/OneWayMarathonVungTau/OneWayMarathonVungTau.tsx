import React from 'react';

import ImageHomeBanner1 from '@/assets/images/image-home-banner-1.png';
import ImageTournamentMap2 from '@/assets/images/image-tournament-map-2.png';
import { EIconColor } from '@/components/Icon';
import TournamentOverview from '@/containers/TournamentOverview';
import TournamentMap from '@/containers/TournamentMap';
import TournamentReward from '@/containers/TournamentReward';
import TournamentRacekit from '@/containers/TournamentRacekit';
import TournamentService from '@/containers/TournamentService';
import TournamentPartner from '@/containers/TournamentPartner';
import TournamentRegister from '@/containers/TournamentRegister';
import TournamentRule from '@/containers/TournamentRule';
import TournamentEvent from '@/containers/TournamentEvent';

import './OneWayMarathonVungTau.scss';

const OneWayMarathonVungTau: React.FC = () => {
  return (
    <div className="OneWayMarathonVungTau">
      <TournamentOverview
        date="2023/12/01 00:00:00"
        title="Vũng Tàu 2023"
        background={ImageHomeBanner1}
        color={EIconColor.PERSIAN_GREEN}
        dataNav={[
          { title: 'Giới thiệu', link: '#' },
          { title: 'Đăng ký', link: '#' },
          { title: 'Cung đường', link: '#' },
          { title: 'Giải thưởng', link: '#' },
          { title: 'RACEKIT', link: '#' },
          { title: 'Dịch vụ liên quan', link: '#' },
          { title: 'Đối tác', link: '#' },
          { title: 'Lịch trình sự kiện', link: '#' },
          { title: 'Quy định và thể lệ ', link: '#' },
        ]}
        stepKilometer={[
          { label: '5', value: '5' },
          { label: '10', value: '10' },
          { label: '21', value: '21' },
          { label: '42', value: '42' },
        ]}
        description="OneWay là giải chạy marathon được tổ chức thường xuyên bởi Tạp chí Điện tử Doanh nhân trẻ, Đài Tiếng nói Việt Nam và Hội Nhà báo Việt Nam nhằm nâng cao sức khỏe thể chất và tinh thần thi đấu với mong muốn tạo động lực cho mọi người vượt qua giới hạn của bản thân.Giải chạy OneWay Cát Bà 2022 được tổ chức tại đảo Cát Bà, huyện Cát Hải, thành phố Bà Rịa. Đến với cuộc thi, các vận động viên không chỉ được rèn luyện sức khỏe mà còn mà còn có cơ hội khám phá những cung đường hoang sơ, hùng vĩ của đảo Cát Bà. Chúng tôi đã tạo nên nhiều cung đường cùng với nhiều loại địa hình khác nhau sẽ đưa bạn qua các địa điểm nổi tiếng như Núi Ngọc, Cát Tiên, Cái Bèo,.. để trải nghiệm thiên nhiên và người dân địa phương nơi đây.Đến với OneWay, mỗi vận động viên không chỉ được phục vụ các dịch vụ du lịch đầy đủ tiện nghi, mà bạn còn được tận hưởng nền ẩm thực phong phú, đa dạng của địa phương.Bạn đã sẵn sàng thử thách bản thân và trải nghiệm những cung đường mới cùng OneWay Cát Bà 2022 chưa? Hãy tham gia cùng chúng tôi!Vận động viên sẽ chọn một trong ba cự ly thi đấu, bao gồm: Milestone: 5km, Breakthrough: 10km và Half-marathon: 21km."
        dateTournament="10/12/2022"
        locationTournament="Vũng Tàu-Bà Rịa"
        typeTournament="Road/City trail"
      />

      <div className="OneWayMarathonVungTau-wrapper">
        <TournamentRegister color={EIconColor.PERSIAN_GREEN} />

        <TournamentRegister color={EIconColor.PERSIAN_GREEN} multiple />

        <TournamentMap
          color={EIconColor.PERSIAN_GREEN}
          title="OneWay Vũng Tàu"
          stepKilometer={[
            {
              label: '5',
              value: '5',
              image: ImageTournamentMap2,
              list: [
                { label: 'Xuất phát từ Quảng trường, dọc đường ven biển đến bãi Cát Cò 3.', value: '1' },
                { label: 'Đi xuyên qua bãi Cát Cò 3 theo đường 1 bên núi 1 bên biển sang Cát Cò 2', value: '2' },
                { label: 'Đi vào đường Cát Tiên', value: '3' },
                { label: 'Vào đường ¼', value: '4' },
                { label: 'Rẽ phải vào Núi Ngoc', value: '5' },
                { label: 'Rẽ phải sang Cái Bèo – Hà Sen', value: '6' },
                { label: 'Quay đầu', value: '7' },
                { label: 'Đường Hà Sen', value: '8' },
                { label: 'Rẽ phải vào đường Tùng Thu, qua bãi tắm Tùng Thu', value: '9' },
                { label: 'ĐI theo đường bên phải Hồ nước', value: '10' },
                { label: 'Rẽ vào ¼ về đích', value: '11' },
              ],
            },
            {
              label: '10',
              value: '10',
              image: ImageTournamentMap2,
              list: [
                { label: 'Xuất phát từ Quảng trường, dọc đường ven biển đến bãi Cát Cò 3.', value: '1' },
                { label: 'Đi xuyên qua bãi Cát Cò 3 theo đường 1 bên núi 1 bên biển sang Cát Cò 2', value: '2' },
                { label: 'Đi vào đường Cát Tiên', value: '3' },
                { label: 'Vào đường ¼', value: '4' },
                { label: 'Rẽ phải vào Núi Ngoc', value: '5' },
                { label: 'Rẽ phải sang Cái Bèo – Hà Sen', value: '6' },
                { label: 'Quay đầu', value: '7' },
                { label: 'Đường Hà Sen', value: '8' },
                { label: 'Rẽ phải vào đường Tùng Thu, qua bãi tắm Tùng Thu', value: '9' },
                { label: 'ĐI theo đường bên phải Hồ nước', value: '10' },
                { label: 'Rẽ vào ¼ về đích', value: '11' },
              ],
            },
            {
              label: '21',
              value: '21',
              image: ImageTournamentMap2,
              list: [
                { label: 'Xuất phát từ Quảng trường, dọc đường ven biển đến bãi Cát Cò 3.', value: '1' },
                { label: 'Đi xuyên qua bãi Cát Cò 3 theo đường 1 bên núi 1 bên biển sang Cát Cò 2', value: '2' },
                { label: 'Đi vào đường Cát Tiên', value: '3' },
                { label: 'Vào đường ¼', value: '4' },
                { label: 'Rẽ phải vào Núi Ngoc', value: '5' },
                { label: 'Rẽ phải sang Cái Bèo – Hà Sen', value: '6' },
                { label: 'Quay đầu', value: '7' },
                { label: 'Đường Hà Sen', value: '8' },
                { label: 'Rẽ phải vào đường Tùng Thu, qua bãi tắm Tùng Thu', value: '9' },
                { label: 'ĐI theo đường bên phải Hồ nước', value: '10' },
                { label: 'Rẽ vào ¼ về đích', value: '11' },
              ],
            },
            {
              label: '42',
              value: '42',
              image: ImageTournamentMap2,
              list: [
                { label: 'Xuất phát từ Quảng trường, dọc đường ven biển đến bãi Cát Cò 3.', value: '1' },
                { label: 'Đi xuyên qua bãi Cát Cò 3 theo đường 1 bên núi 1 bên biển sang Cát Cò 2', value: '2' },
                { label: 'Đi vào đường Cát Tiên', value: '3' },
                { label: 'Vào đường ¼', value: '4' },
                { label: 'Rẽ phải vào Núi Ngoc', value: '5' },
                { label: 'Rẽ phải sang Cái Bèo – Hà Sen', value: '6' },
                { label: 'Quay đầu', value: '7' },
                { label: 'Đường Hà Sen', value: '8' },
                { label: 'Rẽ phải vào đường Tùng Thu, qua bãi tắm Tùng Thu', value: '9' },
                { label: 'ĐI theo đường bên phải Hồ nước', value: '10' },
                { label: 'Rẽ vào ¼ về đích', value: '11' },
              ],
            },
          ]}
        />

        <TournamentReward color={EIconColor.PERSIAN_GREEN} title="OneWay Vũng Tàu" />

        <TournamentRacekit
          color={EIconColor.PERSIAN_GREEN}
          colors={[
            'radial-gradient(#008C6E, #008C6E)',
            'linear-gradient(to right, #00AF89, #00AF89)',
            'radial-gradient(#008C6E, #008C6E)',
            'linear-gradient(to right, #00AF89, #00AF89)',
          ]}
        />

        <TournamentService color={EIconColor.PERSIAN_GREEN} buttonProps={{ title: 'Đặt combo' }} />

        <TournamentPartner title="OneWay Vũng Tàu" color={EIconColor.PERSIAN_GREEN} />

        <TournamentEvent color={EIconColor.PERSIAN_GREEN} />

        <TournamentRule color={EIconColor.PERSIAN_GREEN} />
      </div>
    </div>
  );
};

export default OneWayMarathonVungTau;
