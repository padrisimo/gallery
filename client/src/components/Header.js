import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { customColor } from '../config';
import { fetchPics } from '../actions';

const Wrapper = styled.div`
  overflow: hidden;
  position: fixed;
  background: ${customColor};
  top: 0;
  width: 100%;
  z-index:1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonPage = styled.span`
  padding-right: 1.4em;
  cursor: pointer;
`;

class Header extends Component {
  render() {
    const {title } = this.props;
    return (
      <Wrapper>
      <h1>{title}</h1>
      <ButtonPage onClick={() => this.props.fetchPics(4)}>next!</ButtonPage>
    </Wrapper>
    )
  }
}


export default connect(null, { fetchPics })(Header);
