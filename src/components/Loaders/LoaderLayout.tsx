import React from 'react';
import styled from "@emotion/styled";

export interface IProps {
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  justify-content: center;
  text-align: center;
  align-content: center;
  min-height: 50vh;
`;

const LoaderLayout: React.FC<IProps> = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default LoaderLayout;
