import Best from './sections/Best';
import Hero from './sections/Hero';
import Blog from '@/pages/guest/sections/Blog';
// import Subscribe from './sections/Subscribe';

const Root = () => {
  return (
    <div>
      <Hero id={0} title={''} description={''} icon={undefined} />
      <Best />
      <Blog />
      {/* <Subscribe title={''} description={''} successMessage={''} errorMessage={''} layout={''} buttonText={''} /> */}
    </div>
  );
};

export default Root;
