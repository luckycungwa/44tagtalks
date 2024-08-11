import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full bottom-0'>
             <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="/" prefetch={false ? "true" : undefined} className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </Link>
          <Link to="/" prefetch={false ? "true" : undefined} className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
        </div>
    );
}

export default Footer;
