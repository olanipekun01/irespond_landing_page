import React, { Component } from "react";
import Header from "../../layouts/Header";
import FirstSection from "./FirstSection";
import Features from "./Features";
import Testimonial from "./Testimonial";
import BecomePartner from "./BecomePartner";
import FrequentQuestion from "./FrequentQuestion";
import Subscribe from "./Subscribe";
import Footer from "../../layouts/Footer";




export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <FirstSection />
        <Features />
        <Testimonial />
        <BecomePartner />
        <FrequentQuestion />
        <Subscribe />
        <Footer />
      </React.Fragment>
    );
  }
}
