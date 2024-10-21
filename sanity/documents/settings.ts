import { defineType, defineField } from "sanity";

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [{ type: 'link' }],
    }),
  ],
});
