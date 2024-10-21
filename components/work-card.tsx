'use client';

import { Image } from "./image";
import { motion } from "framer-motion";
import clsx from "clsx";


type WorkCardProps = {
  work: any;
} & React.HTMLAttributes<HTMLDivElement>

export function WorkCard({ work, className, ...props }: WorkCardProps) {
  return (
    <motion.div
      layoutId={`work-card-${work.slug.current}`}
      style={{
        // backgroundColor: work.cover.metadata.palette.vibrant.background
      }}
      className={clsx("", className)}
      >
      <motion.div 
        className="border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden">
        <Image color={work.cover.metadata.palette.vibrant.background} src={work.cover.url} alt={work.title} width={500} height={500} />
      </motion.div>
      <div className="mt-2">
        <motion.h1 
          className="text-md text-neutral-900 dark:text-white">{work.title}</motion.h1>
        <motion.h2 
          className="text-md text-neutral-500 dark:text-white/70">{work.subtitle}</motion.h2>
      </div>
    </motion.div>
  )
}