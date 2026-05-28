import React, { ReactNode } from "react";

import "./grid.css"

export interface GridProps {
    /** Style for grid contents - work and play are the only two options */
    style: 'work' | 'play';
    /** Grid elements */
    children: ReactNode;
}

export const Grid = ({ style, children }: GridProps) => {
    return (
        <section className={style}>
            <div className="grid">
                {children}
            </div>
        </section>
    );
}
