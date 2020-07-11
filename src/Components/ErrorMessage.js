import styled from "styled-components";
import React from 'react';

/** Theme */
import { Colors } from "../Theme";
const ErrorMessage = styled.p`
  text-align: center;
  margin-top: 10px;
  color: ${Colors.red};
`;
const ErrorMessageContainer = ({ errorMessage }) => {
    return <ErrorMessage>{errorMessage}</ErrorMessage>
};
export default ErrorMessageContainer;
