import Check from '@/assets/svg/check.svg';
import Magic from '@/assets/svg/magic.svg';
import Feature from '@/assets/home/feature.png';
import Hand from '@/assets/home/Hand 1.png';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MotionViewport from "@/components/animation/motion-viewport";
import { varSlide } from '@/lib/variants';

const data = [
  { id: 1, text: 'Limitless creating promts' },
  { id: 2, text: 'Customizable dashboard' },
  { id: 3, text: 'Personal user profiles' },
  { id: 4, text: 'Providing 7/24 support' },
  { id: 5, text: 'Sharing and socializing' },
  { id: 6, text: 'Sense of community' },
  { id: 7, text: 'Share blogs and join the competition' }
];
const Best = () => {
  return (
    <MotionViewport variants={varSlide("left")}>
 <div className="relative section bg-custom-gradient flex justify-between" id="features">
      <img className="hidden md:block md:w-20 absolute right-10 top-10" src={Hand} alt="#" />
      <div className="container py-10 md:py-20  flex flex-col md:flex-row justify-between items-center">
        <div className="-ml-10 md:ml-0 order-2 md:order-1 flex flex-col gap-y-4 justify-center items-center">
          <img src={Feature} alt="featureImage" />
          <div className="text-center md:hidden">
            <Link to="/">
              <Button className="flex">
                <img className="" src={Magic} />
                <span className="ml-2">Start today</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1">
          <h2 className="font-bold text-foreground text-2xl md:text-3xl mb-5 md:mb-6">
            Find best and
            <br />
            Quick Journey with AI
          </h2>
          <p className="font-normal text-base text-muted-foreground mb-6">
            Enter your promy and let AI help you to find the best and the quickest
            <br />
            journey play for your preferences. Are you ready to this?
            <br />
            Explore and socialize with community
          </p>
          <ul className="mb-6">
            {data.map((item) => (
              <div className="flex gap-x-1 gap-y-3" key={item.id}>
                <img src={Check} alt="" />
                <li className="font-normal text-base text-muted-foreground">{item.text}</li>
              </div>
            ))}
          </ul>
          <div className="hidden text-center md:block">
            <Link to="/">
              <Button className="flex">
                <img className="" src={Magic} />
                <span className="ml-2">Start today</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </MotionViewport>
   
  );
};

export default Best;
