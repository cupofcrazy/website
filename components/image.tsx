"use client";

type ImageProps = {
  aspectRatio?: number
  color?: string
} & React.ImgHTMLAttributes<HTMLImageElement>

export const Image = ({src, alt, width, height, aspectRatio, color = 'red', ...props}: ImageProps) => {
  return (
    <div className="relative w-full h-full">
      <img className="w-full h-full object-cover overflow-hidden" style={{
        aspectRatio: aspectRatio || `${width}/${height}`
      }} src={src} alt={alt} width={width} height={height} {...props} />
    </div>
  )
}