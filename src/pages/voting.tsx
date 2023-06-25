import React, { useEffect } from 'react';
import styles from "../styles/Home.module.css";
import { ethers } from 'ethers';
import logoImage from "../assets/img/zk-vote-logo.svg";
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
declare var window: any


const Vote = () => {
    const router = useRouter();
    const isAuthenticated = true; // Set the authentication status here

    // Get the data string from the query parameters
    const nullifierHash = router.query.data;
    // Convert the string back to a JSON object

    useEffect(() => {
        document.title = 'ZK-Vote'; // Set the desired app name here
        if (!isAuthenticated) {
            alert('You need to verify your identity with World ');
            router.push('/');
        }
    }, [isAuthenticated, router]);

    async function voteForA() {
        console.log(nullifierHash);

        try {
            // Connect to an Ethereum provider (e.g., MetaMask)
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Create an instance of the contract using the address and ABI
            const provider = new ethers.BrowserProvider(window.ethereum);
            const address = '0x1632f65044d76f9afea2c5e7c5f8894f9fdfd37c';
            const abi = [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [],
                    "name": "getACount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "getBCount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "name": "hasVoted",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "hash",
                            "type": "string"
                        }
                    ],
                    "name": "voteForA",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "hash",
                            "type": "string"
                        }
                    ],
                    "name": "voteForB",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ];

            // let signature = '';

            // fetch("/api/signMessage", {
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // }).then(async (res: Response) => {
            //     const jsonRes = await res.json();
            //     console.log(jsonRes);
            //     console.log(jsonRes.signature);

            //     if (res.status == 200) {
            //         console.log("Successfully verified credential.")
            //         signature = jsonRes.signature;
            //     } else {
            //         throw new Error("Error: " + (await res.json()).code) ?? "Unknown error.";
            //     }

            // });

            const signer = await provider.getSigner();
            const contract = new ethers.Contract(address, abi, signer);
            const tx = await contract.voteForA(nullifierHash);



            await tx.wait();
            contract.getACount().then((res: any) => {
                console.log(res.toString());
            })
        } catch (error) {
            if (error instanceof Error && error.message.includes('Already voted')) {
                Swal.fire({
                    icon: 'error',
                    title: 'You have already voted',
                    text: 'You can only vote once. Please try voting with a different World ID.',
                })
                return;
            }
            console.error('Failed to connect to the contract:', error);
        }
    }

    async function voteForB() {
        try {
            // Connect to an Ethereum provider (e.g., MetaMask)
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Create an instance of the contract using the address and ABI
            const provider = new ethers.BrowserProvider(window.ethereum);
            const address = '0x1632f65044d76f9afea2c5e7c5f8894f9fdfd37c';
            const abi = [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [],
                    "name": "getACount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "getBCount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "name": "hasVoted",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "hash",
                            "type": "string"
                        }
                    ],
                    "name": "voteForA",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "hash",
                            "type": "string"
                        }
                    ],
                    "name": "voteForB",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ];
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(address, abi, signer);
            const tx = await contract.voteForB(nullifierHash)

            await tx.wait();
            contract.getBCount().then((res: any) => {
                console.log(res.toString());
            })
        } catch (error) {
            console.error('Failed to connect to the contract:', error);
        }
    }

    return (
        isAuthenticated && (
            <div className={styles.container}>
                <div className="logo" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "40vh", marginTop: 20 }}>
                    <button className="logo-icon" ><img src={logoImage.src} /></button>
                </div>
                <div className={styles.boxContainer}>
                    <p className={`${styles.centeredParagraph} ${styles.typingAnimation}`}>
                        A voter can only vote once. This is tracked via their World ID.
                    </p>
                    <br /><br />
                    <p className={`${styles.centeredParagraph} ${styles.typingAnimation}`}>
                        The owner of the voting smart contract will provide their signature to verify that you are eligible to vote.
                    </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', marginTop: -62.5 }}>
                    <button
                        style={{ backgroundColor: 'black', color: 'white', padding: 20, borderRadius: 10, marginRight: 20 }}
                        onClick={voteForA}
                    >
                        Vote For A
                    </button>
                    <button
                        style={{ backgroundColor: 'black', color: 'white', padding: 20, borderRadius: 10, marginLeft: 20 }}
                        onClick={voteForB}
                    >
                        Vote For B
                    </button>
                </div>
            </div>
        )
    );
};

export default Vote;