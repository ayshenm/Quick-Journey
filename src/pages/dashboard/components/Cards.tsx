import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Bookmark, ThumbsUp, X } from 'lucide-react';
import Post1 from '@/assets/dashboard/img1.png';

const Cards = () => {
  return (
    <div className="bg-background shadow-md rounded-xl mt-6 px-4 py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <div className="flex">
            <Avatar className="w-10 rounded-full">
              <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" />
              <AvatarFallback>CR</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h5 className="text-lg font-bold text-foreground">Jeyhun Rahimli</h5>
            <span className="text-card">3min ago</span>
          </div>
        </div>
        <div>
          <X />
        </div>
      </div>

      <div className="mt-2">
        <img src={Post1} className="w-full rounded-xl" alt="post1" />
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-foreground text-base font-medium">
          Lorem ipsum dolor sit amet consectetur. Dignissim tellus nunc est eget in. Posuere amet
          integer lectus
          <br /> natoque. Risus augue eu commodo hac quam nec ullamcorper more...
        </p>
        <div className="flex gap-x-3">
          <ThumbsUp />
          <Bookmark />
        </div>
      </div>
    </div>
  );
};

export default Cards;
