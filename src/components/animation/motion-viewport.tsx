import { Variants, motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface IProps {
  id?: string;
  className?: string;
  children: ReactNode;
  variants: Variants;
}

const MotionViewport: FC<IProps> = ({ id, className, children, variants }) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}>
      {children}
    </motion.div>
  );
};

export default MotionViewport;
