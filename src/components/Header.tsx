'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = ['Услуги', 'Портфолио', 'Контакты'];

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/img/logo/logo.svg"
            alt="Логотип Типографии"
            width={240}
            height={64}
            className="h-[64px] w-auto"
            priority
          />
        </Link>

        {/* Бургер */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="burger"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>

        {/* Десктоп-меню */}
        <nav className="nav-desktop">
          {navItems.map((title, idx) => (
            <div key={idx} className="relative group">
              <button
                className="nav-button"
                onClick={() => toggleDropdown(idx)}
              >
                {title}
              </button>

              {/* Дропдаун */}
              <div
                className={`dropdown ${
                  activeDropdown === idx ? 'opacity-100 pointer-events-auto translate-y-0' : ''
                }`}
              >
                <Link href="#" className="dropdown-link">Вариант 1</Link>
                <Link href="#" className="dropdown-link">Вариант 2</Link>
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="flex flex-col gap-3">
            {navItems.map((title, idx) => (
              <details key={idx} className="group">
                <summary className="mobile-summary">{title}</summary>
                <div className="mobile-dropdown">
                  <Link href="#" className="mobile-link">Вариант 1</Link>
                  <Link href="#" className="mobile-link">Вариант 2</Link>
                </div>
              </details>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}