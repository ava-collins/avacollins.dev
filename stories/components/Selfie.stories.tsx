import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';

import { Selfie } from "./Selfie";

const meta = {
    title: 'components/Selfie',
    component: Selfie,
    decorators: [
        (Story) => (
            <div style={{ width: '100vw', height: '100vh' }}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Selfie>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}