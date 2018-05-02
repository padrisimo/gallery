import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Loader from './Loader';



export default class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = { imageArr: [] };
  }

  componentDidMount() {
    this.setState({ imageArr: this.imageRender(this.props) })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) { 
      this.setState({ imageArr: this.imageRender(nextProps) })
    }
  }

  imageRender = (props) => {
    return (
      props.data.photos.photo.filter((rawPhoto) => !!rawPhoto.url_l).map(photo => ({
        src: photo.url_l,
        thumbnail: photo.url_n,
        thumbnailWidth: photo.width_n ? Number(photo.width_n) : 320,
        thumbnailHeight: photo.height_n ? Number(photo.height_n) : 240,
        tags: [{ value: photo.ownername, title: photo.datetaken }],
        caption: photo.title
      })
      )
    )
  };

  setCustomTags(i) {
    return (
      i.tags.map((t) => {
        return (<div
          key={t.value}
          style={customTagStyle}>
          {t.title}
        </div>);
      })
    );
  }

  render() {

    const { imageArr } = this.state;

    const images =
      imageArr.map((i) => {
        i.customOverlay = (
          <div style={captionStyle}>
            <div>{i.caption}</div>
            {i.hasOwnProperty('tags') &&
              this.setCustomTags(i)}
          </div>);
        return i;
      });

    if (imageArr.length < 3) {
      return <Loader />;
    }
    return (
      <div style={galleryContainer}>
        <Gallery
          images={images}
          enableImageSelection={false}
          style={{ border: 0 }} />
      </div>
    )
  }
}

const galleryContainer = {
  display: "block",
  minHeight: "1px",
  width: "100%",
  overflow: "auto",
  marginTop: "5em"
};

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

