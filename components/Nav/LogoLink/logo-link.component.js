import Link from 'next/link';
import React from 'react';

export const LogoLink = () => {
  return (
    <li className="flex-shrink-0">
      <Link href="/" className="no-underline">

          <img src="/images/logo.svg" width="147px" height="43px" />

      </Link>
    </li>
  );
};
