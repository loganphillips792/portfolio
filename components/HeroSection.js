import Image from 'next/image'
import styled, { keyframes} from "styled-components";
import { GitHubIcon, LinkedInIcon, FlaskIcon, ReactIcon, DjangoIcon, PostgresIcon, TypescriptIcon, DockerIcon, GoLangIcon } from "./icons";
import profilePic from "../public/static/images/profile.jpeg";

const changeColors = keyframes`
  0% {
    color: blue;
  }
  10% {
    color: #8e44ad;
  }
  20% {
    color: #1abc9c;
  }
  30% {
    color: #d35400;
  }
  40% {
    color: blue;
  }
  50% {
    color: #34495e;
  }
  60% {
    color: blue;
  }
  70% {
    color: #2980b9;
  }
  80% {
    color: #f1c40f;
  }
  90% {
    color: #2980b9;
  }
  100% {
    color: pink;
  }
`;

const AccountsBounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40% {
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -6px, 0);
  }

  70% {
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -4px, 0);
  }

  90% {
    transform: translate3d(0,-2px,0);
  }
`;

const StyledHero = styled.div`
  //background-color: white;
  height: 100%;
  position: relative;
  
  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    h1 {
      font-family: Vollkorn;
      animation: ${changeColors} 20s infinite alternate;
    }

    .image-container {
      height: 250px;
      width: 250px;

      img {
        width: 100%;
        object-fit: contain;
        border-radius: 30px;
      }
    }

    .intro h1,
    .intro h2 {
      line-height: 100px;
    }
  }
`;

const AccountLinksRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const CircleBackground = styled.div`
  background-color: #1f2027;
  border-radius: 100px;
  transition: all 400ms;
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #4183c4;
    animation: ${AccountsBounce} 1s;
  }
`;

export default function Hero() {
    return (
        <StyledHero id="home-section">
            <div className="center-content">
                <div className="image-container">
                    <Image 
                      src={profilePic}
                      alt="Picture of developer"
                    />
                </div>

                <div className="intro">
                    <h1>Hi, I'm Logan!.</h1>
                    <h2>Full stack engineer focusing on backend-end development</h2>
                </div>
            </div>

            <AccountLinksRow>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/loganphillips792">
                    <CircleBackground>
                        <GitHubIcon />
                    </CircleBackground>
                </a>

                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/logan-phillips-809722160/">
                    <CircleBackground>
                        <LinkedInIcon />
                    </CircleBackground>
                </a>
            </AccountLinksRow>
        </StyledHero>

    );
}