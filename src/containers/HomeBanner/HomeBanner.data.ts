import ImageHomeBanner1 from '@/assets/images/image-home-banner-1.png';
import ImageHomeBanner2 from '@/assets/images/image-home-banner-2.png';
import { EIconColor } from '@/components/Icon';
import { Paths } from '@/pages/routers';

export const dataHomeBannerCarousel = [
  {
    link: Paths.OneWayMarathonVungTau,
    title: 'Vũng Tàu 2023 ',
    background: ImageHomeBanner1,
    color: EIconColor.PERSIAN_GREEN,
  },
  {
    link: Paths.OneWayMarathonCatBa,
    title: 'Cát Bà 2023',
    background: ImageHomeBanner2,
    color: EIconColor.BLUE_RIBBON,
  },
];
