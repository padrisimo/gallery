import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPics } from './actions';
import PhotoList from './components/PhotoList';


class App extends Component {

  componentDidMount() {
    this.props.fetchPics();
  }

  render() {
    const { pics, isfetched } = this.props;
    if (!isfetched) {
      return <div>...</div>;
    }
    return (
      <div>
        <header>
          <h1>Gallery</h1>
        </header>
        <PhotoList data={pics}/>
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