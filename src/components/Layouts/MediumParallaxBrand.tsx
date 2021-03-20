import React from "react";
import styled from "@emotion/styled";

const Brand = styled.div`
  text-align: left;
  color: whitesmoke;
`;

const Title = styled.h1`
  margin: 1.75rem 0 0.875rem;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.05em;
  display: inline-block;
  position: relative;
  min-height: 32px;
  color: whitesmoke;
  opacity: 0.85;
`;

const SubTitle = styled.h3`
  font-size: 1.313rem;
  max-width: 500px;
  font-weight: 200;
  margin: 10px auto 0;
  opacity: 0.85;
`;

interface IProps {
  title: string;
  description: string;
}

const MediumParallaxBrand: React.FC<IProps> = ({ title, description }) => {
  return (
    <Brand className="container container-fluid">
      <Title>{title}</Title>
      <SubTitle>{description}</SubTitle>
    </Brand>
  );
};

export default MediumParallaxBrand;
