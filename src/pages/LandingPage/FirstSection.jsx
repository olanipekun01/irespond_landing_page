import React, { Component } from 'react'

import '../../styles/pages/LandingPage/FirstSection.scss';


import coloredStar from '../../assets/coloredstar.svg';
import star from '../../assets/star.svg';
import ellipse_1 from '../../assets/Ellipse_3.svg';
import ellipse_2 from '../../assets/Ellipse_4.svg';
import ellipse_3 from '../../assets/Ellipse_5.svg';
import avatar from '../../assets/image_1.png';
import mini_image_1 from '../../assets/1.svg';
import mini_image_2 from '../../assets/2.svg';
import arrow_right from '../../assets/arrow-right.svg';

export default class FirstSection extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="first_section">
          <div className="content_container">
              <h1>Don't bury emotions, let it flow.</h1>
              <p>Shame the stigma, be empowered, 
                speak-up and inspire other people within 
                our community. We are your haven in distress.
              </p>
              <button className="cta_join_btn">Join the Conversation <img src={arrow_right} alt="" /></button>
              
              <div className="customer_rating_wrapper">
                <div className="customer_wrapper">
                  <figure>
                    <img src={ellipse_1} alt="" />
                    <img src={ellipse_2} alt="" />
                    <img src={ellipse_3} alt="" />
                  </figure>
                  <div className="customer">
                    <span>2,291</span>
                    <span>Happy Customer</span>
                  </div>
                </div>
                <hr />
                <div className="rating_wrapper">
                  <span>4.8/5</span>
                  <div className="rating">
                    <figure>
                      <img src={coloredStar} alt="" />
                      <img src={coloredStar} alt="" />
                      <img src={coloredStar} alt="" />
                      <img src={coloredStar} alt="" />
                      <img src={star} alt="" />
                    </figure>
                    <span>Rating</span>
                  </div>
                </div>
              </div>
          </div>

          <div className="image_contaner">
              <figure>
                <img className='avatar' src={avatar} alt="" />
              </figure>
              
              <img className='mini_image_1' src={mini_image_1} alt="" />
              <img className='mini_image_2' src={mini_image_2} alt="" />
          </div>
        </section>
      </React.Fragment>
    )
  }
}
