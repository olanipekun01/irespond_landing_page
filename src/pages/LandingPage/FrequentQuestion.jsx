import React, { Component } from 'react'

import '../../styles/pages/LandingPage/FrequentQuestion.scss';

import imageAvatar from '../../assets/g8_avatar.svg';
import messageIcon from '../../assets/messageIcon.svg';

export default class FrequentQuestion extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="frequent">
            <div className="header_wrapper">
                <div>
                     <h2>Frequently Ask Question</h2>
                     <h5>If your question is not list here, please feel free to make a manual support.</h5>
                </div>
                <button>Ask your Question <img src={messageIcon} alt="" /></button>
            </div>
            
            <div className="content_wrapper">
                <div className="questions_wrapper">
                    <div className="question_card">
                        <p>Who is IRespond?</p>
                        <span>+</span>
                    </div>
                    
                    <div className="question_card">
                        <p>What's Lifehack?</p>
                        <span>+</span>
                    </div>
                    
                    <div className="question_card">
                        <p>What is Eazylyf?</p>
                        <span>+</span>
                    </div>
                    
                    <div className="question_card">
                        <p>How safe is my data on the platform?</p>
                        <span>+</span>
                    </div>
                    
                    <div className="question_card">
                        <p>Can I trust the results of the assessments?</p>
                        <span>+</span>
                    </div>
                </div>
                
                <figure>
                    <img src={imageAvatar} alt="" />
                </figure>
            </div>
        </section>
      </React.Fragment>
    )
  }
}
