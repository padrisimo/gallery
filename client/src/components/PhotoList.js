import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

export default class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = { imageArr: [] };
  }

  componentDidMount() {
    this.setState({ imageArr: this.imageRender()}) 
  }

  imageRender = () => {
    return (
      this.props.data.photos.photo.map(photo => ({
        src: photo.url_l,
        thumbnail: photo.url_n,
        thumbnailWidth: Number(photo.width_n),
        thumbnailHeight: photo.height_n,
        caption: photo.title
      })
      )
    )
  };
  render() {
    const {imageArr} = this.state;
    if (!imageArr) {
      return <div>...</div>;
    }
    return (
      <div>
        <Gallery images={imageArr} />
      </div>
    )
  }
}

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%"
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px"
};
