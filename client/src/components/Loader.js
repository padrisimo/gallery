import React from 'react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';


const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 95vh;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <LoaderWrapper><PacmanLoader color={'#fff'} /></LoaderWrapper>
);

export default Loader;
