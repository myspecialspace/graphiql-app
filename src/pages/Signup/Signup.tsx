import { FC } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { SignupForm } from '@/components/Forms/SignupForm';

export const SignupPage: FC = () => {
  return (
    <div className="flex flex-col item-center justify-between h-full mx-4">
      <SignupForm />
      <Footer />
    </div>
  );
};
