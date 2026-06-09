import "./card.css"

import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CardProps {
    /** Optional title that is displayed above card uses this text */
    title?: string;
    /** Name to be displayed on the card */
    name: string;
    /** Description to be used for screen readers */
    description: string;
    /** Image URI to be displayed on card */
    image: string;
    /** Link unique URI to be opened when card is clicked */
    link: string | URL;
    /** Is this card a spacing element to be shown or hidden based on viewport size */
    isResponsive?: boolean;
}

export const Card = ({ title, name, description, image, link, isResponsive }: CardProps) => {
    const wrapper = isResponsive ? title ? ['firstslot', 'firstresponsive'].join(' ') : ['slot', 'responsive'].join(' ') : 'slot';
    const content = title ? ['firstcard', 'card'].join(' ') : 'card';
    const titleblock = title ? (<div className="title">
        <h2>{title}</h2>
    </div>) : (<span></span>)

    return (
        <div className={wrapper}>
            {titleblock}
            <Link href={link}>
                <div className={content}>
                    <div className="cardimage">
                        <Image
                            src={image}
                            alt={description}
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                    <h3>{name}</h3>
                </div>
            </Link>
        </div>
    )
}