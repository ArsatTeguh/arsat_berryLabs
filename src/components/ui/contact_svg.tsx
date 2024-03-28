import React from 'react';

function ContactSvg() {
  return (
    <div className="flex items-center  gap-2">
      <div className="flex flex-col gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#212121"
            d="M3.244 5.395L5.74 2.902a1.894 1.894 0 012.688 0l2.686 2.686a1.896 1.896 0 010 2.688L9.15 10.24a9.23 9.23 0 001.887 2.72 9.265 9.265 0 002.72 1.895l1.965-1.964a1.896 1.896 0 012.688 0l2.688 2.683a1.897 1.897 0 010 2.69l-2.491 2.492a3.08 3.08 0 01-2.67.858c-3.159-.52-6.292-2.2-8.821-4.727-2.527-2.524-4.205-5.656-4.732-8.825a3.085 3.085 0 01.86-2.667z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="16"
          fill="none"
          viewBox="0 0 21 16"
        >
          <path
            fill="#212121"
            d="M2.644.8h15.9c1.5 0 2.256.708 2.256 2.148v10.104c0 1.428-.756 2.148-2.256 2.148h-15.9c-1.5 0-2.256-.72-2.256-2.148V2.948C.388 1.508 1.144.8 2.644.8zm7.944 10.32l8.088-6.636c.288-.24.516-.792.156-1.284-.348-.492-.984-.504-1.404-.204l-6.84 4.632L3.76 2.996c-.42-.3-1.056-.288-1.404.204-.36.492-.132 1.044.156 1.284l8.076 6.636z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="19"
          fill="none"
          viewBox="0 0 14 19"
        >
          <path
            fill="#212121"
            d="M6.136 18.525C4.233 16.143 0 10.368 0 7.125 0 3.19 3.134 0 7 0c3.865 0 7 3.19 7 7.125 0 3.243-4.266 9.018-6.136 11.4a1.09 1.09 0 01-1.728 0zM7 9.5c1.287 0 2.333-1.065 2.333-2.375S8.287 4.75 7 4.75c-1.287 0-2.333 1.065-2.333 2.375S5.713 9.5 7 9.5z"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-4">
        <p className="link link-hover">+6282126753060</p>
        <p className="link link-hover">contact@berrytrada.com</p>
        <p className="link link-hover">Bandung, Indonesia</p>
      </div>
    </div>
  );
}

export default ContactSvg;
