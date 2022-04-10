import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;1,700&display=swap');
    font-family: IBM Plex Sans;
    width: 50%;
    border: 2px solid red;
    h1 {
        font-weight: 700;
    }
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const Content = styled.div`
    padding-left: 32px;
    padding-right: 32px;
    line-height: 24px;
`;

const BlogStyles = createGlobalStyle`
   body {
    background-color: #111111;
    color: white;
   }
`;



export default function BlogLayout(props) {
    return (
        <Container>
            <BlogStyles />
            <Content>
                <h1>{props.post.title}</h1>

                <div>
                    {props.children}
                </div>
            </Content>
        </Container>
    )
}