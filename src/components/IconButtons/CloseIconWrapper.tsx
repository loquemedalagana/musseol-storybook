import styled from "@emotion/styled";

const CloseIconWrapper = styled.button`
  color: #555;
  top: 30px!important;
  text-shadow: none;
  position: absolute;
  right: 27px;
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
  background-color: initial;
  border: 0;
  
  &:not(:disabled) {
    cursor: pointer;
  }
  
  float: right;
  font-size: 1.3125rem;
  font-weight: 600;
  line-height: 1;
  opacity: .5;
  
  -webkit-appearance: button;
  text-transform: none;
  border-radius: 50%;
  overflow: visible;

  &:hover {
    background: rgba(211, 224, 234, 0.5);
  }
`;

export default CloseIconWrapper;
