import './Footer.css';
import { FaInstagram } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    
    const handleBlank = (type: 'instagram' | 'twitter' | 'youtube') => {
        switch (type) {
        case 'instagram':
            window.open('https://www.instagram.com', '_blank');
            break;
        case 'twitter':
            window.open('https://www.x.com', '_blank');
            break;
        case 'youtube':
            window.open('https://www.youtube.com', '_blank');
            break;
        }
    };

    const handleClickTerms = (): void => {
        navigate('/terms');
    };
    
    return <>
        <footer>
            <div className="footer-title">
                <h2>Podcats.</h2>
                <div className="copyright">
                    <FaRegCopyright/>
                    <p>{new Date().getFullYear()}</p>
                </div>
            </div>
            <div className="social-network">
                <div className="network" onClick={() => handleBlank('instagram')}><FaInstagram/></div>
                <div className="network" onClick={() => handleBlank('twitter')}><FaTwitter/></div>
                <div className="network" onClick={() => handleBlank('youtube')}><FaYoutube/></div>
            </div>
            <h4 onClick={handleClickTerms}>Terms & Privacy</h4>
        </footer>
    </>;
};

export default Footer;