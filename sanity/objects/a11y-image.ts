import { defineType, defineField } from "sanity";

export default defineType({
  name: 'a11yImage',
  title: 'A11y Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'string',
    }),
    defineField({
      name: 'hasCaption',
      title: 'Has Caption',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      hidden: ({ parent }) => !parent?.hasCaption,
    }),
  ],
});