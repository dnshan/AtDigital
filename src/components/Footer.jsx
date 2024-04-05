import {
    FooterContainer,
    UpperContainer,
    HorizontalLine,
    MiddleContainer,
    LowerContainer,
    TechList,
    TextContainer
} from "../styles/footer.styles"
import logo from '../assets/logo.png';
import { LogoStyle } from "../styles/main.page.styles";

function Footer() {
    return (
        <>
            <FooterContainer>
                <UpperContainer>
                    <LogoStyle src={logo} alt="AT Digital Logo" />
                    <h3 className="b">Our Technologies</h3>
                    <h3 className="c">Our Services</h3>

                </UpperContainer>

                <MiddleContainer>
                    <TextContainer>

                    <h5> Your goal is our target. Not anything in between.</h5>
                    <h5>   We use online marketing platforms and tools to</h5>
                    <h5>     achieve single objective - your business results.</h5>

                    </TextContainer>
                    <TechList>
                        <li>ReactJS</li>
                        <li>Gatsby</li>
                        <li>NextJS</li>
                        <li>NodeJS</li>
                    </TechList>


                    <TechList>
                        <li>Social media Marketing</li>
                        <li>Web & Mobile App Development</li>
                        <li>Data & Analytics</li>
                    </TechList>

                </MiddleContainer>


                <HorizontalLine className="g" />
                <LowerContainer>
                    <h4 className="h">
                        Privacy Policy | Terms & Conditions
                    </h4>
                </LowerContainer>

            </FooterContainer>

        </>
    )
}

export default Footer