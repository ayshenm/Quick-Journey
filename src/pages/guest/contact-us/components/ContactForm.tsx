import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import FormProvider from '@/components/ui/form-provider';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
  fullName: z.string().min(1, { message: 'Full name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  subject: z.string().min(1, { message: 'Subject is requited' })
});

type FormFields = z.infer<typeof schema>;

const ContactForm = () => {
  const form = useForm<FormFields>({
    defaultValues: {
      fullName: '',
      email: '',
      subject: ''
    },
    resolver: zodResolver(schema)
  });

  const handleSubmit: SubmitHandler<FormFields> = async (_data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      form.setError('root', {
        message: 'This email is already token'
      });
    }
  };

  return (
    <div className="flex flex-col px-4 py-4 md:px-8 md:py-8">
      <div className="flex flex-col gap-y-3 mb-2">
        <h2 className="text-xl text-foreground font-medium md:text-4xl">Contact Us</h2>
        <p className="text-muted-foreground text-sm md:text-base">We will try to reach out to you within 2 work days</p>
      </div>
      <FormProvider form={form} onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <Input className="w-full md:w-[440px]" name="fullName" type="text" placeholder="Full name" />

        <Input className="w-full md:w-[440px]" name="email" type="email" placeholder="Email" />

        <Input
          className="w-full md:w-[440px]"
          name="subject"
          type="text"
          placeholder="Talk to ... department"
        />

        <Textarea placeholder="enter message" />

        <Button
          className="rounded-xl w-full"
          loading={form.formState.isSubmitting}
          size="lg"
          type="submit">
          Send
        </Button>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
