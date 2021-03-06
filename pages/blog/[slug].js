import { allBlogPosts } from "../../.contentlayer/generated";
import { useMDXComponent } from 'next-contentlayer/hooks';
import components from '/components/MDXComponents';
import BlogLayout from "../../components/BlogLayout";


export default function BlogPost({ post }) {
    const Component = useMDXComponent(post.body.code);

    return (
       <BlogLayout post={post}>
           <Component
                components={
                    {
                        ...components,
                    }
                }
            />
       </BlogLayout>
    );
}

export async function getStaticPaths() {
    const paths = allBlogPosts.map((post) => post.url);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    let params = context.params;
    // const post = allBlogPosts.find((post) => post.url == params.slug);
    const post = allBlogPosts.find((post) => {
        return post.url == "/blog/" + params.slug
    });
    // console.log("POST", post)
    return {
        props: {
            post
        },
    };
}