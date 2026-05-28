import React from "react";
import Image from "next/image";

export interface BackgroundProps {
    /** url - image url */
    url: string;
    /** alt - accessible image description */
    alt: string;
}
export const BackgroundImage = ({ url, alt }: BackgroundProps) => {
    const style = {
        position: 'relative' as const,
        width: '100%',
        height: '100%',
        minHeight: '320px',
        marginBottom: '1rem'
    }
    return (
        <figure style={style}>
            <Image
                src={url}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
            />
        </figure>
    )
}
