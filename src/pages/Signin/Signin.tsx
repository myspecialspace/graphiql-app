import { FC } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { SigninForm } from '@/components/Forms/SigninForm';

export const SigninPage: FC = () => {

  return (
    <div className="flex flex-col h-full">
      Signin page
      <SigninForm />
      <Footer />
    </div>
  );
};
