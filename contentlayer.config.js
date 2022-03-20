import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'data/blog',
  documentTypes: [BlogPost],
})