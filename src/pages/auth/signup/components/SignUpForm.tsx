import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FormProvider from '@/components/ui/form-provider';
import { Link } from 'react-router-dom';

const schema = z
  .object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(20, { message: 'Password must be at most 20 characters long' }),
    repeatPassword: z
      .string()
      .min(8, { message: 'Repeat Password must be at least 8 characters long' })
      .max(20, { message: 'Repeat Password must be at most 20 characters long' }),
    agreeToTerms: z
      .boolean()
      .refine((val) => val === true, { message: 'You must agree to the terms' })
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword']
  });

type FormFields = z.infer<typeof schema>;

const SignUpForm = () => {
  const form = useForm<FormFields>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      agreeToTerms: false
    },
    resolver: zodResolver(schema)
  });

  const handleSubmit: SubmitHandler<FormFields> = async (_data) => {};

  return (
    <div className='md:mx-6 w-full md:w-[600px] px-4 py-4'>
      <h2 className="text-[2rem] text-foreground font-medium md:text-4xl mb-5">Welcome</h2>
      <FormProvider form={form} onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <Input name="firstName" type="text" placeholder="First Name" />
        <Input name="lastName" type="text" placeholder="Last Name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Input name="repeatPassword" type="password" placeholder="Repeat Password" />

        <div className="flex flex-col  gap-x-2">
          <div className="flex justify-start items-center gap-x-2 font-medium text-base font-jakartaSans">
            <p className="text-muted-foreground">Already have an account?</p>
            <Link
              className="text-foreground hover:text-foreground/30  transition duration-300 "
              to="/login">
              Sign in now
            </Link>
          </div>
          <div className="flex justify-start items-center gap-x-1">
            <Input
              className="cursor-pointer"
              type="checkbox"
              name="agreeToTerms"
              id="check_privacy_policy"
            />
            <label
              className="text-[9px] text-muted-foreground md:text-xs font-jakartaSans"
              htmlFor="check_privacy_policy">
              I agree with your &nbsp;
              <Link className="text-foreground font-bold" to="/privacy-policy">
                 I agree with your Terms and Conditions{' '}
              </Link>
            </label>
          </div>
        </div>
        <Button
          variant="destructive"
          className="rounded-xl w-full"
          loading={form.formState.isSubmitting}
          size="lg"
          type="submit">
          Continune
        </Button>
      </FormProvider>
    </div>
  );
};

export default SignUpForm;
