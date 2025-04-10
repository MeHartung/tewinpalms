'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <Link href="/">
            <Image
              src="/img/logo/logo.svg" // обновлённый путь
              alt="Логотип Типографии"
              width={140}
              height={32}
              className="footer-logo"
              priority
            />
          </Link>
          <p className="mt-2 text-sm">© Типография, {new Date().getFullYear()}</p>
        </div>

        <nav className="footer-nav">
          <Link href="/" className="footer-link">Главная</Link>
          <Link href="/services" className="footer-link">Услуги</Link>
          <Link href="/portfolio" className="footer-link">Портфолио</Link>
          <Link href="/contacts" className="footer-link">Контакты</Link>
        </nav>
      </div>
    </footer>
  );
}