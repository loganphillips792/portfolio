import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/Link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledNavBar = styled.div`
    position: fixed;
    width: 100%;
    z-index: 2;

    .nav-bar-links-container {
        display: flex;
        list-style: none;
        justify-content: flex-end;
        gap: 50px;

        div:last-child {
            margin-right: 2%;
        }
    }

    // change default link properties
    a {
        color: #0060B6;
        text-decoration: none;
    }
    
    a:hover {
        color:#00A0C6; 
        text-decoration:none; 
        cursor:pointer;  
    }



`;

export default function NavBar() {
    const router = useRouter();

    const handleClick = (section) => {

        // let url = "";

        // switch(section) {
        //     case 'home':
        //         url = "home"
        //         break;
        //     case 'about':
        //         url = "about"
        //         break;
        //     case 'experience':
        //         url = "experience"
        //         break;
        //     case 'projects':
        //         url = "projects"
        //         break;
        //     case 'contact':
        //         url = "contact"
        //         break;
        //     case 'blog':
        //         url = "/blog"
        //         break;
        // }

        if (location.pathname === "/") {
            document.getElementById(`${section}-section`).scrollIntoView({ behavior: "smooth" })
        } else {
            router.push('/').then(() => {
                document.getElementById(`${section}-section`).scrollIntoView({ behavior: "smooth" })
            });
        }
    }

    return (
        <StyledNavBar>
            <div className="nav-bar-links-container">
                <div>
                    <a onClick={() => handleClick('home')}>Home</a>
                </div>

                <div>
                    <a onClick={() => handleClick('about')}>About</a>
                </div>

                <div>
                    <a onClick={() => handleClick('experience')}>Experience</a>
                </div>
                <div>
                    <a onClick={() => handleClick('projects')}>Projects</a>
                </div>

                <div>
                    <a onClick={() => handleClick('contact')}>Contact</a>
                </div>

                <div>
                    <a href="/blog">Blog</a>
                </div>
            </div>
        </StyledNavBar>
    )
}
