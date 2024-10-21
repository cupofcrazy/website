import { worksQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { WorkGrid } from "@/components/work-grid";

export const metadata = {
  title: "Works",
  description: "Some of my works",
}

export default async function Works() {
  const works = await client.fetch(worksQuery);
  
  return (
    <div className="my-8">
      <div className="">
        {/* <div className="mb-16"> */}
        {/* <h1 data-count={works.length} className="page-title text-neutral-300 dark:text-neutral-700 w-max mx-auto text-[4rem] uppercase tracking-tighter font-bold text-center">Works</h1> */}
      {/* </div> */}
      <div className="">
          <h2 className="text-neutral-900 dark:text-neutral-100 text-2xl font-semibold mb-4">Works ({works.length})</h2>
          <WorkGrid works={works} />
        </div>
      </div>
    </div>
  );
}
