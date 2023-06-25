import { CredentialType, IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import styles from "../styles/Home.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useRouter } from 'next/router';
import logoImage from "../assets/img/zk-vote-logo.svg";
import { useEffect } from "react";


export default function Home() {
	const router = useRouter();

	const onSuccess = () => {
	};

	useEffect(() => {
		document.title = 'ZK-Vote'; // Set the desired app name here
	}, []);

	const handleProof = async (result: ISuccessResult) => {
		const reqBody = {
			merkle_root: result.merkle_root,
			nullifier_hash: result.nullifier_hash,
			proof: result.proof,
			credential_type: result.credential_type,
			action: process.env.NEXT_PUBLIC_WLD_ACTION_NAME,
			signal: "",
		};
		fetch("/api/verify", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reqBody),
		}).then(async (res: Response) => {
			const jsonRes = await res.json();

			if (res.status == 200) {
				console.log(jsonRes.nullifier_hash);
				// Convert the JSON object to a string
				const jsonResHashString = JSON.stringify(jsonRes.nullifier_hash);
				// Pass the string as a query parameter
				router.push({
					pathname: '/voting',
					query: { data: jsonResHashString },
				});
				console.log("Successfully verified credential.")
			} else {
				throw new Error("Error: " + (await res.json()).code) ?? "Unknown error.";
			}

		});
	};

	return (
		<div className={styles.container}>
			<div className="logo" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "40vh", marginTop: 20 }}>
				<button className="logo-icon" ><img src={logoImage.src} /></button>
			</div>
			<div className={styles.boxContainer}>
				<p className={styles.centeredParagraph}>
					Welcome to ZK-Vote, a privacy-preserving and trusted voting platform built on World ID.
				</p>
				<br /><br />
				<p className={styles.centeredParagraph}>
					Voting data will be published on-chain to promote transparency, auditability and real-time tracking, adding trust and reliability to the voting process.
				</p>
			</div>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "35vh" }}>
				<IDKitWidget action={process.env.NEXT_PUBLIC_WLD_ACTION_NAME!} onSuccess={onSuccess} handleVerify={handleProof} app_id={process.env.NEXT_PUBLIC_WLD_APP_ID!} credential_types={[CredentialType.Orb, CredentialType.Phone]}>
					{({ open }) => <button style={{ backgroundColor: 'black', color: 'white', padding: 20, borderRadius: 10, marginTop: -50 }} onClick={open}>Verify with World ID</button>}
				</IDKitWidget>
			</div>
		</div>
	);
}
