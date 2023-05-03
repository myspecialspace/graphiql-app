import { FC } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { SignupForm } from '@/components/Forms/SignupForm';

export const SignupPage: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <SignupForm />
      <Footer />
    </div>
  );
};
