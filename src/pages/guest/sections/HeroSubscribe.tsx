import Subscribe from './Subscribe';

const HeroSubscribe = () => {
  return (
    <Subscribe
      title="Get started with QuickJourney today"
      description="Enter your promy and let AI help you to find the best and the quickest"
      successMessage="You're subscribed!"
      errorMessage="Error subscribing. Please try again."
      layout="button-input"
      buttonText="Sign up Free"
    />
  );
};

export default HeroSubscribe;
