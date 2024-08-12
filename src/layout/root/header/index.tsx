import HeaderImage from '@/assets/home/headerImg.png';
import Magic from '@/assets/svg/magic.svg';
import Navbar from '../navbar';
import MotionViewport from '@/components/animation/motion-viewport';
import { varSlide } from '@/lib/variants';
import HeroSection from '@/components/headers/hero-section';

const Header = () => {
  return (
    <MotionViewport variants={varSlide('right')}>
      <header className="bg-custom-gradient section  !z-[100000000000]">
        <div className="pt-8 flex flex-col justify-center  items-center gap-y-4">
          <Navbar />
          <div className="mt-[123px] md:mt-[80px] flex flex-col justify-center items-center gap-y-5">
            <MotionViewport variants={varSlide('left')}>
              <HeroSection
                preTitle="Introducing Quick Journey"
                title={`Plan your dream journey<br/> quick and with AI`}
                description={`Discover personalized travel experiences and connect with a community of explorers.<br/>Let our AI turn your dream trips into reality with stunning visuals and comprehensive plans.`}
                primaryButton={{
                  link: '/signup',
                  imageSrc: Magic,
                  text: 'Create your journey'
                }}
                secondaryButton={{
                  link: '/contact-us',
                  text: 'Contact us'
                }}
                showFourthImage={true}
              />
            </MotionViewport>
            <div className="mt-5 pt-3 px-2 rounded-t-3xl">
              <img className="rounded-t-3xl" src={HeaderImage} alt="headerImage" />
            </div>
          </div>
        </div>
      </header>
    </MotionViewport>
  );
};

export default Header;
