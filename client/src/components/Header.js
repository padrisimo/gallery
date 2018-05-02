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
  cursor: pointer;
  padding: 1em;
`;
const Buttonblock = styled.span`
  padding-right: .5em;
`;

class Header extends Component {

  render() {
    const { title, page } = this.props;
    const next = page + 1;
    const prev = page - 1;
    return (
      <Wrapper>
        <h1>{title} pag. {page}</h1>
        <Buttonblock>
          <ButtonPage onClick={() => this.props.fetchPics(prev)}>prev</ButtonPage>
          {" | "}
          <ButtonPage onClick={() => this.props.fetchPics(next)}>next</ButtonPage>
        </Buttonblock>
      </Wrapper>
    )
  }
}


export default connect(null, { fetchPics })(Header);
