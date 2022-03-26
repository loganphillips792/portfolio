import Head from 'next/head';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { allProjects } from "../../.contentlayer/generated";
import components from '/components/MDXComponents';



// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css"
// import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';
import { useMDXComponent } from 'next-contentlayer/hooks';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Container = styled.div`
.swiper-container {
  // width: 100%;
  // height: 100%;

  width: 50%;
  height: 50vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`;

const ProjectHero = styled.div`
  background-image: linear-gradient(rgba(5, 107, 216, 0.95), rgba(5, 107, 216, 0.95)), url('https://adamgreenough.me/wp-content/uploads/2019/11/photo-1519074002996-a69e7ac46a42.jpeg');
  height: 463px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const Name = styled.h1`

`;

const RepositoryLink = styled.a`
  // for margin-top
  display: inline-block;
  background: #fff;
  padding: 9px 14px;
  font-weight: 700;
  text-decoration: none;
  font-size: 90%;
  border-radius: 4px;
  transition: all 0.5s ease 0s;
  margin-top: 25px;
  color: #056bd8;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #f2f2f2;
  }
`;

const Description = styled.div``;

const Content = styled.div``;

export default function ProjectDetail({ project }) {
  const Component = useMDXComponent(project.body.code);
  return (
    <Container>
      <Head>
        <title>
          {/* {project.name} */}
        </title>
      </Head>

      <ProjectHero>
        <div className="content">
          <Name>{project.name}</Name>

          <Description>
            {project.description}
          </Description>

          <RepositoryLink href={project.repository_link} target="_blank" rel="noopener noreferrer">View repository</RepositoryLink>

        </div>
      </ProjectHero>

      <Content>
        {/* <div
          dangerouslySetInnerHTML={{ __html: project.content }}
        /> */}
      </Content>

      {/* {project.project_image_links &&
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          className="mySwiper"
        >
          {project.project_image_links.split(',').map((link, index) => (
            <SwiperSlide key={index}>
              <img src={link} />
            </SwiperSlide>
          ))}
        </Swiper> */}
          <Component
                components={
                    {
                        ...components,
                    }
                }
            />
      
    </Container>
  )
}

export async function getStaticPaths() {
  //const paths = allBlogPosts.map((post) => ({ params: { slug: post.url}}));
  console.log("ALL PROJECTS", allProjects)

  const paths = allProjects.map((project) => project.slug);
  console.log("PATHS", paths)
  return {
      paths,
      fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("PARAMS SLUG", context.params.slug)
  let params = context.params;
  // const post = allBlogPosts.find((post) => post.url == params.slug);
  const project = allProjects.find((project) => {
      return project.slug == "/projects/" + params.slug
  });
  // console.log("Project", project)
  return {
      props: {
          project
      },
  };
}

// export async function getStaticProps({ params }) {
//   const project = getProjectBySlug(params.slug, [
//     'name',
//     'description',
//     'date',
//     'slug',
//     'author',
//     'content',
//     'ogImage',
//     'coverImage',
//     'project_image_links'
//   ])

//   const content = await markdownToHtml(project.content || '');

//   return {
//     props: {
//       project: {
//         ...project,
//         content,
//       },
//     },
//   }
// }

// async function markdownToHtml(markdown) {
//   const result = await remark().use(html).process(markdown)
//   return result.toString();
// }

// export async function getStaticPaths() {
//   const projects = getAllProjects(['slug'])

//   return {
//     paths: projects.map((project) => {
//       return {
//         params: {
//           slug: project.slug,
//         },
//       }
//     }),
//     fallback: false,
//   }
// }

// const projectsDirectory = join(process.cwd(), '_projects');

// function getProjectSlugs() {
//   return fs.readdirSync(projectsDirectory);
// }

// function getProjectBySlug(slug, fields) {
//   const realSlug = slug.replace(/\.md$/, '')
//   const fullPath = join(projectsDirectory, `${realSlug}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')
//   const { data, content } = matter(fileContents)


//   const items = {}

//   // Ensure only the minimal needed data is exposed
//   fields.forEach((field) => {
//     if (field === 'slug') {
//       items[field] = realSlug
//     }
//     if (field === 'content') {
//       items[field] = content
//     }

//     if (data[field]) {
//       items[field] = data[field]
//     }
//   })

//   return items

// }

// function getAllProjects(fields) {
//   const slugs = getProjectSlugs()
//   const projects = slugs.map((slug) => getProjectBySlug(slug, fields))
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//   return projects
// }