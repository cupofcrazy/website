import { BlockContent } from "@/components/block-content";
import { ContactList } from "@/components/contact-list";
import { Scene } from "@/components/scene";
import { client } from "@/sanity/lib/client";
import { infoQuery, settingsQuery } from "@/sanity/lib/queries";


export async function generateMetadata() {
  const information = await client.fetch(infoQuery);
  return {
    title: information.seo.seoTitle,
    description: information.seo.seoDescription,
  }
}

export default async function Info() {
  const information = await client.fetch(infoQuery);
  const settings = await client.fetch(settingsQuery);

  return (
    <div className="">
      <h1>Info</h1>
      <div className="my-8">
        <div className="w-[240px] h-[240px] bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden mb-4">
          <Scene />
        </div>
        <BlockContent content={information.description} />
      </div>
      <div className="my-16">
        <h2 className="bg-white text-black dark:text-white dark:bg-neutral-800 underline rounded-full w-fit font-medium">Experience</h2>
        <ul className="list-none grid gap-2 my-1">
          {information.experiences.map((experience: any) => (
            <li className="grid grid-cols-12" key={experience.position}>
              <p className="col-span-4 text-neutral-800 dark:text-neutral-100">{experience.position}</p>
              <p className="col-span-4 text-neutral-600 dark:text-neutral-300">{experience.company}</p>
              <p className="col-span-4 text-right text-neutral-400 dark:text-neutral-500">{experience.duration}</p>
            </li>
          ))}
        </ul>

        <h2 className="bg-white text-black dark:text-white dark:bg-neutral-800 underline rounded-full w-fit mt-8 font-medium">Skills</h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 my-1">
          {information.skills.map((skill: any) => (
            <li className="" key={skill}>
              <p className="text-neutral-700 dark:text-neutral-300">{skill}</p>
            </li>
          ))}
        </ul>

        <h2 className="bg-white text-black dark:text-white dark:bg-neutral-800 underline rounded-full w-fit mt-8 font-medium">Technologies</h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 my-1">
          {information.technologies.map((technology: any) => (
            <li className="" key={technology}>
              <p className="text-neutral-700 dark:text-neutral-300">{technology}</p>
            </li>
          ))}
        </ul>
        <h2 className="bg-white text-black dark:text-white dark:bg-neutral-800 underline rounded-full w-fit mt-8 font-medium">Contact</h2>
        <ContactList contacts={settings.contact} />
      </div>
    </div>
  )
}