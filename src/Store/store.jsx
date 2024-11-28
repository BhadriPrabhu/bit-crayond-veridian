import { create } from "zustand";
import AboutLeftTop from '../assets/icons/aboutLeftTop';
import AboutRightTop from '../assets/icons/aboutRightTop';
import AboutLeftBottom from '../assets/icons/aboutLeftBottom';
import AboutRightBottom from '../assets/icons/aboutRightBottom';
// import PersonJack from '../assets/images/personjack';
// import PersonJarvis from '../assets/images/personjarvis';
// import PersonPeter from '../assets/images/personpeter';
import InvestLeft from "../assets/images/investLeft";
import InvestMiddle from "../assets/images/investMiddle";
import InvestRight from "../assets/images/investRight";

const AboutText = create(() => ({
    text: [
        { id: 1, name: "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.", head: "Excellence", icon: <AboutLeftTop /> },
        { id: 2, name: "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.", head: "Initiative", icon: <AboutRightTop /> },
        { id: 3, name: "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.", head: "Sustainability", icon: <AboutLeftBottom /> },
        { id: 4, name: "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners", head: "Integrity", icon: <AboutRightBottom /> },

    ],
    invest: [
        { id: 1, photo: <InvestLeft/>, name: "Investment focus and strategy", text1: "Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability.", text2: "Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth."},
        { id: 2, photo: <InvestMiddle/>, name: "Portfolio", text1: "The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.", text2: "Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again."},
        { id: 3, photo: <InvestRight/>, name: "Corporate social responsibility", text1: "Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results."}
    ]
}));

export default AboutText;