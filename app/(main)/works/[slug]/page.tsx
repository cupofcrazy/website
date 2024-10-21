import { BlockContent } from "@/components/block-content";
import { Image } from "@/components/image";
import { MuxVideo } from "@/components/mux-video";
import { WorkCard } from "@/components/work-card";
import { client } from "@/sanity/lib/client";
import { workQuery } from "@/sanity/lib/queries";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const work = await client.fetch(workQuery, {
    slug: params.slug
  });
  return {
    title: work.title,
    description: work.subtitle
  }
}

export default async function WorkPage({ params }: { params: { slug: string } }) {
  const work = await client.fetch(workQuery, {
    slug: params.slug
  });

  if (!work) {
    redirect('/works');
  }

  const assets = work?.content?.filter((module: any) => {
    switch (module._type) {
      case 'a11yImage':
        return module
      case 'video':
        return module
      default:
        return null;
    }
  });

  return (
    <div className="my-8">
      <div className="">
        <WorkCard className="mb-8 w-1/2 md:w-[50%]" work={work} />
        <div className="my-4">
          <h3 className="text-neutral-500">Description</h3>
          <BlockContent content={work.desc} />
        </div>
        <section className="mt-4 md:mt-8">
        <p className="text-neutral-400 mb-1">Media ({assets?.length})</p>
        <div className="modules flex flex-col gap-4 mt-4 md:mt-0">
          <BlockContent content={work.content} />
          </div>
        </section>
      </div>
    </div>
  );
}
