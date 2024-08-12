import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile: React.FC = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>

      <div className="hidden text-left md:text-base md:block">
        <h5 className="text-primary font-bold text-base">Ceyhun Rahimli</h5>
        <div className="mt-[4px] font-normal text-sm">
          <span className="text-muted-foreground text-[12px]">Software Engineer</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
