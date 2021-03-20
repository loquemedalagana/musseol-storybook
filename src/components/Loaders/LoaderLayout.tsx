import React from 'react';

export interface IProps {
  children?: React.ReactNode;
}

const LoaderLayout: React.FC<IProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default LoaderLayout;
