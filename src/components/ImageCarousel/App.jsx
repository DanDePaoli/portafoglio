/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Header from './Header.jsx';
import NavButtons from './NavButtons.jsx';
import Modal from './Modal.jsx';
import carouselData from './dummydata.jsx';


const HeadingWrapper = styled.div`
  align-items: center;
  background-color: rgb(247, 247, 247);
  display: flex;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const InnerWrapper = styled.div`
  background-color: inherit;
  display: block;
  height: 100%;
  width: 100%;
`;

const MiddleWrapper = styled.div`
  // padding-left: 80px;
  // padding-right: 80px;
  //adjusted for site width
  padding-left: 12px;
  padding-right: 12px;
`;

const OuterDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: rgb(247, 247, 247);
  border-bottom: 1px solid rgb(221, 221, 221);
  display: block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  margin: auto;
  padding: 0;
  border-radius: 0 0 10px 10px;
`;

const OuterWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 40px;
  padding-top: 40px;
  max-width: 1200px;
  // max-width: auto;
`;

class CarouselApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // suggestedListings: [],
      suggestedListings: carouselData[0].related_place,
      isLoading: true,
      renderedListings: [],
      modalTriggered: false,
      wasLiked: false,

    };
    this.getListings = this.getListings.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.renderLike = this.renderLike.bind(this);
    this.listRef = React.createRef();
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.resetToEnd = this.resetToEnd.bind(this);
    this.resetBeginning = this.resetBeginning.bind(this);

  }

  componentDidMount() {
    this.getListings();
  }
  // 'https://54.213.63.161:3003/suggestedPlaces'
  // 'https://Portfolio-Backend-Data-1345882254.us-west-2.elb.amazonaws.com:3003/suggestedPlaces'

  getListings() {
    this.setState({isLoading: false });
    this.renderPage(1);
//remove above when using live api

    // axios.get('/suggestedPlaces')
    //   .then((response) => {
    //     // const suggestedListings = carouselData[0].related_place;
    //     //static dummy data (api response below)
    //     const suggestedListings = response.data[0].related_place;
    //     this.setState({ suggestedListings, isLoading: false });
    //     this.renderPage(1);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     //uncomment when using non-static data
    //   });
  }

  hideModal() {
    this.setState({ modalTriggered: false });
  }

  renderModal() {
    this.setState({ modalTriggered: true });
  }

  renderLike() {
    this.setState({ wasLiked: true });
  }

  renderPage(page) {
    const places = this.state.suggestedListings;
    this.setState({ renderedListings: places });
    // if (page === 1) {
    //   const firstPage = this.state.suggestedListings.slice(0, 4);
    //   this.setState({ renderedListings: firstPage });
    // } else if (page === 2) {
    //   const secondPage = this.state.suggestedListings.slice(4, 8);
    //   this.setState({ renderedListings: secondPage });
    // } else if (page === 3) {
    //   const thirdPage = this.state.suggestedListings.slice(8, 12);
    //   this.setState({ renderedListings: thirdPage });
    // }
  }


  // const listRef = useRef(null);
  // this.listRef = React.createRef();

  scrollLeft() {

    if (this.listRef.current) {
      this.listRef.current.scrollBy({
        top: 0,
        left: -1200,
        behavior: "smooth",

      })
    }
  };

  scrollRight() {

    if (this.listRef.current) {
      this.listRef.current.scrollBy({
        top: 0,
        left: 1200,
        behavior: "smooth",

      })
    }
  };

  resetToEnd() {

    if (this.listRef.current) {
      this.listRef.current.scrollBy({
        top: 0,
        left: 2400,
        behavior: "smooth",

      })
    }
  };

  resetBeginning() {

    if (this.listRef.current) {
      this.listRef.current.scrollBy({
        top: 0,
        left: -2400,
        behavior: "smooth",

      })
    }
  };



  render() {

    if (this.state.isLoading) {
      return (<div> . . .</div>);
    }
    return (
      <OuterDiv>
        {this.state.modalTriggered ? (
          <Modal hideModal={this.hideModal} renderLike={this.renderLike} />
        )
          : null}
        <OuterWrapper>
          <MiddleWrapper>
            <HeadingWrapper>
              <Header />
              <NavButtons
              scrollLeft={this.scrollLeft}
              scrollRight={this.scrollRight}
              renderPage={this.renderPage}
              resetToEnd={this.resetToEnd}
              resetBeginning={this.resetBeginning}
              />


            </HeadingWrapper>
            <Carousel
              listRef={this.listRef}
              carousel={this.state.renderedListings}
              modal={this.renderModal}
              liked={this.state.wasLiked}
            />
          </MiddleWrapper>
        </OuterWrapper>
      </OuterDiv>
    );
  }
}

export default CarouselApp;