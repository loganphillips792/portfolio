import Link from 'next/link';
import styled from 'styled-components';

const StyledSection = styled.div``;

const ProjectsGrid = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    // & > * {
    //     flex-basis: 20%;
    // }
`;

// https://www.youtube.com/watch?v=5DEq5cWNYt8&t=2366s
const ProjectCard = styled.div`
    color: hsl(0, 0%, 100%);
    background-image: ${(props) => `url(${props.backgroundUrl})`};
    background-size: cover;
    padding: 10rem 0 0;
    //max-width: 35ch;
    max-width: 25ch;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 500ms ease;

    &:hover,
    &:focus-within {
        transform: scale(1.05);
    }

    .card-content {
        --padding: 1.5rem;
        padding: var(--padding);
        background: linear-gradient(
            hsl(0 0% 0% / 0),
            hsl(20 0% 0% / 0.3) 20%,
            hsl(0 0% 0% / 1)
        );
    }

    .card-title {
        position: relative;
        width: max-content;
    }

    .card-title::after {
        // psuedo element always requires content property so it shows up in the DOM
        content: "";
        position: absolute;
        height: 4px;
        left: calc(var(--padding) * -1);
        bottom: -2px;
        width: calc(100% + var(--padding));
        background: hsl(142, 90%, 61%);
        transform-origin: left;
        transition: transform 500ms ease;
    }

    &:hover .card-title::after,
    &:focus-within .card-title::after {
        transform: scaleX(1);     
    }

    .card-body {
        color: rgb(255 255 255 / 0.85);
    }

    @media (hover) {
        .card-content {
            transform: translateY(65%);
            transition: transform 500ms ease;
        }
        &:hover .card-content,
        &:focus-within .card-content {
            transform: translateY(0);
            // delay when hover, but don't delay when we remove hover
            transition-delay: 500ms;
        }

        &:focus-within .card-content {
            transition-duration: 0ms;
        }

        // select everything except .card-title
        .card-content > *:not(.card-title) {
            opacity: 0;
            transition: opacity 500ms linear;
        }

        &:hover .card-content > *:not(.card-title),
        &:focus-within .card-content > *:not(.card-title) {
            opacity: 1;
            transition-delay: 1000ms;
        }

        .card-title::after {
            transform: scaleX(0);
        }
    }

    .button {
        cursor: pointer;
        display: inline-block;
        text-decoration: none;
        color: hsl(207, 19%, 9%);
        background-color: hsl(142, 90%, 61%);
        padding: 0.5em 1.25em;
        border-radius: 0.25rem;
    }

    .button:hover,
    .button:focus {
        background-color: hsl(0, 0%, 100%);
    }

    @media (prefers-reduced-motion: reduce) 
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
        transition-delay: 0ms !important;
    }
`;

export default function Projects() {

    return (
        <StyledSection id="projects-section">
            <h1>Projects</h1>

            <ProjectsGrid>
                <ProjectCard backgroundUrl="https://media.istockphoto.com/photos/the-perfect-setting-to-complete-work-picture-id1251629816?b=1&k=6&m=1251629816&s=170667a&w=0&h=iRUpfVwLFMhCh8DzqoYTWSQyJLaQMgOWN7Imnt8WZ8s=">
                    <div className="card-content">
                        <div className="card-title">VRWare</div>
                        <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse, dolore aperiam eaque exercitationem voluptatibus.</div>
                        <Link href="/project/vrware">
                            <a className="button" target="_blank" rel="noopener noreferrer">Learn more</a>
                        </Link>
                    </div>
                </ProjectCard>
                <ProjectCard backgroundUrl="https://media.istockphoto.com/photos/the-perfect-setting-to-complete-work-picture-id1251629816?b=1&k=6&m=1251629816&s=170667a&w=0&h=iRUpfVwLFMhCh8DzqoYTWSQyJLaQMgOWN7Imnt8WZ8s=">
                    <div className="card-content">
                        <div className="card-title">Meister Task Clone</div>
                        <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse, dolore aperiam eaque exercitationem voluptatibus.</div>
                        <Link href="/project/meister-task-clone">
                            <a className="button" target="_blank" rel="noopener noreferrer">Learn more</a>
                        </Link>
                    </div>
                </ProjectCard>
            </ProjectsGrid>
        </StyledSection>
    );
}