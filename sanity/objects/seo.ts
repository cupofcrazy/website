import { defineType, defineField } from "sanity";

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
