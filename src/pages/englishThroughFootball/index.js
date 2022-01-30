import React from "react"
import TextImageContainer from "../../components/languages/sections/textImageContainer"
import WhyChooseUs from "../../components/languages/sections/whyChooseUs"
import Steps from "../../components/languages/sections/steps"


import learnByFootball from "../../statics/images/learn-through-football.png"
import footBallTour from "../../statics/images/football-tour.png"
import camp from "../../statics/images/camp.png"
import onlineEnglish from '../../statics/images/online-english.png'
import contact2 from '../../statics/images/contact2.png'

function EnglishThroughFootball({ t }) {
  return (
    <div className="home">
       <TextImageContainer
        t={t}
        image={onlineEnglish}
        className="online-english"
        textPortion="online_english_text"
      />
      <div class="section-between-text">
        <p>
        Our students learn how to communicate in English confidently and correctly through the context of football
        </p>
       
      </div>
      <TextImageContainer
        t={t}
        image={learnByFootball}
        className="contactus-now"
        image2={contact2}
        button="Contact Us Now"
      />
  <div class="section-between-text">
        <p>
        We have seen proven results that linking interest with learning accelerates the learning speed and increases student enjoyment
        </p>
      </div>

      <WhyChooseUs t={t} />
      <Steps t={t} />

    </div>
  )
}
export default EnglishThroughFootball