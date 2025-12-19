import type { Meta, StoryObj } from '@storybook/nextjs';

import { Footer } from "./Footer";

const meta = {
    title: 'modules/Footer',
    component: Footer,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tagline: '“Trying to define yourself is like trying to bite your own teeth.”- Alan Watts'
    }
}