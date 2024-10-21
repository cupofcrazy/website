import { type SchemaTypeDefinition } from 'sanity'

import home from "./documents/home";
import work from "./documents/work";
import category from "./documents/category";
import settings from "./documents/settings";
import info from "./documents/info";

import seo from "./objects/seo";
import a11yImage from "./objects/a11y-image";
import blockContent from "./objects/block-content";
import link from "./objects/link";
import video from "./objects/video";
import experience from "./objects/experience";
import experiment from "./objects/experiments";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    work,
    info,
    experience,
    settings,
    seo,
    category,
    a11yImage,
    blockContent,
    link,
    video,
    experiment,
  ]
}
