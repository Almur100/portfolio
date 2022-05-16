// Import Assets
import profile from '../assets/myprofile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="john Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Almur Hasan</h1>
                <p> Blockchain & Web3 Devlover | Solidity | Smart Contract | Ethereum | Hardhat | Javascript | Ether.js | Next.js | Builded Defi,Supply chain,Real estate,crowdfund,multisig wallet ,DAO , triple accounting blockchain projects.
</p>
                <a href="almurhasan1000@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;