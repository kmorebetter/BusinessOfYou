import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '2rem', background: '#222', color: '#fff', marginTop: '2rem', width: '100%', boxShadow: '0 -2px 10px rgba(0,0,0,0.5)' }}>
            <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
                <p>&copy; 2025 Business Of You. All rights reserved.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
