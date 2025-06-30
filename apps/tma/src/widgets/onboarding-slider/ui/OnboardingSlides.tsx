import styles from "@animman/tma/widgets/onboarding-slider/ui/onboardingSlides.scss";
import onboardingImg from "@animman/tma/shared/assets/images/pictures/onboarding.jpg";
import { Images } from "@animman/tma/shared/types/image";
const images: Images = [
  {
    src: onboardingImg,
    alt: "woman with phone",
    width: 375,
    height: 421,
  },
  {
    src: onboardingImg,
    alt: "woman with phone",
    width: 375,
    height: 421,
  },
  {
    src: onboardingImg,
    alt: "woman with phone",
    width: 375,
    height: 421,
  },
];

export default function OnboardingSlides({ slide }: { slide: number }) {
  return (
    <img
      className={styles.img}
      src={images[slide].src}
      alt={images[slide].alt}
    />
  );
}
