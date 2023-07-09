import React, { Component } from 'react'

import '../../styles/pages/LandingPage/Testimonial.scss';

import ClientPhoto_1 from '../../assets/ClientPhoto_1.svg'
import ClientPhoto_2 from '../../assets/ClientPhoto_2.svg'

export default class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="testimonial">
            <h2>Our blessed client said about us 😍</h2>
            
            <div className="card_wrapper">
                <div className="content">
                    <div className="card">
                        <h3>“Incredible Experience”</h3>
                        <p>We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</p>
                    </div>
                    
                    <div className="profile">
                        <img src={ClientPhoto_1} alt="" />
                        <div>
                            <p>Wade Warren</p>
                            <span>CEO, ABC Corporation</span>
                        </div>
                    </div>
                </div>
                
                <div className="content">
                    <div className="card">
                        <h3>“Dependable, Responsive, Professional”</h3>
                        <p>Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.</p>
                    </div>
                    
                    <div className="profile">
                        <img src={ClientPhoto_2} alt="" />
                        <div>
                            <p>Esther Howard</p>
                            <span>EO, ABC Corporation</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    )
  }
}
