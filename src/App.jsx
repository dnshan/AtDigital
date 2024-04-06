import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import GreenBox from './components/GreenBox';
import TextBox from './components/TextBox';
import Expandable from './components/Expandable';
import Footer from './components/Footer';
import {
  HeaderContainer,
  SecondContainer,
  ThirdContainer,
  FourthContainer,  
  BackgroundContainer,
  LogoStyle,
  Image01Style,
  Image02Style,
  Image03Style,
  GlobalStyle
} from './styles/main.page.styles';
import logo from './assets/logo.png';
import image01 from './assets/image01.png';
import image02 from './assets/image02.png';
import image03 from './assets/image03.png';

function App() {
  return (
    <>
    <GlobalStyle/>
      <HeaderContainer>
        <LogoStyle src={logo} alt="AT Digital Logo" />
        <Navbar />
      </HeaderContainer>

      <SecondContainer>
        <Image01Style src={image01} alt="Image 01" />
        <GreenBox />
      </SecondContainer>

      <BackgroundContainer>

        <ThirdContainer>
          <Image02Style src={image02} alt="Image 02" />
          <TextBox title="Web & Mobile App Development">
            Your web and mobile Apps are pieces of the puzzle to grow your business.
            We use frameworks which tailor content and engagement methods to respond to
            different intents shown by your potential customers who interact with your
            business online.
          </TextBox>
        </ThirdContainer>

        <FourthContainer>
          <TextBox title="Digital Strategy Consulting">
            Your web and mobile Apps are pieces of the puzzle to grow your business.
            We use frameworks which tailor content and engagement methods to respond to
            different intents shown by your potential customers who interact with your
            business online.
          </TextBox>
          <Image03Style src={image03} alt="Image 02" />
        </FourthContainer>

        <Expandable title="What is Webflow and why is it the best website builder?">
          <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
            Cursus sit amet dictum sit amet justo donec enim diam porttitor
            lacus luctus accumsan tortor posuere.</p>
        </Expandable>

      </BackgroundContainer>
      <Footer />
    </>
  );
}

export default App;
