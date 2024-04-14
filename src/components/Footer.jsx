import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full  text-center p-4 text-gray-700">
      Made by{' '}
      <a
        href="https://github.com/anduckhmt146"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700">
        anduckhmt146
      </a>{' '}
      with <span className="text-red-500">&hearts;</span>
    </footer>
  );
};

export default Footer;
