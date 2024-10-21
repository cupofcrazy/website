import { defineType, defineField } from "sanity";

export default defineType({
  name: 'info',
  title: 'Info',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string', 
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'a11yImage',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ],
      group: 'content',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ],
      group: 'content',
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [
        {
          type: 'experience',
        }
      ],
      group: 'content',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [
        {
          type: 'link',
        }
      ],
    })

  ],
});