import './App.css';
import Head from './Components/Head.jsx';
import MainContent from './Components/MainContent.jsx';
import card1Img from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\card1Img.png';
import card2Img from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\card2Img.png';
import card3Img from 'E:\\React_pro1\\web-design\\src\\ImagesFol\\card3Img.png';
import FooterCon from './Components/FooterCon.jsx';

const data = [
  {
     heading:"Grow Together",
     text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eligendi autem odio, cum rem corporis saepe culpa magni accusantium.Iure ducimus vero veniam magni maxime quibusdam.",
     imggroW:card1Img,
     cssStyle:'inner-container'
  },
  {
    heading:"Flowing Conversation",
    text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eligendi autem odio, cum rem corporis saepe culpa magni accusantium.Iure ducimus vero veniam magni maxime quibusdam.",
    imggroW:card2Img,
    cssStyle:'card-temp-con'
  },
  {
    heading:"Your Users",
    text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eligendi autem odio, cum rem corporis saepe culpa magni accusantium.Iure ducimus vero veniam magni maxime quibusdam.",
    imggroW:card3Img,
    cssStyle:'inner-container'
 },
]


function App() {
  return (
    <>
    <Head/>
    
    <MainContent styledata = {data}/>
     <FooterCon/>
    </>
  );
}

export default App;
