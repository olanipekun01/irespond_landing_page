import React, { Component } from 'react'

import '../styles/layouts/Footer.scss';

import footerLogo from '../assets/footerLogo.png';
import facebookIcon from '../assets/Facebook.svg';
import twitterIcon from '../assets/Twitter.svg';
import instagramIcon from '../assets/Instagram.svg';
import LinkedInIcon from '../assets/LinkedIn.svg';
import youtubeIcon from '../assets/YouTube.svg';
import emailIcon from '../assets/Email.svg';
import phoneIcon from '../assets/Phone.svg';
import locationIcon from '../assets/location.svg';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
            <section>
                <div className="logo">
                    <h3><img src={footerLogo} alt="" /></h3>
                    <p>iRespond Africa, are keen on providing a platform for community interaction for psychosocial support.</p>
                    <div>
                        <img src={facebookIcon} alt="" />
                        <img src={twitterIcon} alt="" />
                        <img src={instagramIcon} alt="" />
                        <img src={LinkedInIcon} alt="" />
                        <img src={youtubeIcon} alt="" />
                    </div>
                </div>
                
                <div className="wrapper">
                    <div>
                        <h3>Company</h3>
                        <span>Blog</span>
                        <span>Careers</span>
                        <span>Privacy Policy</span>
                        <span>IrespondTV</span>
                        <span>Updates</span>
                    </div>
                    
                    <div>
                        <h3>Get Help</h3>
                        <span>Talk to a therapist</span>
                        <span>Request Emergency</span>
                        <span>Find a support group</span>
                    </div>
                    



                    <div className='contacts'>
                        <h3>Contacts us</h3>
                        <span><img src={emailIcon} alt="" /> <span>info@irespond.africa</span></span>
                        <span><img src={phoneIcon} alt="" /> <span>(+234) 809-893-4801</span></span>
                        <span><img src={locationIcon} alt="" /> <span>371 Borno way Alagomeji 
                            Yaba.</span></span>
                    </div>
                </div>
            </section>
            
            <div className='copyright'>
                <span className='left_side'>Copyright © 2023 iRespondafrica</span>
                <p>All Rights Reserved <span><a href="">| Terms and Conditions</a> <a href="#">| Privacy Policy</a></span></p>
            </div>
        </footer>
      </React.Fragment>
    )
  }
}
