import React from 'react';
import styled from 'styled-components';


const GalOuterContainer = styled.div`
width: 100%;
padding: 1em;
height: auto;
position: relative;
margin: auto;
display: inline-block;
margin-top: 3em:
margin-bottom: 3em:
`;

const GalContainerMain = styled.div`
display: flex;
float: left;
width: 65%;
img {
cursor: pointer;
}
`;

const GalContainerSideBar = styled.div`
position: absolute;
width: 30%;
right 0;
display: inline-flex;
text-align: center;
cursor: pointer;
min-width: 10rem;
display: grid;
grid-template-areas: '1 2 3 4';
:after {
 content: "";
 display: table;
 clear: both;
}
img {
  width: 50%;
  opacity: 0.8;
  padding: 0.5em;
  color: white;
  position: Relative;
  display: inline-flex;
  cursor: pointer;
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



var OliGallery = (props) => (

  <GalOuterContainer>

    <GalContainerMain>
      <GalPrimaryImage src="https://www.w3schools.com/howto/img_snow.jpg" />
    </GalContainerMain>


    <GalContainerSideBar>

      <GalSecondaryImage1 src="https://www.w3schools.com/howto/img_nature.jpg" />
      <GalSecondaryImage2 src="https://www.w3schools.com/howto/img_snow.jpg" />
      <GalSecondaryImage3 src="https://www.w3schools.com/howto/img_mountains.jpg" />
      <GalSecondaryImage4 src="https://www.w3schools.com/howto/img_lights.jpg" />

    </GalContainerSideBar>


  </GalOuterContainer>
)

export default OliGallery;




