'use client';

import { useState } from 'react';
import Button from './Button';
import ContactModal from './Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <header className="w-full bg-black text-white shadow-none fixed top-0 left-0 z-50 border-b-4 border-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <a
          href="#"
          className="text-3xl font-extrabold tracking-wider text-yellow-400 uppercase hover:text-yellow-300 transition-all duration-300"
        >
          Pedro Oliveira
        </a>

        <ul className="flex items-center gap-8 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-yellow-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <Button
              label="Contact"
              onClick={handleOpenModal}
            />
          </li>
        </ul>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
