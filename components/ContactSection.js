import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/Link';
import styled from 'styled-components';

const StyledSection = styled.div`

`;

export default function Contact() {

    return (
        <StyledSection id="contact-section">
            <h1>Contact</h1>
        </StyledSection>
    );
}