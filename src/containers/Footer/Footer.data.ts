import ImageDoanhNhanTre from '@/assets/images/image-doanh-nhan-tre.png';
import ImageDoanhNhanTreDark from '@/assets/images/image-doanh-nhan-tre-dark.png';
import ImageHoiNhaBaoVietNam from '@/assets/images/image-hoi-nha-bao-viet-nam.png';
import ImageMoreTrip from '@/assets/images/image-more-trip.png';
import ImageMoreTripDark from '@/assets/images/image-more-trip-dark.png';
import ImageOn365 from '@/assets/images/image-on-365.png';
import ImageOnebit from '@/assets/images/image-onebit.png';
import ImagePhone91 from '@/assets/images/image-phone-91.png';
import ImageShopdi from '@/assets/images/logo-shopdi-dark.png';
import ImageShopdiDark from '@/assets/images/logo-shopdi-white.png';
import ImageVOV from '@/assets/images/image-vov.png';
import ImageVuonUom from '@/assets/images/image-vuon-uom.png';
import ImageVuonUomDark from '@/assets/images/image-vuon-uom-dark.png';
import ImageRespo from '@/assets/images/respotext.png';
import { TFooterPartnerLink } from '@/containers/Footer/Footer.types';
import { Paths } from '@/pages/routers';

export const dataFooterLinks = [
  {
    link: Paths.BuyOnlineTicketTutorials,
    title: 'Hướng dẫn mua vé trực tuyến',
  },
  {
    link: Paths.PrivacyRefund,
    title: 'Chính sách đổi trả, hoàn tiền',
  },
  {
    link: Paths.PrivacyPrivate,
    title: 'Chính sách bảo mật thông tin',
  },
  {
    link: Paths.PrivacyPayment,
    title: 'Chính sách thanh toán',
  },
  {
    link: Paths.PrivacyDelivery,
    title: 'Chính sách vận chuyển, giao nhận',
  },
  {
    link: Paths.PrivacySolvedProblem,
    title: 'Quy trình tiếp nhận và giải quyết khiếu nại',
  },
];

export const dataFooterPartnerLinks = (dark?: boolean): TFooterPartnerLink[] => [
  {
    link: 'https://vnexpress.net/tag/doanh-nhan-tre-149597',
    logo: dark ? ImageDoanhNhanTreDark : ImageDoanhNhanTre,
    maxWidth: '15.4rem',
  },
  {
    link: 'https://vnexpress.net/tag/doanh-nhan-tre-149597',
    logo: ImageVOV,
    maxWidth: '12.28rem',
  },
  {
    link: 'https://hoinhabao.vn/',
    logo: ImageHoiNhaBaoVietNam,
    maxWidth: '5.9rem',
  },
  {
    link: '#',
    logo: ImageRespo,
    maxWidth: '13rem',
  },
  // {
  //   link: '#',
  //   logo: dark ? ImageVuonUomDark : ImageVuonUom,
  //   maxWidth: '10.6rem',
  // },
  // {
  //   link: '#',
  //   logo: dark ? ImageMoreTripDark : ImageMoreTrip,
  //   maxWidth: '7.9rem',
  // },
  {
    link: 'https://kols.shopdi.com.vn/',
    logo: dark ? ImageShopdiDark : ImageShopdi,
    maxWidth: '17.6rem',
  },
  {
    link: 'https://laodong.vn/van-hoa-giai-tri/vtvcab-phat-trien-kenh-phat-thanh-on-365-fm-1029812.ldo',
    logo: ImageOn365,
    maxWidth: '8.2rem',
  },
  // {
  //   link: '#',
  //   logo: ImagePhone91,
  //   maxWidth: '4.5rem',
  // },
];
