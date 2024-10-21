import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      to: [
        { type: 'home' },
      ],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      validation: (Rule) => Rule.uri({ 
        scheme: ['http', 'https', 'mailto'],
        allowRelative: true,
       }),
      hidden: ({ parent }) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      linkType: 'linkType',
      internalLink: 'internalLink.title',
      externalUrl: 'externalUrl',
    },
    prepare(selection) {
      const { title, linkType, internalLink, externalUrl } = selection
      return {
        title: title,
        subtitle: linkType === 'internal' ? `Internal: ${internalLink}` : `External: ${externalUrl}`,
      }
    },
  },
})