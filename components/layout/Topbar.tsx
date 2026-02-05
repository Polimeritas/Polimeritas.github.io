import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { siteConfig } from '@/config/site';

const Topbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-2 px-4 lg:px-8 border-b border-gray-700 lg:border-none">
      {/* Contact Info */}
      <div className="flex items-center space-x-6 text-white">
        <div className="flex items-center space-x-2 border-r border-gray-600 pr-6">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary text-sm" />
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-xs lg:text-sm hover:text-primary transition-colors cursor-pointer"
          >
            {siteConfig.contact.email}
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-primary text-sm" />
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="text-xs lg:text-sm hover:text-primary transition-colors"
          >
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex items-center space-x-3">
        {siteConfig.socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
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