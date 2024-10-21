'use client'

import MediaThemeInstaplay from 'player.style/microvideo/react';
import MuxVideoPlayer from "@mux/mux-video-react";

export function MuxVideo({ playbackId }: { playbackId: string }) {
  return (
    <div className="">
      <MuxVideoPlayer
        slot="media"
        playbackId={playbackId}
        playsInline
        crossOrigin=""
        loop
        muted
        autoPlay
        ></MuxVideoPlayer>
    </div>
  )
}