import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FormProvider from '@/components/ui/form-provider';
import { Link } from 'react-router-dom';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' })
});

type FormFields = z.infer<typeof schema>;

const ForgotPassowrdForm = () => {
  const form = useForm<FormFields>({
    defaultValues: {
      email: ''
    },
    resolver: zodResolver(schema)
  });

  const handleSubmit: SubmitHandler<FormFields> = async (_data) => {};

  return (
    <>
      <h2 className="text-[2rem] text-foreground font-medium md:text-4xl mb-5">Forgot password </h2>
      <FormProvider form={form} onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input name="email" type="email" placeholder="Email" />
        <div className="flex flex-col justify-center items-center gap-y-5">
          <Button
            className="rounded-xl w-full"
            loading={form.formState.isSubmitting}
            size="lg"
            type="submit">
            Log in
          </Button>
          <Link
            className="text-center border-b-2 border-current text-foreground font-medium text-base hover:text-primary  transition duration-300"
            to="/login">
            Back to login
          </Link>
        </div>
      </FormProvider>
    </>
  );
};

export default ForgotPassowrdForm;
