import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className='container'>{children}</div>;
};
