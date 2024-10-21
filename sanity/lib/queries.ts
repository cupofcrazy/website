import { groq } from "next-sanity";

export const imageQuery = groq`
  _type == "a11yImage" => {
    alt,
    ...image {
      ...asset ->
    },
    ...
}`

export const videoQuery = groq`
  _type == "video" => {
    ...clip {
      ...asset->,
    },
    caption,
    _type
    
  }
`

export const homeQuery = groq`*[_type == "home"][0] {
  title,
  ...,
  cover { ${imageQuery} },
  homeVideo { ${videoQuery} }
}`;

export const workQuery = groq`*[_type == "work" && slug.current == $slug][0] {
  title,
  subtitle,
  desc,
  slug,
  cover { ${imageQuery} },
  content[] {
    ${imageQuery},
    ${videoQuery},
    ...
  }
}`

export const worksQuery = groq`*[_type == "work"] {
  title,
  subtitle,
  desc,
  slug,
  cover { ${imageQuery} },
  content[] {
    ${imageQuery},
    ${videoQuery},
    ...
  }
}`

export const infoQuery = groq`*[_type == "info"][0] {
  title,
  description,
  cover { ${imageQuery} },
  ...
}`

export const settingsQuery = groq`*[_type == "settings"][0] {
  ...
}`