import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FormProvider from '@/components/ui/form-provider';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Toaster, toast } from 'sonner';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' })
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const form = useForm<FormFields>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(schema)
  });

  const handleSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      toast.error('Unsuccessful login attempt');
    }
  };

  return (
    <div className='md:mx-6 w-full md:w-[600px] px-4 py-4'>
      <h2 className="text-[2rem] text-foreground font-medium md:text-4xl mb-5">Welcome back</h2>
      <FormProvider form={form} onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input name="email" type="email" placeholder="Email" />

        <Input name="password" type="password" placeholder="Password" />
        <div className="flex gap-x-2 mb-4 font-medium text-base">
          <p className="text-muted-foreground">Don't have an account?</p>
          <Link
            className="text-foreground hover:text-muted-foreground  transition duration-300 "
            to="/signup">
            Create account
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <Button
            className="rounded-xl w-full"
            loading={form.formState.isSubmitting}
            size="lg"
            type="submit">
            Log in
          </Button>
          <Link
            className="text-center border-b-2 border-current text-foreground font-medium text-base hover:text-muted-foreground  transition duration-300"
            to="/forgot-password">
            Forgot your password?
          </Link>
        </div>
      </FormProvider>
      <Toaster position="top-center" />
    </div>
  );
};

export default LoginForm;
