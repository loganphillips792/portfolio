// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allBlogPosts, allProjects } from '../../.contentlayer/generated';
import styled from 'styled-components';
import BlogPostPreview from '../../components/BlogPostPreview';

// change to "BlogPostPreview"
function PostCard(post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <h2 className="text-lg">
        <Link>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  )
}

const Container = styled.div``;

const Heading = styled.div`
  h1 {
    font-size: 60px;
  }

  text-align: center;
`;

export default function Home({ posts }) {
  return (
    <Container>
       <Head>
        <title>Blog</title>
      </Head>

      <Heading>
        <h1>Blog</h1>
        <span>I have written {posts.length} articles, which I update regularly. You can find them below.</span>
      </Heading>

      {posts.map((post, idx) => (
        <BlogPostPreview key={idx} {...post}/>
      ))}
    </Container>
  )
}

export async function getStaticProps() {
  const posts = allBlogPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}