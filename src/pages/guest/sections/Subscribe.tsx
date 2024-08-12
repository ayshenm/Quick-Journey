import { Button } from '@/components/ui/button';
import Sms from '@/assets/svg/sms.svg';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

interface SubscribeProps {
  title: string;
  description: string;
  successMessage: string;
  errorMessage: string;
  layout: string;
  buttonText: string;
}

const Subscribe: React.FC<SubscribeProps> = ({
  title,
  description,
  successMessage,
  errorMessage,
  layout,
  buttonText
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(
        'https://api.quick-journey.com/api/website-subscriber/subscribe',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setSuccess(successMessage); // Set success message
      toast.success(result.message);
      setEmail('');
    } catch (error) {
      setError(errorMessage); // Set error message
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`section bg-custom-gradient flex flex-col justify-center items-center p-6 md:p-0 ${layout}`}>
      <div className="py-10 flex flex-col gap-y-3 items-center text-center">
        <h2 className="font-bold text-2xl md:text-4xl">{title}</h2>
        <p className="text-sm md:text-base font-medium text-center">{description}</p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row gap-2 md:gap-4 items-center w-full md:w-auto">
          <div className="flex items-center gap-2 bg-accent w-full md:w-96 rounded-3xl p-2">
            <img className="w-5 ml-2" src={Sms} alt="send" />
            <input
              className="bg-transparent outline-none flex-grow"
              type="email"
              id="email"
              name="email"
              placeholder="Type your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
            {isLoading ? 'Subscribing...' : buttonText}
          </Button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>
    </div>
  );
};

export default Subscribe;
