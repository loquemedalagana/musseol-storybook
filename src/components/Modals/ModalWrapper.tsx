import React from "react";
import { IconButton } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  border-radius: 7px;
  max-width: 568px;
  max-height: 614px;
  background-color: whitesmoke;
  z-index: 2020;
  transform: translate(-50%, -55%);
  -webkit-box-shadow: 3px 5px 15px 1px #E1E1E1;
  box-shadow: 3px 5px 15px 1px #E1E1E1;

  @media (max-width: 600px) {
    max-width: 85vw;
  }
  @media (max-width: 992px) {
    
  }
`;

// onclose and children are required in the real project
export interface IProps {
  children?: React.ReactNode;
  modalHeader?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const ModalWrapper: React.FC<IProps> = ({ children, onClose }) => {
  return (
    <Container className="scrollbar-deep-blue grow-up">
      <div className="modal-header">
        <IconButton className="modal-close-button" color="inherit" onClick={onClose}>
          <CloseRounded className="modal-close" />
        </IconButton>
      </div>
      {children}
    </Container>
  );
};

export default ModalWrapper;
