"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useRef, useState } from "react";

type ImageProps = {
  aspectRatio?: number
  color?: string
} & NextImageProps

export const Image = ({src, alt, width, height, aspectRatio, color = 'red', ...props}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState  (false);
  
  const onLoad = () => {
    setIsLoaded(true);
  }
  return (
    <div className="relative w-full h-full">
      <NextImage className="w-full h-full object-cover overflow-hidden" style={{
        aspectRatio: aspectRatio || `${width}/${height}`
      }} src={src} alt={alt} width={width} height={height} onLoad={onLoad} {...props} />
      {/* <div className={`absolute inset-0 bg-neutral-200 transition-all delay-100 duration-1000 z-[1]`}
        style={{
          backgroundColor: color,
          opacity: isLoaded ? 0 : 1,
          visibility: isLoaded ? 'hidden' : 'visible',
       }}
      ></div> */}
    </div>
  )
}