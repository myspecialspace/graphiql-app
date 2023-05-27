import { FC } from 'react';
import { SignupForm } from '@/components/Forms/SignupForm';
import { Layout } from '@/components/common/Layout';

export const SignupPage: FC = () => {
  return (
    <Layout>
      <div className="flex flex-col item-center justify-between h-full mx-4">
        <SignupForm />
    </div>
    </Layout>
  );
};
