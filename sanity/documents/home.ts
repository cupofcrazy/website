import {defineField, defineType} from 'sanity'

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "content",
      title: "Content",
    },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "cover",
      title: "Cover",
      type: "a11yImage",
      group: "content",
    }),
    defineField({
      name: 'experiments',
      title: 'Experiments',
      type: 'array',
      of: [{
        type: 'experiment',
      }],
      group: 'content',
    }),
    defineField({
      name: 'homeVideo',
      title: 'Home Video',
      type: 'video',
      group: 'content',
    }),
  ],
});