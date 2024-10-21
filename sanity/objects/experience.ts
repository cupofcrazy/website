import { defineType, defineField } from "sanity";

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'object',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
  ]
})