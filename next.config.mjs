import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    // You may not need this, it's just to support moduleResolution: 'node16'
    extensionAlias: {
      '.js': ['.tsx', '.ts', '.jsx', '.js'],
    },
    // turbo: {
    //   resolveAlias: {
    //     /**
    //      * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
    //      * Module parse failed: Unexpected character '�' (1:0)" error
    //      */
    //     canvas: './empty-module.ts',
    //   },
    // },
  }
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)

