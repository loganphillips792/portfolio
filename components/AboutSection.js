import styled from 'styled-components';

const StyledSection = styled.div`
    text-align: center;
`;

export default function About() {

    return (
        <StyledSection id="about-section">
            <h1>About</h1>
            <p>
                I have been a full time software engineer for around three years, but I have been programming much longer than that. The purpose of this site is to showcase some of
                the side projects I have done, and to make it easier for people to connect with me. I am always looking for interesting projects to work on! If you want to connect,
                send me an email! 
            </p>
        </StyledSection>
    );
}