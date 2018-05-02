import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPics } from './actions';
import PhotoList from './components/PhotoList';
import Header from './components/Header';
import Loader from './components/Loader';

import { TITLE } from './config';


class App extends Component {

  componentDidMount() {
    if (!this.props.isfetched) {
      this.props.fetchPics();
    }
  }

  render() {
    const { pics, isfetched } = this.props;
    if (!isfetched) {
      return <Loader />;
    }
    return (
      <div>
        <Header title={TITLE} page={pics.photos.page}/>
        <PhotoList data={pics} page={pics.photos.page} />
        <p></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pics: state.pics.pics,
  isfetched: state.pics.isfetched
})


export default connect(mapStateToProps, { fetchPics })(App);