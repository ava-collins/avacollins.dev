import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';

import { YouTubeEmbed } from './YouTubeEmbed';

const meta = {
    title: 'components/YouTubeEmbed',
    component: YouTubeEmbed,
    decorators: [
        (Story) => (
            <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof YouTubeEmbed>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        url: 'https://www.youtube-nocookie.com/embed/3n4i3Ivnoo4',
        title: 'Sansar chat UI'
    }
}