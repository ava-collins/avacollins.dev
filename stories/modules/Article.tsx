import "./article.css"

import React, { ReactNode } from "react";

export interface ArticleProps {
    /** alignment - left/right */
    align?: string;
    /** title - Article title */
    title: string;
    /** text - Article text paragraphs */
    text: string[];
    /** image - children that contain images, carousels, videos to accompany the text */
    children: ReactNode;
    /** name - string id for page anchor */
    name: string;
}

export const Article = ({ align = 'left', title, text, children, name }: ArticleProps) => {
    const style = align === 'left' ? 'article' : ['article', align].join(' ')
    const content = text.map((t, index) => (<p key={`${name}-paragraph-${index}`}>{t}</p>))
    return (
        <article className={style} id={name}>
            <div className="text">
                <h2>{title}</h2>
                {content}
            </div>
            <div className="images">
                {children}
            </div>
        </article>)
}
