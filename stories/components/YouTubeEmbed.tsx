"use client"

import React from 'react';
import useWindowSize from '../hooks/use-window-size'

export interface YouTubeEmbedProps {
    /** url - youtube video url */
    url: string;
    /** title - video title */
    title: string;
}

export const YouTubeEmbed = ({ url, title }: YouTubeEmbedProps) => {
    const { width } = useWindowSize();
    const eWidth = width && width > 600 ? 560 : 320;
    const eHeight = width && width > 600 ? 315 : 180;
    const cHeight = width && width > 600 ? 330 : 190;
    return (
        <div style={{ height: cHeight }}>
            <iframe width={eWidth} height={eHeight} src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ objectPosition: 'center' }}></iframe>
        </div>
    )
}