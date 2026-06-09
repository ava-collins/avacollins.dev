import { WorklistProp, worklist } from "../constants";

import { Article } from "@/stories/modules/Article";
import { BackgroundImage } from "@/stories/components/BackgroundImage";
import React from "react";
import { YouTubeEmbed } from "@/stories/components/YouTubeEmbed";

export default function Work() {
    const articles = worklist.map((w: WorklistProp, i: number) => {
        const alignment = i % 2 === 0 ? 'left' : 'right';
        const id = w.name.toLowerCase();

        const details = w.details.map((d, j) => {
            const uniq = `${id}-${i}${j}`
            const Content = d.media.map((m) => {
                if (m.type === 'image') {
                    return (<BackgroundImage url={m.url} alt={m.alt ?? d.title} key={m.url} />)
                } else {
                    return (<YouTubeEmbed url={m.url} title={m.title ? m.title : ''} key={m.url} />)
                }

            })
            return (<Article title={d.title} align={alignment} name={uniq} key={uniq}
                text={d.text}>
                {Content}
            </Article >)
        })

        return (
            <section id={id} key={id}>
                {details}
            </section>
        )
    })
    return (
        <main className="main" style={{ flexDirection: 'column' }}>
            {articles}
        </main >
    )
}
