import React from "react";
import styled from "@emotion/styled";

export interface IProps {
  type: "success" | "info" | "danger";
  message: string;
}

const AlertWrapper = styled.div`
  position: relative;
  padding: .9rem 1.25rem;
  margin-bottom: 1rem;
  border: 0;
  border-radius: .2857rem;
  
  color: whitesmoke;
`;

const ToastAlert: React.FC<IProps> = (props) => {
  const {type, message} = props;
  return (
    <AlertWrapper className={`alert-${type} alert-typography`}>
      <span>
        {message}
      </span>
    </AlertWrapper>
  )
}

export default ToastAlert;
