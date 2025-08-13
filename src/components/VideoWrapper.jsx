import React from 'react'

export default function VideoWrapper({ src, title, width = 560, height = 315 }) {
  return (
    <div className="video-wrapper">
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}