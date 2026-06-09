import "./grid.css"

import React, { ReactNode } from "react";

export interface GridProps {
    /** Style for grid contents - work and play are the only two options */
    style: 'work' | 'play';
    /** Grid elements */
    children: ReactNode;
}

export const Grid = ({ style, children }: GridProps) => {
    return (
        <section className={style} id="work">
            <div className="grid">
                {children}
            </div>
        </section>
    );
}
