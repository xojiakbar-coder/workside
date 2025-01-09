import cardImage1 from "../../assets/images/google.jpg";
import cardImage3 from "../../assets/images/amazon.png";
import cardImage2 from "../../assets/images/microsoft.jpg";

export interface MarqueeItemType {
  id: number;
  title: string;
  image: string;
}

export interface MarqueePropsType {
  speed: number;
  pauseOnHover: boolean;
  marquee_data: MarqueeItemType[];
}

const our_case_data: MarqueeItemType[] = [
  {
    id: 1,
    title: "Our case item title",
    image: cardImage1,
  },
  {
    id: 2,
    title: "Our case item title",
    image: cardImage2,
  },
  {
    id: 3,
    title: "Our case item title",
    image: cardImage3,
  },
  {
    id: 4,
    title: "Our case item title",
    image: cardImage1,
  },
  {
    id: 5,
    title: "Our case item title",
    image: cardImage2,
  },
  {
    id: 6,
    title: "Our case item title",
    image: cardImage3,
  },
];

export default our_case_data;
