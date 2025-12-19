import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { BASE_URL } from '../constants';

import { Grid } from "./Grid";
import { Card } from '../components/Card';
import { Partial } from '../components/Partial';

const meta = {
    title: 'modules/Grid',
    component: Grid,
    decorators: [
        (Story) => (
            <div className="main">
                <Story />
            </div >
        )
    ]
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>;

export const Work: Story = {
    args: {
        style: 'work',
        children: (
            <React.Fragment>
                <Card title="work" name="Sansar" image={`${BASE_URL}/work/sansar/logo.png`} description='This is a demo' link="#" />
                <Card name="Real" image={`${BASE_URL}/work/realnetworks/logo.png`} description='This is a demo' link="#" />
                <Card name="Porch" image={`${BASE_URL}/work/porch/logo.png`} description='This is a demo' link="#" />
            </React.Fragment>
        )
    }
}

export const Play: Story = {
    args: {
        style: 'play',
        children: (
            <React.Fragment>
                <Card title="play" name="Ophiucus" description="NFT minting decentralized application." image={`${BASE_URL}/play/ophi/logo.png`} link="#" isResponsive={true} />
                <Partial isResponsive={true} />
                <Card name="Ophiucus" description="NFT minting decentralized application." image={`${BASE_URL}/play/ophi/logo.png`} link="#" isResponsive={true} />
                <Card name="Tarot" description="Tarot card game made with react native, react-dom, storybook and yarn monorepo." image={`${BASE_URL}/play/tarot/logo.png`} link="#" />
                <Partial />
            </React.Fragment>
        )
    }
}
