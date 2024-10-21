import { defineType, defineField } from "sanity";

export default defineType({
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'clip',
      title: 'Clip',
      type: 'mux.video',
    }),
  ],
});