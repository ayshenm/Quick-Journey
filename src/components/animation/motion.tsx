import { Variants, motion, HTMLMotionProps } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface IProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  variants: Variants;
}

const MotionViewport: FC<IProps> = ({ id, className, children, variants, ...rest }) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      {...rest}>
      {children}
    </motion.div>
  );
};

export default MotionViewport;
