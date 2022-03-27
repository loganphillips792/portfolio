import styled from 'styled-components';

const StyledSection = styled.div`
    h1 {
        text-align: center;
    }
`;

export default function Contact() {

    return (
        <StyledSection id="contact-section">
            <h1>Contact</h1>
        </StyledSection>
    );
}