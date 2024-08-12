import cn from 'classnames';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import HeadImg from '@/assets/home/headicon.png';

export type PropsInput = {
  headerData: {
    header: {
      main: string | undefined;
      submain?: string;
    };
    text: string;
  };
  button?: boolean;
  buttonText?: string;
  buttonPosition?: 'top' | 'bottom' | 'left' | 'right';
  linkTo?: string;
};

export const HeaderWithBackgroundColor: React.FC<PropsInput> = (props) => {
  return (
    <div className="">
      <div className={cn('')}>
        {props.buttonPosition === 'top' && (
          <div className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full text-lg">
            {props.buttonText}
          </div>
        )}

        <div className="flex flex-col gap-y-3  py-40 md:py-20 lg:py-16">
          {props.headerData.header.submain && (
            <span className="text-muted-foreground text-center text-sm font-normal">
              {props.headerData.header.submain}
            </span>
          )}
          <div className="relative">
            <img
              className="absolute  w-3 md:w-5 -top-3 left-[3.1rem] md:-top-5 md:-left-[1.3rem] lg:-left-[1rem]"
              src={HeadImg}
              alt=""
            />
            <h2 className=" text-xl text-center  md:text-4xl lg:text-5xl font-bold">
              {props.headerData.header.main}{' '}
            </h2>
          </div>

          <p className="paragraf text-card text-center font-normal text-sm md:text-base lg:text-lg ">
            {props.headerData.text}
          </p>
        </div>
        {props.linkTo && props.buttonPosition !== 'top' && (
          <Link to={props.linkTo}>
            <Button variant="destructive">{props.buttonText}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderWithBackgroundColor;
