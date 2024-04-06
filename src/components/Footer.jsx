import {
    FooterContainer,
    UpperContainer,
    LeftContainer,
    MiddleContainer,
    RightContainer,
    LowerContainer,
    HorizontalLine,
    TechList,
    LowerWrapper
} from "../styles/footer.styles"
import logo from '../assets/logo.png';
import { LogoStyle } from "../styles/main.page.styles";

function Footer() {
    return (
        <>
            <FooterContainer>
                <UpperContainer>
                    <LeftContainer>
                        <LogoStyle src={logo} alt="AT Digital Logo" />
                        <h5> Your goal is our target. Not anything in between.
                            We use online marketing platforms and tools to achieve
                            single objective - your business results.</h5>
                    </LeftContainer>

                    <LowerWrapper>

                        <MiddleContainer>
                            <h3 >Our Technologies</h3>
                            <TechList>
                                <li>ReactJS</li>
                                <li>Gatsby</li>
                                <li>NextJS</li>
                                <li>NodeJS</li>
                            </TechList>
                        </MiddleContainer>

                        <RightContainer>
                            <h3 className="c">Our Services</h3>
                            <TechList>
                                <li>Social media Marketing</li>
                                <li>Web & Mobile App Development</li>
                                <li>Data & Analytics</li>
                            </TechList>
                        </RightContainer>
                    </LowerWrapper>

                </UpperContainer>

                <LowerContainer>
                    <HorizontalLine />
                    <h4>
                        Privacy Policy | Terms & Conditions
                    </h4>
                </LowerContainer>
            </FooterContainer>

        </>
    )
}

export default Footer;