import React, { useRef } from 'react'
import './Button.css'
import './Footer.css'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser'

export const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3sak2bt', 'template_uoyx88u', form.current, 'user_6XyAds7xNRJ2QAIIcH6uG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
      };

    return (
        <div className='footer-container' id='contactSection'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Leave me a message from here!
                </p>
                <div className='input-areas'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="footer-input" placeholder="Name" name="from_name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="footer-input" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="footer-input" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="footer-input" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn--contact" value="Contact Me"></input>
                        </div>
                    </form>
                </div>
            </section>
            
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>
                    <a 
                        className='social-icon-link GitHub'
                        href='https://github.com/ran-shang'
                        target='_blank'
                        aria-label='GitHub'>
                        <i className='fab fa-github' /> </a>
                    <a 
                        className='social-icon-link linkedIn'
                        href='https://www.linkedin.com/in/ran-shang-7605381bb/'
                        target='_blank'
                        aria-label='LinkedIn'>
                        <i className='fab fa-linkedin' /> </a>
                        <a 
                        className='social-icon-link facebook'
                        href='https://www.facebook.com/ran.shang.52/'
                        target='_blank'
                        aria-label='Facebook'>
                        <i className='fab fa-facebook-f' /> </a>

                        <a 
                        className='social-icon-link instagram'
                        href='https://www.instagram.com/keepcalm_rrrrran/?hl=en'
                        target='_blank'
                        aria-label='Instagram' >
                        <i className='fab fa-instagram' /> </a>
                    </div>
                </div>
            </section>
            
        </div>
    );
};


