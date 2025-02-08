import { FC } from "react";
import { Container } from "..";
import Marquee from "react-fast-marquee";
import { MarqueePropsType } from "../../../utils/data/case";

const GenericMarquee: FC<MarqueePropsType> = ({
  speed,
  gradient,
  pauseOnHover,
  marquee_data,
  gradientColor,
  gradientWidth,
}) => {
  return (
    <Container fluid className="relative mt-[12px] mb-[100px]">
      <Marquee
        speed={speed}
        gradient={gradient}
        pauseOnHover={pauseOnHover}
        gradientColor={gradientColor}
        gradientWidth={gradientWidth}
      >
        {marquee_data.concat(marquee_data, marquee_data).map((item, index) => (
          <div key={index} className="flex items-center justify-center mx-2">
            <img
              src={item.image}
              alt={`Image of ${item.title}`}
              className="w-[270px] h-[140px] object-cover rounded-2xl cursor-pointer"
            />
          </div>
        ))}
      </Marquee>
    </Container>
  );
};

export default GenericMarquee;
