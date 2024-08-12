import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const Profile = () => {
  return (
    <div className="py- ">
      <div className="flex gap-x-2 justify-center">
        <div className="flex w-10 rounded-full items-center">
          <Avatar>
            <AvatarImage className="rounded-full w-8" src="https://github.com/shadcn.png" />
            <AvatarFallback>CR</AvatarFallback>
          </Avatar>
        </div>

        <div className="text-left md:text-base md:block">
          <h5 className="text-primary font-bold text-base">Ceyhun Rahimli</h5>
          <div className="mt-[4px] font-normal text-sm">
            <span className="text-muted-foreground text-[12px]">Software Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
