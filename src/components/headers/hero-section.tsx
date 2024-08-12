import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import Image1 from '@/assets/home/img1.png';
import Image2 from '@/assets/home/img2.png';
import Image3 from '@/assets/home/img3.png';
import Image4 from '@/assets/home/img4.png';
import HeadImg from '@/assets/home/headicon.png';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  preTitle: string;
  title: string;
  description: string;
  primaryButton?: {
    link: string;
    imageSrc?: string;
    text?: string;
  };
  secondaryButton?: {
    text?: string;
    link: string;
  };
  showFourthImage?: boolean;
}

const HeroSection: FC<HeroSectionProps> = ({
  preTitle,
  title,
  description,
  primaryButton,
  secondaryButton,
  showFourthImage = true // Default to true to show the fourth image unless specified
}) => {
  return (
    <section className="text-center py-10 px-5 md:py-20 relative">
      <div className="mb-6 relative z-10">
        <img
          className={cn("absolute w-9 sm:w-12 md:w-14 -top-10 md:-top-10  left-1 sm:left-[2%] md:-left-0 lg:-left-[100px]",{
            "lg:-left-0": !showFourthImage
          })}
          src={Image1}
          alt=""
        />
        <img
          className={cn("absolute w-9 sm:w-12 right-1 -top-10 md:-top-10 md:w-14 md:-right-0 lg:-right-[100px]",{
            "lg:-right-0": !showFourthImage
          })}
          src={Image2}
          alt=""
        />
        <p
          className={cn('text-sm md:text-xl font-medium text-muted-foreground', {
            'lg:text-lg': !showFourthImage
          })}>
          {preTitle}
        </p>

        <div className="relative">
          <img
            className={cn("absolute w-3  sm:left-[2%] md:w-5 -top-3 left-[10%]  md:-top-5 md:left-[7.75rem] lg:-top-2 lg:left-[6px]",{
                '!left-[138px]': !showFourthImage
            })}
            src={HeadImg}
            alt=""
          />
          <h1
            className={cn('text-center font-bold leading-2', {
              'text-xl md:text-4xl lg:text-6xl': showFourthImage,
              'text-lg md:text-3xl lg:text-3xl': !showFourthImage
            })}
            dangerouslySetInnerHTML={{ __html: title }}></h1>
        </div>
        <p
          className={cn('mt-4 text-base md:text-lg text-muted-foreground', {
            'text-lg md:text-3xl lg:text-base': !showFourthImage
          })}
          dangerouslySetInnerHTML={{ __html: description }}></p>
        <img
          className={cn("absolute w-9 sm:w-12  -bottom-14 right-1 md:-bottom-7 md:w-14 md:right-[622px] lg:right-[759px]",{
            '!left-0 top-[15rem]': !showFourthImage
          })}
          src={Image3}
          alt=""
        />
        {showFourthImage && (
          <>
            <img
              className="absolute w-9 sm:w-12 -bottom-14 left-1 md:-bottom-7 md:w-14 md:left-[615px] lg:left-[750px]"
              src={Image4}
              alt=""
            />
            <div className="flex flex-col md:flex-row justify-center gap-x-3 gap-y-3 mt-2 md:mt-5">
              {primaryButton && primaryButton.link && (
                <Link to={primaryButton.link}>
                  <Button>
                    {primaryButton.imageSrc && (
                      <img className="w-5 h-5" src={primaryButton.imageSrc} alt="icon" />
                    )}
                    <span className="ml-2">{primaryButton.text}</span>
                  </Button>
                </Link>
              )}
              {secondaryButton && secondaryButton.link && (
                <Link to={secondaryButton.link}>
                  <Button variant="ghost">{secondaryButton.text}</Button>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
