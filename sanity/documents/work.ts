import { defineField, defineType } from "sanity";

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'blockContent',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'a11yImage',
    }),
    defineField({
      name: 'content',
      title: 'Modules',
      type: 'blockContent',
      
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
      media: 'cover',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled',
        media: media.image,
        subtitle: `/${subtitle.current}`,
      };
    },
  },
});
