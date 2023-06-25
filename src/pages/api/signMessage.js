import { ethers } from 'ethers';

// Warning: handling private keys on the server is dangerous and not recommended
const OWNER_PRIVATE_KEY = '0x...';  // replace with owner's private key

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_OWNER_PRIVATE_KEY);
        console.log(wallet);
        console.log(wallet.address);
        const message = "Approved by Owner";
        const signature = await wallet.signMessage(message);

        return res.status(200).json({ signature });
    } else {
        // Handle any other HTTP method
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}