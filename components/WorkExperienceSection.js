import styled from 'styled-components';

const StyledSection = styled.div`
   h1 {
        text-align: center;
   }
`;

export default function WorkExperienceSection() {

    return (
        <StyledSection id="experience-section">
            <h1>Work Experience</h1>
        </StyledSection>
    );
}