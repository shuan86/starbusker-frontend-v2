import React from 'react';
import FacebookIcon from '../public/svg/facebook-icon.svg'
import InstagramIcon from '../public/svg/instagram-icon.svg'
import '../public/css/footer.css'
export const Footer = () => {
    return (
        <div className='footer-wrap'>
            <div></div>
            <div className='footer'>
                <div className="footer-logo">Starbusker</div>
                <div className="footer-social-media">
                    <img src={FacebookIcon} alt="FacebookIcon" />
                    <img src={InstagramIcon} alt="InstagramIcon" />
                </div>
                <div className="footer-copyright">@2021 by Starbusker</div>
            </div>
        </div>
    )
}