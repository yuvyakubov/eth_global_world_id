# ZK-Vote - Zero Knowledge Proof Voting

ZK-Vote is a privacy-preserving and auditable voting platform built on World ID and Polygon.

Voting data will be published on-chain to promote transparency, auditability and real-time tracking, adding trust and reliability to the voting process.

## ZK-Vote Screenshots

![screencapture-eth-global-world-id-vercel-app-2023-06-25-07_25_30](https://github.com/yuvyakubov/eth_global_world_id/assets/29648095/5f9d534b-6e48-48bb-9d35-3e78b098860f)

![screencapture-localhost-3000-2023-06-25-04_10_54](https://github.com/yuvyakubov/eth_global_world_id/assets/29648095/434a2966-a3ab-4944-b38b-6b530286c1bb)

![screencapture-localhost-3000-2023-06-25-04_11_18](https://github.com/yuvyakubov/eth_global_world_id/assets/29648095/f684eed0-944f-4f1d-a3d9-4d02f8b035df)

![screencapture-localhost-3000-2023-06-25-04_11_27](https://github.com/yuvyakubov/eth_global_world_id/assets/29648095/41e53769-17a5-4fa2-943a-520a41a6aa17)

![screencapture-localhost-3000-voting-2023-06-25-04_11_35](https://github.com/yuvyakubov/eth_global_world_id/assets/29648095/5907edf6-1317-4e0b-bdb2-3ca6d35affdc)

<img width="1436" alt="Screen Shot 2023-06-25 at 4 12 14 AM" src="https://github.com/yuvyakubov/eth_global_world_id/assets/29648095/f1f7b7d5-b14a-4568-95d1-bf19b69cfa68">

![screencapture-localhost-3000-success-2023-06-25-04_32_46](https://github.com/yuvyakubov/eth_global_world_id/assets/29648095/0e45c5a1-b6ff-478b-93c3-64ea029025a3)

![screencapture-mumbai-polygonscan-address-0x7dd3be682c7e33abc723bd470b7c5256ba7613cf-2023-06-25-04_17_32](https://github.com/yuvyakubov/eth_global_world_id/assets/29648095/0b85e75b-1877-4438-8933-86d6870b050b)

## World ID Next.js Template

This is a template repository for creating a new project using Next.js and the [World ID SDK](https://id.worldcoin.org). This template isn't intended for use cases that require on-chain verification, but rather for use cases that require off-chain web backend verification.

## Bounties Implemented

Check out the live voting results on Polygon to see if A or B wins - https://mumbai.polygonscan.com/address/0x7dd3be682c7e33abc723bd470b7c5256ba7613cf

Check out ZK-Vote - https://eth-global-world-id.vercel.app

## Getting Started

First, run the development server:

```bash
yarn install && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Copy `.env.example` to `.env.local` and add your World ID App ID and Action Name to the appropriate variables.

This template includes an API route to verify the proof returned by the IDKit widget at `/api/verify`. Edit `src/pages/api/verify.ts` to handle any backend functions you need to perform.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file. Edit the `onSuccess` function to define frontend behavior once the proof has been verified.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js and World ID, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   [World ID Documentation](https://docs.worldcoin.org/) - learn about World ID features and API.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
