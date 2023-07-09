import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../../styles/pages/LandingPage/Features.scss';

const data = [
    {
        title: "SELF ASSESSMENTS",
        content: "We delivered various mental health quizzes using popular analogies with powerful recommendations. Take the assessments at your convenience.",
        CTA: "Take the Quizzes"
    },
    {
        title: "COMMUNITY",
        content: "Discover the power and freedom that comes with sharing. Experience warmth and togetherness with other iResponders. Learn and share within the community.",
        CTA: "Join Now"
    },

    {
        title: "SEE A THERAPIST",
        content: "Get access to the help you need. We have a team of qualified and experienced mental health professionals. Let's be part of your guide towards the journey to freedom. Book your session now for as low as 5000 NGN.",
        CTA: "Book Now"
    },

    {
        title: "LANES",
        content: "Therapy can be achieved through psycho-social support. Ask questions, discover relevant issues and gain unique insights in the midst of other people.",
        CTA: "Join Lanes"
    },

    {
        title: "SURVIVAL STORIES",
        content: "Your testimony, your story and your victory are help notes, guide notes and survival notes for someone going through trials and tribulations. Don’t hesitate, share it generously! – Caroline NaorojiEncourage others by sharing your survival stories.",
        CTA: "Go to stories"
    },
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default class Features extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <section className="features">
            <h2>
                <span>Our</span> Features
            </h2>
            
            <div className="card_wrapper">
                    <Carousel infinite={true}
                        swipeable={true}
                        draggable={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1500}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        responsive={responsive}>
                    {data.map((item) => {
                        return (
                            <div className="card">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <a href="#">{item.CTA}</a>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            
            
        </section>
      </React.Fragment>
    )
  }
}
