import React from 'react';
import styled from 'styled-components';


const GalOuterContainer = styled.div`
width: 85%;
padding: 1em;
height: auto;
position: relative;
margin: auto;
display: inline-block;
`;

const GalContainerMain = styled.div`
float: left;
width: 65%;
height: 28em;
overflow: hidden;
`;

const GalContainerSideBar = styled.div`
position: absolute;
width: 30%;
right 0;
display: inline-flex;
text-align: center;
cursor: pointer;
display: grid;
border-radius: 15px;
grid-template-areas: '1 2 3 4';
:after {
 content: "";
 display: table;
 clear: both;
}
img {
  width: 40%;
  box-shadow: 1px 1px 1px 1px #F0F0F0;
  opacity: 0.8;
  padding: 0.5em;
  color: white;
  position: Relative;
  display: inline-flex;
  cursor: pointer;
  border-radius: 15px;
  :hover {
    opacity: 1;
    background-color: rgb(247, 247, 247)
  }
  }
`;



const GalPrimaryImage = styled.img`
position: relative;
left: 0;
width: 100%;
color: white;
font-size: 20px;
border-radius: 15px;
cursor: pointer;
box-shadow: 1px 1px 1px 1px #F0F0F0;
`;

const GalSecondaryImage1 = styled.img`
grid-area: 1;
`;
const GalSecondaryImage2 = styled.img`
grid-area: 2;
`;
const GalSecondaryImage3 = styled.img`
grid-area: 3;
`;
const GalSecondaryImage4 = styled.img`
grid-area: 4;
`;

class OliGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: "https://oli-gallery.s3-us-west-2.amazonaws.com/OliGalleryEditor.jpg",
      images: [ "https://oli-gallery.s3-us-west-2.amazonaws.com/OliGalleryEditor.jpg", "https://oli-gallery.s3-us-west-2.amazonaws.com/OliGalleryGalleryExperience.jpg", "https://oli-gallery.s3-us-west-2.amazonaws.com/OliGalleryImageDetails.jpg", "https://oli-gallery.s3-us-west-2.amazonaws.com/OliGalleryMyExhibit.jpg" ]
    }
  }



  render() {

    var setMain = (imgID) => {
      this.setState({ mainImage: this.state.images[imgID] });

    }
    return (

      <GalOuterContainer>

        <GalContainerMain>
          <GalPrimaryImage src={this.state.mainImage} />
        </GalContainerMain>


        <GalContainerSideBar>

          <GalSecondaryImage1 onClick={() => setMain(0)} src={this.state.images[0]}/>
          <GalSecondaryImage2 onClick={() => setMain(1)} src={this.state.images[1]}/>
          <GalSecondaryImage3 onClick={() => setMain(2)} src={this.state.images[2]}/>
          <GalSecondaryImage4 onClick={() => setMain(3)} src={this.state.images[3]}/>

        </GalContainerSideBar>


      </GalOuterContainer>
    );
  }
}

export default OliGallery;




