import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Topbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-2 px-4 lg:px-8 border-b border-gray-700 lg:border-none">
      {/* Contact Info */}
      <div className="flex items-center space-x-6 text-white">
        <div className="flex items-center space-x-2 border-r border-gray-600 pr-6">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary text-sm" />
          <small className="text-xs lg:text-sm hover:text-primary transition-colors cursor-pointer">
            polimeritas.official@gmail.com
          </small>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-primary text-sm" />
          <small className="text-xs lg:text-sm">+6285214991705</small>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex items-center space-x-3">
        {[
          { icon: faFacebookF, link: "https://www.facebook.com/polimeritas.official/" },
          { icon: faLinkedinIn, link: "https://www.linkedin.com/in/polimeritas2018/" },
          { icon: faInstagram, link: "https://www.instagram.com/polimeritas.official/" },
          { icon: faYoutube, link: "https://www.youtube.com/embed/fFBCvaFNq0Y" }
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-primary w-8 h-8 flex items-center justify-center rounded-sm transition-all"
          >
            <FontAwesomeIcon
              icon={social.icon}
              className="text-sm transform transition-transform duration-200 group-hover:scale-110 group-hover:text-primary/40"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Topbar;