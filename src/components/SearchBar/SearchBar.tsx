import React from "react";
import styled from "@emotion/styled";
import CloseIcon from '@material-ui/icons/Close';
import CloseIconWrapper from "../IconButtons/CloseIconWrapper";

export interface IProps {
  // onClick search event
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchBarWrapper = styled.div`
  transform: translateY(30%);
  transition: transform .3s ease-out;
  max-width: 1000px;
  margin: 20px auto;

  position: relative;
  width: auto;
  pointer-events: none;
`;

// modal-content
const SearchBarContainer = styled.div`
  border: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: .2857rem;
  outline: 0;

  @media (min-width: 576px) {
    box-shadow: 0 15px 35px rgba(50,50,93,.2),0 5px 15px rgba(0,0,0,.17);
  }
`;

// modal-header
const SearchBarInputWrapper = styled.div`
  padding: 24px;
  border-bottom: none;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-top-left-radius: calc(.2857rem - 1px);
  border-top-right-radius: calc(.2857rem - 1px);

  & > h5 {
    font-weight: 400;
    font-size: .8125rem;
    margin-top: 0;
  }
`;

// if korean, if english?
const SearchBarInputH5 = styled.h5`
  margin-bottom: 0;
  line-height: 1.1 !important;
`;

const SearchBarInput = styled.input`
  margin: 0;
  display: block;
  height: calc(2.25rem + 2px);
  padding: .5rem .7rem;
  line-height: 1.42857;
  border: none;
  background-color: transparent;
  background-clip: padding-box;
  box-shadow: none;
  color: #222a42;
  
  overflow: visible;
  transition: color .3s ease-in-out,border-color .3s ease-in-out,background-color .3s ease-in-out;
`;

const SearchBar: React.FC<IProps> = ({onClose}) => {
  return (
    <SearchBarWrapper role="document">
      <SearchBarContainer>
        <SearchBarInputWrapper>
          <SearchBarInputH5>
            <SearchBarInput placeholder="SEARCH" type="text" />
            <CloseIconWrapper onClick={onClose}>
              <CloseIcon />
            </CloseIconWrapper>
          </SearchBarInputH5>
        </SearchBarInputWrapper>
      </SearchBarContainer>
    </SearchBarWrapper>
  )
}

export default SearchBar;
