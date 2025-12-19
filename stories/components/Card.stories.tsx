import React from "react";
import type { Meta, StoryObj } from '@storybook/nextjs';

import { Card } from "../components/Card"
import { BASE_URL } from "../constants";

const meta = {
    title: "modules/Card",
    component: Card,
    decorators: [
        (Story) => (
            <div className="main">
                <div style={{ display: 'flex', backgroundColor: '#666', width: '100vw', padding: '48px 2rem' }}>
                    <Story />
                </div>
            </div >
        )
    ],
    argTypes: {
        title: { control: 'text' },
        name: { control: 'text' },
        description: { control: 'text' },
        image: { control: 'file', accept: 'png' },
        link: { control: 'text' },
        isResponsive: { control: 'boolean' }
    },
    args: {
        link: "#"
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'Demo',
        description: 'This is a demo of a card.',
        image: `${BASE_URL}/work/sansar/logo.png`,
        isResponsive: false,
    }
}
