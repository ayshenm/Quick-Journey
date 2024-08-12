import * as React from 'react';

import { cn } from '@/lib/utils';
import { useController } from 'react-hook-form';
import { IoEye, IoEyeOff } from 'react-icons/io5';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'email' | 'number' | 'file' | 'checkbox' | 'search';
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, ...props }, _ref) => {
    const { field, fieldState } = useController({ name: name });
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <>
        <div className="relative">
          <input
            type={showPassword ? 'text' : type}
            className={cn(
              'flex h-10  w-full rounded-md  border border-input bg-transparent  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1',
              {
                'focus-visible:ring-offset-0 focus-visible:ring-0 border-2 border-red-500':
                  fieldState.error,
                'mt-0': type === 'checkbox'
              },
              className
            )}
            {...field}
            {...props}
          />

          {type === 'password' && (
            <div
              className={cn(
                'absolute right-0 top-0   border-l-0 bottom-0 flex items-center justify-center rounded-r-md  p-2 text-gray-500 cursor-pointer',
                {
                  'border-red-500 border-2 border-l-0': fieldState.error
                },
                className
              )}
              onClick={() => setShowPassword(!showPassword)}>
              <IoEye className={cn('b-0 ', { hidden: !showPassword })} />
              <IoEyeOff className={cn(' ', { hidden: showPassword })} />
            </div>
          )}

          {type === 'checkbox' && (
            <div
              className={cn(
                ' text-gray-500 cursor-pointer',
                {
                  'border-red-500 border-2 border-l-0': fieldState.error
                },
                className
              )}></div>
          )}
        </div>

        {fieldState.error && <div className="text-red-900">{fieldState.error.message}</div>}
      </>
    );
  }
);
Input.displayName = 'Input';

export { Input };
