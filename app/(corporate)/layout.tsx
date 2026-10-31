import { ReactNode } from 'react';

export default function CorporateLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main>{children}</main>
      {/* <CorporateFooter /> */}
    </div>
  );
}
