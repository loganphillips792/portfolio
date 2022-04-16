import { useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
   h1 {
        text-align: center;
   }
`;

const PanelContainer = styled.div`
    max-width: 700px;
    display: flex;
    border: 2px solid red;
    // center Panel container
    margin: 0 auto;
`;

const StyledTabButtonList = styled.div`
// flex-grow: 1;
`;

const StyledTabButton = styled.div`
   height: 42px;
   padding: 0 20px 2px;
   text-align: left;
   transition: 0.3s;
   cursor: pointer;

   &:hover {
       background-color: #666666;
       color: #64ffda;
   }
`;

const StyledTabPanel = styled.div`
   flex-grow: 1;
   border: 2px solid green;
`;


const jobs = [
    {
        id: 1,
        title: "Software Engineer Intern",
        company: "MetLife",
        range: "June 2017 - August 2017",
        details: [
            "Implemented a Java based room reservation web application which utilized the Microsoft Outlook API in order to simplify the room booking process for multiple MetLife offices.",
            "Migrated data stored in JSON files to a Mongo Database to provide the ability for users to dynamically update their desk information."
        ]
    },
    {
        id: 2,
        title: "Software Engineer Intern",
        company: "MetLife",
        range: "June 2018 - August 2018",
        details: [
            "Led the development of a Smart Watch application using Android Studio, Java, and the Google Fit API for the Fossil Gen3 Smartwatch. This was created as part of the MetLife Intern Innovation challenge as a proof of concept health incentive program for life insurance policy holders",
            "Spent multiple weeks learning a legacy application code base in order to understand the code and plan out new user requested changes.",
            "Learned the Java Server Pages templating engine to create a new web page that displayed information from the database in a format that was easily understood by business partners."
        ]
    },
    {
        id: 3,
        title: "Software Development Engineer",
        company: "MetLife",
        range: "July 2019 - July 26, 2021",
        details: [
            "Shipped software LOL",
            "Shipped new software LOL"
        ]
    },
    {
        id: 4,
        title: "Software Engineer",
        company: "ParkMobile",
        range: "July 26, 2021 - Present",
        details: [
            "Architected multiple API microservices using AWS and Docker to create new domains surrounding locations, authentication, users, and payments engine solutions",
            "Deconstructed multiple microservices from a Ruby on Rails monolith, focusing on maintaining functionality, increasing performance, and consistent system design",
            "Acted as product manager and SCRUM master when the roles where needed to ensure optimum team member communication and clarity",
            "Critically examined requirements and communicated technical options to consumers in a highly interconnected environment to certify best solutions for all parties",
            "Wrote and presented a TRD to the engineering department for approval of a new authentication microservice",
            "Helped plan and prioritize backlog, wrote user stories, conducted scrum ceremonies for engineering team members",
            "Worked on and maintained business critical Ruby on Rails MVC application."
        ]
    },
]

export default function WorkExperienceSection() {

    const [activeId, setActiveId] = useState(1);

    const jobToDisplay = jobs.find(el => el.id == activeId);

    return (
        <StyledSection id="experience-section">
            <h1>Work Experience</h1>

            <PanelContainer>
                <StyledTabButtonList>
                    {jobs.map(job => {
                        return (
                            <StyledTabButton onClick={() => setActiveId(job.id)}>
                                <span>{job.company}</span>
                            </StyledTabButton>
                        )
                    })}
                </StyledTabButtonList>

                <StyledTabPanel>
                    {jobToDisplay &&
                        <div>
                            <span>{jobToDisplay.company}</span>

                            {jobToDisplay.details.map(detail => (
                                <li>
                                    {detail}
                                </li>
                            ))}
                        </div>
                    }
                </StyledTabPanel>
            </PanelContainer>
        </StyledSection>
    );
}