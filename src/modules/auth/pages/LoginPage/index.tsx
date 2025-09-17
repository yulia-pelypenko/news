import { MainLayout } from "@/modules/layout/components";
import type { FC } from "react";
import { LoginForm } from "../../components";

const LoginPage: FC = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 my-4">
        Login
      </h1>
      <LoginForm />
    </MainLayout>
  );
};

export default LoginPage;