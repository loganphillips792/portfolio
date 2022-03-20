import { allBlogPosts } from "../../.contentlayer/generated";
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function BlogPost({ post }) {
    // {console.log("POST", post.title)}
    // const Component = useMDXComponent(post.body.code);

    return (
        <div>
            hello
            {/* {post.title} */}
            {/* <Component /> */}
        </div>
    );
}

export async function getStaticPaths() {
    const paths = allBlogPosts.map((post) => ({ params: { slug: post.url}}));
    console.log(paths)
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    console.log("PARAMS SLUG", context.params.slug)
    let params = context.params;
    // const post = allBlogPosts.find((post) => post.url == params.slug);
    const post = allBlogPosts.find((post) => {
        console.log("URL IS", post.url);
        console.log("PARAMS.slug", "/blog/"+params.slug);
        return post.url == "/blog/"+params.slug
    });
    console.log("POST", post)
    return {
        props: {
            post
        },
    };
}