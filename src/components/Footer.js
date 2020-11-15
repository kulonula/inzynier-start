import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get some puppers on your email!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about-the-app'>About the app</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/author'>Author</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Help</h2>
            <Link to='/help-center'>How does it work?</Link>
            <Link to='/faqs'>FAQs</Link>

          </div>
        </div>
        <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>{"Instagram         "}
              <i className='fab fa-instagram'/>
            </Link>
            <Link to='/'>{"Facebook          "}
              <i className='fab fa-facebook-f'/>
            </Link>
            <Link to='/'>{"Youtube          "}
              <i class='fab fa-youtube' />
            </Link>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PetCo.
              <i className="fas fa-paw"></i>
            </Link>
          </div>
          <small class='website-rights'>Urszula Weronika Kulon © 2020</small>

          {/* <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
           </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>*/}
        </div>
      </section>
    </div>
  );
}

export default Footer;
