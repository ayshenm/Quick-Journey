import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import PersonalForm from './components/PersonalForm';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { PencilLine, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import PageHeader from '@/components/ui/header-dashboard';

const Settings = () => {
  const matches = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      <div className='px-2 md:px-8'>
        <PageHeader title="Edit" />
      </div>
      <div className="mt-10 px-2 md:px-8 flex justify-between">
        <div className="flex gap-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CR</AvatarFallback>
          </Avatar>

          <div className="text-left md:text-base md:block">
            <h5 className="text-primary font-bold text-base">Ceyhun Rahimli</h5>
            <div className="mt-[4px] font-normal text-sm">
              <span className="text-muted-foreground text-[12px]">Software Engineer</span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-2">
          <Button
            className={cn(
              'rounded-xl text-[#333333] border-[#EDEDED] hover:bg-[#E5E5E5] transition-colors duration-300',
              !matches && 'px-3 py-1'
            )}
            variant="outline">
            {matches && 'Upload new picture'} {!matches && <PencilLine />}
          </Button>
          <Button className="rounded-xl px-5 bg-[#E5E5E5] text-[#333333] border-[#EDEDED]">
            {matches && 'Delete'} {!matches && <Trash2 />}
          </Button>
        </div>
      </div>
      <PersonalForm />
    </>
  );
};

export default Settings;
