import ImageDoanhNhanTre from '@/assets/images/image-doanh-nhan-tre.png';
import ImageDoanhNhanTreDark from '@/assets/images/image-doanh-nhan-tre-dark.png';
import ImageHoiNhaBaoVietNam from '@/assets/images/image-hoi-nha-bao-viet-nam.png';
import ImageMoreTrip from '@/assets/images/image-more-trip.png';
import ImageMoreTripDark from '@/assets/images/image-more-trip-dark.png';
import ImageOn365 from '@/assets/images/image-on-365.png';
import ImageOnebit from '@/assets/images/image-onebit.png';
import ImagePhone91 from '@/assets/images/image-phone-91.png';
import ImageShopdi from '@/assets/images/image-shopdi.png';
import ImageShopdiDark from '@/assets/images/image-shopdi-dark.webp';
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
    link: '#',
    logo: dark ? ImageDoanhNhanTreDark : ImageDoanhNhanTre,
    maxWidth: '13.4rem',
  },
  {
    link: '#',
    logo: ImageVOV,
    maxWidth: '9.28rem',
  },
  {
    link: '#',
    logo: ImageHoiNhaBaoVietNam,
    maxWidth: '3.9rem',
  },
  {
    link: '#',
    logo: ImageRespo,
    maxWidth: '11rem',
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
    link: '#',
    logo: dark ? ImageShopdiDark : ImageShopdi,
    maxWidth: '12.6rem',
  },
  {
    link: '#',
    logo: ImageOn365,
    maxWidth: '7.2rem',
  },
  // {
  //   link: '#',
  //   logo: ImagePhone91,
  //   maxWidth: '4.5rem',
  // },
];
