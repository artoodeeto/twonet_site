import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Services Offered",
  desc: "Non-Medical Home Services",
  image: benefitOneImg,
  bullets: [
    {
      title: "Personal Care Assistance",
      desc: "Description here for personal care assistance.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Companionship Services",
      desc: "Description here for companionship services.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Daily Living Support",
      desc: "Description here for daily living support.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Specialized Support (non clinical)",
      desc: "Description here for specialized support (non clinical).",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export {benefitOne, benefitTwo};
