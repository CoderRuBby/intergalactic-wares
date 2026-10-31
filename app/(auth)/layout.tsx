import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <AuthHeader /> */}
      <main>{children}</main>
      {/* <AuthFooter /> */}
    </div>
  );
}
