import { TextBoxStyles } from "../styles/text.box.styles";
import Button from "./Button"

function TextBox({ title, children }) {
    return (
        <TextBoxStyles>
            <h3>{title}</h3>
            <h6>{children}</h6>
            <Button onClick={() => console.log('Button clicked!')}>
                Learn More
            </Button>
        </TextBoxStyles>
    );
}

export default TextBox;
