import React from 'react';
import styled from 'styled-components';
import { customColor } from '../config';

const Wrapper = styled.div`
  overflow: hidden;
  position: fixed;
  background: ${customColor};
  top: 0;
  width: 100%;
  z-index:1000;
`;

const Header = ({title}) => (
  <Wrapper>
    <h1>{title}</h1>
  </Wrapper>
);

export default Header;
