import { client } from "@/sanity/lib/client";
import { homeQuery, settingsQuery } from "@/sanity/lib/queries";
import { Image } from "@/components/image";
import { MuxVideo } from "@/components/mux-video";
import { BlockContent } from "@/components/block-content";
import { ContactList } from "@/components/contact-list";
import { Scene } from "@/components/scene";


export async function generateMetadata() {
  const home = await client.fetch(homeQuery);
  return {
    title: home.seo.seoTitle,
    description: home.seo.seoDescription,
  }
}

export default async function Home() {
  const home = await client.fetch(homeQuery);
  const settings = await client.fetch(settingsQuery);


  return (
    <div className="my-8">
      <div className="">
        <div className=""></div>
        <div className="col-span-12 md:col-span-8 mt-4 md:mt-0">
          <div className="flex items-start md:flex-row flex-col gap-2 mb-4">
            <div className="w-[240px] h-[240px] md:w-[200px] md:h-[200px] mb-2 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Scene />
            </div>
            <div className="flex flex-col space-between h-full">
              <div className="flex flex-col">
                <p className="mb-0 text-neutral-900 dark:text-neutral-100 font-medium">{home.name}</p>
                <p className="mb-2 text-neutral-500 dark:text-neutral-400">{home.bio}</p>
                <p className="mb-0 px-2.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-800 w-fit text-neutral-700 dark:text-neutral-200">{home.status}</p>
              </div>

              <div className="mt-4 md:mt-8">
                <ContactList contacts={settings.contact} />
              </div>
            </div>
          </div>

          <div className="my-12">
            <BlockContent content={home.about} />
          </div>
        </div>
        
        <div className="mt-4 flex flex-col">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <MuxVideo playbackId={home.homeVideo.playbackId} />
          </div>
          <p className="mt-2 text-center text-xs text-neutral-500 dark:text-neutral-400">{home.homeVideo.caption}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-neutral-900 dark:text-neutral-100 text-2xl font-semibold mb-4">Experiments ({home.experiments.length})</h2>
          <div className="flex flex-col gap-2">
            {home.experiments.map((experiment: any) => (
              <div key={experiment._id}>
               <a href={experiment.link.externalUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">{experiment.link.label}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}