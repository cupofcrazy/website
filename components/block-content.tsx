import { PortableText, PortableTextReactComponents } from "next-sanity";
import { Image } from "./image";
import { MuxVideo } from "./mux-video";

const components = {
  types: {
    a11yImage: ({ value }: { value: any }) => {
      const { url, alt, metadata, caption, hasCaption } = value;
      return  (
        <div className="flex flex-col gap-1">
          <div className="w-full rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <Image 
              aspectRatio={metadata.dimensions.aspectRatio} 
              color={metadata.palette.dominant.background}
              src={url} alt={alt} width={500} height={500} />
          </div>
          {hasCaption && <p className="text-neutral-500 dark:text-white/50 text-xs text-center w-2/3 mx-auto">{caption}</p>}
        </div>
      )
    },
    video: ({ value }: { value: any }) => {
      const { playbackId, caption } = value;
      return (
        <div className="flex flex-col gap-1">
          <div className="w-full rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <MuxVideo playbackId={playbackId} />
          </div>
          <p className="text-neutral-500 dark:text-white/50 text-xs text-center w-2/3 mx-auto">{caption}</p>
        </div>
      );
    },
  },
  marks: {
    link: ({children, value}: { children: string, value: any }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 underline" target="_blank" href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
  block: {
    normal: ({ children }: { children: string }) => {
      return <p className="text-neutral-800 dark:text-neutral-100">{children}</p>
    },
    h1: ({ children }: { children: string }) => {
      return <h1 className="text-2xl text-neutral-900 dark:text-white font-semibold">{children}</h1>
    },
    h2: ({ children }: { children: string }) => {
      return <h2 className="text-lg text-neutral-900 dark:text-white font-semibold">{children}</h2>
    },
    h3: ({ children }: { children: string }) => {
      return <h3 className="text-md text-neutral-900 dark:text-white font-semibold">{children}</h3>
    },
    h4: ({ children }: { children: string }) => {
      return <h4 className="text-sm text-neutral-900 dark:text-white font-semibold">{children}</h4>
    },
    h5: ({ children }: { children: string }) => {
      return <h5 className="text-sm text-neutral-900 dark:text-white font-semibold">{children}</h5>
    },
    h6: ({ children }: { children: string }) => {
      return <h6 className="text-sm text-neutral-900 dark:text-white font-semibold">{children}</h6>
    },
    blockquote: ({ children }: { children: string }) => {
      return <blockquote className="text-neutral-900 dark:text-white">{children}</blockquote>
    },
    ul: ({ children }: { children: string }) => {
      return <ul className="list-disc list-inside text-neutral-900 dark:text-white">{children}</ul>
    },
    ol: ({ children }: { children: string }) => {
      return <ol className="list-decimal list-inside text-neutral-900 dark:text-white">{children}</ol>
    },
    hr: () => {
      return <hr className="border-neutral-200 dark:border-neutral-700" />
    },
  },
  listItem: {
    bullet: ({ children }: { children: string }) => {
      return <li className="list-decimal list-inside text-neutral-700 dark:text-neutral-300 mb-2">{children}</li>
    },
  }
} as Partial<PortableTextReactComponents>;

export function BlockContent({ content }: { content: any }) {
  return (
    <div
      className="prose flex flex-col gap-4"
    >
      <PortableText
        value={content}
        components={components as Partial<PortableTextReactComponents>}
      />
    </div>
  );
}
