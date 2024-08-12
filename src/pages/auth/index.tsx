import Register from '@/assets/register/register.png';
import Logo from '@/assets/home/Logo.png';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/headers/hero-section';

type AuthFormLayoutProps = {
  children: ReactNode;
};

const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden">
      <div className="flex h-full w-full  max-sm:flex-col">
        <div className=" w-1/2 max-md:w-full bg-background">
          <div className="mt-9 flex justify-center items-center mx-20">
            <Link className="flex justify-center md:justify-start" to={'/'}>
              <img src={Logo} alt="logo" className="w-9/12 md:w-1/3 text-center" />
            </Link>
          </div>
          <div className="md:w-max mt-20 md:mx-14">{children}</div>
        </div>
        <div className="hidden relative h-full md:flex flex-1 bg-custom-gradient bg-cover bg-no-repeat bg-center section">
          <HeroSection
            preTitle="Introducing Quick Journey"
            title={`Plan your dream journey<br/> quick and with AI`}
            description={`Discover personalized travel experiences and connect with a community of explorers.<br/>Let our AI turn your dream trips into reality with stunning visuals and comprehensive plans.`}
            showFourthImage={false}
          />
          <div className="flex p-5">
            <img className=" pt-2 pl-2  absolute  right-0 top-[300px]" src={Register} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFormLayout;
