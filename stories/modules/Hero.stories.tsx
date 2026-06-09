import React from "react";
import type { Meta, StoryObj } from '@storybook/nextjs';

import { Hero } from "../modules/Hero"

const meta = {
    title: "modules/Hero",
    component: Hero,
    decorators: [
        (Story) => (
            <div className="main">
                <Story />
            </div>
        )
    ],
    argTypes: {
        abouttext: { control: 'text' }
    },
    args: {
        resumeHref: "https://github.com/ava-collins",
        connectHref: "https://www.linkedin.com/in/avacollins-dev/"
    }
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        abouttext: `Ambitious developer with a long history of bringing to life
              interactive experiences for retail, education and games. Skilled
              in prototype to MVP launches (aka zero to one), frontend architecture, build pipelines for continous integrations, web accessibility and
              user experience requirements, third party integrations, performance and security monitoring,
              documentation and user support.`
    }
}