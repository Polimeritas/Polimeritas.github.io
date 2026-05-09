import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { siteConfig } from '@/config/site';

const Topbar = () => {
  return (
    // Menggunakan Grid 3 kolom agar kontak bisa benar-benar presisi di tengah
    <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 items-center py-2 px-4 lg:px-8">

      {/* Kolom Kiri: Sengaja dikosongkan agar kolom tengah seimbang */}
      <div className="hidden lg:block"></div>

      {/* Kolom Tengah: Contact Info */}
      <div className="flex items-center justify-center space-x-6 text-white w-full">
        <div className="flex items-center space-x-2">
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

      {/* Kolom Kanan: Social Media */}
      <div className="hidden lg:flex items-center justify-end space-x-4">
        {siteConfig.socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="group text-primary w-6 h-6 flex items-center justify-center transition-all"
          >
            <FontAwesomeIcon
              icon={social.icon}
              className="text-sm transform transition-transform duration-200 group-hover:scale-110 group-hover:text-white"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Topbar;