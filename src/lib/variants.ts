type Direction = 'left' | 'right' | 'up' | 'down';

type Options = {
  distance?: number;
  duration?: number;
  delay?: number;
  originX?: number;
  originY?: number;
  amplitude?: number;
  shakeCount?: number;
};

export const varSlide = (direction: Direction, options?: Options) => {
  const distance = options?.distance || 20;
  const duration = options?.duration || 0.5;
  const delay = options?.delay || 0;

  return {
    hidden: {
      opacity: 0,
      x: direction === 'right' ? -distance : direction === 'left' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay }
    }
  };
};

// ----------------------------------------------------------------------

export const varScale = (scale: number, options?: Options) => {
  const duration = options?.duration || 0.5;
  const delay = options?.delay || 0;

  return {
    hidden: {
      scale: 0.7,
      opacity: 0
    },
    visible: {
      scale: scale,
      opacity: 1,
      transition: { duration, delay }
    }
  };
};

// ----------------------------------------------------------------------

export const varRotate = (angle: number, options?: Options) => {
  const duration = options?.duration || 0.5;
  const delay = options?.delay || 0;
  const originX = options?.originX || 0.5;
  const originY = options?.originY || 0.5;

  return {
    hidden: {
      opacity: 0,
      rotate: angle,
      originX,
      originY
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration, delay }
    }
  };
};

// ----------------------------------------------------------------------

export const varFade = (options?: Options) => {
  const duration = options?.duration || 0.5;
  const delay = options?.delay || 0;

  return {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration, delay }
    }
  };
};

// ----------------------------------------------------------------------

export const varShake = (options?: Options) => {
  const amplitude = options?.amplitude || 5;
  const duration = options?.duration || 0.5;
  const shakeCount = options?.shakeCount || 2;
  const delay = options?.delay || 0;

  const keyframes = Array.from({ length: shakeCount * 2 }, (_, index) => ({
    x: index % 2 === 0 ? -amplitude : amplitude,
    transition: { duration, delay: index * duration }
  }));

  return {
    hidden: {},
    visible: {
      x: 0,
      transition: { delay },
      repeat: Infinity,
      keyframes
    }
  };
};

// ----------------------------------------------------------------------

export const varContainer = (props: { staggerIn: number }) => {
  const staggerIn = props?.staggerIn || 0.05;
  const delayIn = props?.staggerIn || 0.05;
  const staggerOut = props?.staggerIn || 0.05;

  return {
    visible: {
      transition: {
        staggerChildren: staggerIn,
        delayChildren: delayIn
      }
    },
    hidden: {
      transition: {
        staggerChildren: staggerOut,
        staggerDirection: -1
      }
    }
  };
};
