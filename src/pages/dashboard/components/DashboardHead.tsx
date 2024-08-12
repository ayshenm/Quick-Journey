import { Button } from '@/components/ui/button';
import Ai from '@/assets/svg/magicpen.svg';

const DashboardHead = () => {
  return (
    <div className="bg-custom-gradient rounded-3xl flex justify-between items-center py-12 px-10 gap-x-10">
      <div>
        <h2 className="text-foreground font-bold text-2xl mb-10">Ask AI where you want to go</h2>
        <p className="mt-2 font-medium text-base">
          And we need to brainstorm some ideas what will be content here or we can ask to
          <br /> chat Gpt to give use related content from scratch. What do you think?{' '}
        </p>
      </div>
      <div>
        <Button variant="link" className="!py-8 !px-6">
          <img src={Ai} alt="magicpen" />
          <span className="text-base">Generate new</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHead;
