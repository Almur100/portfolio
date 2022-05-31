// Import Assets
import uniswap from '../assets/cfund.png';
import compound from '../assets/mwallet.png';
import re from '../assets/restate.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>CrowdFund</h3>
                    <img src={uniswap} alt="crowdfund Swap Page" />
                    <p>The Crowdfunding platform in blockchain makes different possibilities for the startups by raising the funds to create their own digital currency and it is peer-to-peer fund raising model . Anyone can participate in this crowdfunding if they have invented any new cryptocurrency(e.g., Ethereum) and also can contribute as much as they want.
                    </p>

                    <a href="https://github.com/Almur100/CrowdFund-Project/tree/master" target="_blank" className="button">Code</a>
                    <a href="https://medium.com/@almurhasan1000/how-does-blockchain-support-crowdfunding-5ccb3d903b6b" target="_blank" className="button">blog</a>
                </div>

                <div className="projects__card">
                    <h3>Multisig Wallet</h3>
                    <img src={compound} alt="multisig Landing Page" />
                    <p>
                    Multisig stands for multi-signature, which is a specific type of digital signature that makes it possible for two or more users to sign documents as a group. Therefore, a multi-signature is produced through the combination of multiple unique signatures.  
                    </p>

                    <a href="https://github.com/Almur100/Multisigwallet-project" target="_blank" className="button">Code</a>
                    <a href="https://medium.com/@almurhasan1000/what-is-a-multisig-wallet-e5513f07e16e" target="_blank" className="button">blog</a>
                </div>

                <div className="projects__card">
                    <h3>Tokenize RealEstate</h3>
                    <img src={re} alt="realestate Landing Page" />
                    <p>
                    Tokenize smart contract based  realestate makes  easy to buy and sell realestate.   
                    </p>

                    <a href="https://github.com/Almur100/realestate" target="_blank" className="button">Code</a>
                   
                </div>

               

               
               
            </div>
        </section>
    );
}

export default Projects;