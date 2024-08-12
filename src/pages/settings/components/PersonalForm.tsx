import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FormProvider from '@/components/ui/form-provider';
import { Label } from '@radix-ui/react-label';
import { toast } from 'sonner';

const schema = z.object({
  fullName: z.string().min(1, { message: 'Full name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(20, { message: 'Password must be at most 20 characters long' }),
  makePassword: z
    .string()
    .min(8, { message: 'Repeat Password must be at least 8 characters long' })
    .max(20, { message: 'Repeat Password must be at most 20 characters long' })
});

type FormFields = z.infer<typeof schema>;

const PersonalForm = () => {
  const form = useForm<FormFields>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      makePassword: ''
    },
    resolver: zodResolver(schema)
  });

  const handleSubmit: SubmitHandler<FormFields> = async (_data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Successful! Your password has been successfully changed!');
    } catch (error) {
      form.setError('root', {
        message: 'This email is already token'
      });
    }
  };

  return (
    <div className="flex flex-col mt-2 px-8 py-4 overflow-hidden">
      <h5 className="text-base text-foreground font-medium md:text-xl mb-5">
        Personal information:
      </h5>
      <FormProvider form={form} onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <Label>
          Full name
          <Input className="w-full" name="fullName" type="text" placeholder="Full name" />
        </Label>
        <Label>
          Contact email
          <Input className="w-full" name="email" type="email" placeholder="Email" />
        </Label>
        <Label>.
          Enter your current password:
          <Input
            className="w-full left-[45%] md:left-[47%]"
            name="password"
            type="password"
            placeholder="Enter password"
          />
        </Label>
        <Label>
          Make up a new password:
          <Input
            className="w-full left-[45%] md:left-[47%]"
            name="makePassword"
            type="password"
            placeholder="Enter password"
          />
        </Label>

        <Button
          className="rounded-xl w-full  md:w-1/4"
          loading={form.formState.isSubmitting}
          size="lg"
          type="submit">
          Save Changes
        </Button>
      </FormProvider>
    </div>
  );
};

export default PersonalForm;
