import Link from '@/assets/home/Link.png';
import { heroData } from '@/data';
import { FC, ReactNode } from 'react';
import Arrow from '@/assets/svg/Arrow.svg';
import { varSlide } from '@/lib/variants';
import MotionViewport from "@/components/animation/motion-viewport";

interface IProps {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}
const Hero: FC<IProps> = () => {
  return (
    <MotionViewport variants={varSlide('left')}>
      <div
        id="about"
        className="relative section bg-muted h-full flex flex-col justify-center items-center py-10 md:py-40">
        <img className="hidden md:block md:absolute top-20 left-0" src={Arrow} alt="" />
        <div className="flex flex-col justify-center items-center gap-y-2">
          <img src={Link} alt="#" />
          <h2 className="text-center font-semibold text-foreground text-2xl md:text-4xl">
            Everything you need <br />
            to find your quickest journey
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-5 container">
          {heroData.map((item) => (
            <div key={item.id} className="flex flex-col justify-start items-start gap-y-2 mt-10">
              <div className="w-10 h-10 rounded-sm bg-white flex justify-center items-center">
                <img src={item.icon} alt="#" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-lg mb-2">{item.title}</h4>
                {/* <p className='text-muted-foreground font-normal text-sm'>{item.description}</p> */}
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionViewport>
  );
};

export default Hero;
