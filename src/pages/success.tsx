import React from 'react';
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";
import logoImage from "../assets/img/zk-vote-logo.svg";
import ThumbsUpGif from "../assets/img/thumbs-up.gif"; // Import the GIF file

const SuccessPage = () => {
    const router = useRouter();

    // Retrieve the query parameter for additional information if needed
    const { data } = router.query;


    function handleButtonClick() {
        window.location.href = "/";
    };

    return (
        <div className={styles.container}>
            <div className="logo" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "40vh", marginTop: 20 }}>
                <button className="logo-icon" onClick={handleButtonClick}><img src={logoImage.src} alt="Logo" /></button>
            </div>
            <div className="logo" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: -30 }}>
                <img src={ThumbsUpGif.src} alt="Success GIF" className={styles.gif} style={{maxHeight: 200}}/>
            </div>
            <br /><br />
            <div className={styles.boxContainer}>
                <p className={`${styles.centeredParagraph} ${styles.typingAnimation}`}>
                    Thanks for voting!
                </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '43.2vh', marginTop: -90 }}>
                <button
                    onClick={handleButtonClick}
                    style={{ backgroundColor: 'black', color: 'white', padding: 20, borderRadius: 10, marginRight: 20 }}
                >
                    Return to Home Page
                </button>
            </div>
        </div>
    );
};

export default SuccessPage;
