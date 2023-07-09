import React, { Component } from 'react'

import '../../styles/pages/LandingPage/BecomePartner.scss';

import ImageAvatar from '../../assets/BecomePartner.png';

export default class BecomePartner extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="partner">
            <figure>
                <img src={ImageAvatar} alt="" />
            </figure>
            
            <div>
                <h2>iRespond For Professionals</h2>
                
                <p>We partner with therapists, NGOs, clinics and schools to make mental healthcare more accessible and affordable.</p>
                <button>Become a Partner</button>
            </div>
        </section>
      </React.Fragment>
    )
  }
}
