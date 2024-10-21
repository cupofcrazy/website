'use client';

import Link from "next/link";
import { Image } from "./image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { WorkCard } from "./work-card";


export const WorkGrid = ({ works }: { works: any[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
      {works.map((work: any) => (
        <Link key={work.slug.current} href={`/works/${work.slug.current}`}>
          <WorkCard key={work.slug.current} work={work} />
        </Link>
      ))}
    </div>
  )
}