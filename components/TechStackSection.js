import styled from "styled-components";
import { FlaskIcon, ReactIcon, DjangoIcon, PostgresIcon, TypescriptIcon, DockerIcon, GoLangIcon, ReduxIcon } from "../components/icons";

const StyledTechStackSection = styled.div`
  font-weight: 500;

  h1 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .icons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 1em;

    & > * {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // background-color: rgb(54, 59, 73);
      background-color: ${props => props.theme.divBackground};
      padding: 8px 12px;
      border-radius: 6px;
      width: 133px;
    }
  }
`;

function TechStackSection() {
    return (
        <StyledTechStackSection>
            <h1>Tech Stack</h1>
            <div className="icons">
                <div><FlaskIcon /><span>Flask</span></div>
                <div><ReactIcon /><span>React</span></div>
                <div><DjangoIcon /><span>Django</span></div>
                <div><PostgresIcon /><span>Postgres</span></div>
                <div><TypescriptIcon /><span>Typescript</span></div>
                <div><DockerIcon /><span>Docker</span></div>
                <div><GoLangIcon /><span>GoLang</span></div>
                <div><ReduxIcon /><span>Redux</span></div>
            </div>
        </StyledTechStackSection>
    );
}

export default TechStackSection;