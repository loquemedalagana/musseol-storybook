import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2020;
`;

const useModal = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  interface IProps {
    children: React.ReactNode;
  }

  const ModalPortal: React.FC<IProps> = ({ children }) => {
    const ref = useRef<Element | null>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      if (document) {
        ref.current = document.querySelector("#root-modal");
      }
    }, []);

    if (ref.current && mounted && modalOpened) {
      return createPortal(
        <Container onClick={closeModal}>
          {children}
        </Container>, ref.current,
      );
    }

    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal,
  };
};

export default useModal;
