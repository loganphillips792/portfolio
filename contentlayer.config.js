import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: 'string', description: 'The title of the post', required: true, },
    date: { type: 'date', description: 'The date of the post', required: true, },
    summary: { type: 'string', description: 'Summary of the post', required: true, },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}))

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    name: { type: 'string', description: 'The name of the project', required: true, },
    description: { type: 'string', description: 'The description of the project', required: true, },
    coverImage: { type: 'string', description: 'Cover image of the project', required: true, },
    date: { type: 'date', description: 'Cover image of the project', required: false, },
    project_image_links: { type: 'string', description: 'Screenshots of the project', required: false, },
    repository_link: { type: 'string', description: 'Github link', required: false, }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [BlogPost, Project],
})