import React, { Component } from 'react'

import '../../styles/pages/LandingPage/Subscribe.scss';
import lightpattern from '../../assets/lightpattarn.svg'

export default class Subscribe extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="subscribe">
            <div className="container">
                <div>
                    <h2>Subscribe to get updated</h2>
                    <p>Get updates about new products, discounts, and store news sent directly to your inbox</p>
                </div>
                <button>Subscribe Now</button>
                <img src={lightpattern} alt="" />
            </div>
        </section>
      </React.Fragment>
    )
  }
}
