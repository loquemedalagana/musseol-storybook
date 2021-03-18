import React from 'react';
import styled from '@emotion/styled';
import {defaultTheme, typeScale, primaryFont} from "../Styles";

const primary = ['rgba(98,124,208,1)', 'rgba(216,187,255,1)'];
const secondary = ['rgba(222, 170, 255, 1)', 'rgba(250, 210, 225, 1)'];
const tertiary = ['rgba(61, 90, 128, 1)', 'rgba(153, 193, 222, 1)'];

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  font-family: ${primaryFont};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;
  
  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }
  
  &:focus {
    outline: 2px ${defaultTheme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${defaultTheme.disabled};
    border: none;
  }
  
  .small {
    font-size: ${typeScale.helperText};
    padding: 8px;
  }
  
  .large {
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  }
`;

// inherit style
export const PrimaryButton = styled(Button)`
  border: none;
  color: whitesmoke;
  background-color: ${defaultTheme.primaryColor};
  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    border-color: ${defaultTheme.disabled};
  }
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
  border: 1px dotted ${defaultTheme.primaryColor};
  &:disabled {
    border: 1px dotted ${defaultTheme.disabled};
  }
`;

export const TertiaryButton = styled(Button)`
  border: none;
  color: ${defaultTheme.primaryColor};
`;
