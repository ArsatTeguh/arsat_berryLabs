import Image from 'next/image';
import React from 'react';

function VectorIcon() {
  return (
    <Image
      src="/vector.svg"
      alt="vector"
      width={600}
      height={600}
      className="w-2 h-2"
    />
  );
}

export default VectorIcon;
