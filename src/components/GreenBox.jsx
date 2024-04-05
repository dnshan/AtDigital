import { GreenBoxStyle } from "../styles/green.box.styles"
import Button from "./Button"

function GreenBox() {
    return (
        <>
            <GreenBoxStyle>
                <h4>We crush your competitors, goals,
                    and sales records - without the B.S.</h4>
                <Button onClick={() => console.log('Button clicked!')}>
                    Get free consultation
                </Button>
            </GreenBoxStyle>
        </>

    )
}

export default GreenBox