import { defineField, defineType } from "sanity";

export default defineType({
  name: 'experiment',
  title: 'Experiment',
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    })
  ],
})