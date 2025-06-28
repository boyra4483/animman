import { type Images } from "@animman/tma/shared/types/image";
import OnboardingSlider from "@animman/tma/widgets/onboardingSlider/ui/OnboardingSlider";
import onboardingFirstImg from "@animman/tma/shared/assets/images/pictures/onboarding-first.jpg";

const images: Images = [
  {
    src: onboardingFirstImg,
    alt: "woman with smartphone",
    width: 375,
    height: 421,
  },
  {
    src: "onboardingSecondImg",
    alt: "anime character looking at PC",
    width: 375,
    height: 421,
  },
  {
    src: "onboardingThirdImg",
    alt: "anime character looking and pointing at smartphone",
    width: 375,
    height: 421,
  },
];

export default function Onboarding() {
  return <OnboardingSlider images={images} />;
}
