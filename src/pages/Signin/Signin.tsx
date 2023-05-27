import { FC } from 'react';
import { SigninForm } from '@/components/Forms/SigninForm';
import { Layout } from '@/components/common/Layout';

export const SigninPage: FC = () => {
  return (
    <Layout>
      <div className="flex flex-col item-center justify-between h-full mx-4">
        <SigninForm />
      </div>
    </Layout>
  );
};
