import Link from 'next/link';
import styled from 'styled-components';
import formatDistance from 'date-fns/formatDistance';

const StyledBlogPostPreview = styled.div`
    border-radius: 16px;
    padding: 16px;
    cursor: pointer;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Tags = styled.div`
    display: flex;
`;

const Heading = styled.div`
    font-size: 30px;
    font-weight: 700;
`

const Summary = styled.div``;

const BlogPostPreview = (post) => {
    return (
        <Link href={post.url}>
            <StyledBlogPostPreview>
                <Row>
                    <Tags>
                        {post.tags.map((tag, i) => {
                            return (
                                <div>{tag}</div>
                            );
                        })}
                    </Tags>
                    {/* Want to use a inline element instead of block like <p> */}
                    <span>{formatDistance(new Date(post.date), new Date(), { addSuffix: true })}</span>
                </Row>
                <Heading>{post.title}</Heading>
                <Summary>{post.summary}</Summary>
            </StyledBlogPostPreview>
        </Link>
    );
}

export default BlogPostPreview;