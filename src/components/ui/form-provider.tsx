import { FC, FormHTMLAttributes, ReactNode } from "react";
import { FormProvider as Form } from "react-hook-form";

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit?: (data: any) => any;
  form: any;
}

const FormProvider: FC<IProps> = ({ children, onSubmit, form, ...others }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...others}>
        {children}
      </form>
    </Form>
  );
};

export default FormProvider;
