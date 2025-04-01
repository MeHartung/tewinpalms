'use client'

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        <div>
          <h3 className="mb-3 text-brand-gray">Social Media</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-brand-accent transition">Twitter</a></li>
            <li><a href="#" className="hover:text-brand-accent transition">Dribbble</a></li>
            <li><a href="#" className="hover:text-brand-accent transition">Behance</a></li>
            <li><a href="#" className="hover:text-brand-accent transition">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-brand-gray">Contact</h3>
          <p>hello@example.com</p>
        </div>
        <div className="md:text-right">
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-brand-accent transition">Created by You</a></li>
            <li><a href="#" className="hover:text-brand-accent transition">Built on Next.js</a></li>
            <li><a href="#" className="hover:text-brand-accent transition">2025</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-20 text-brand-gray text-[12vw] leading-none font-light tracking-tight">
        <h2 className="whitespace-nowrap">Let's talk</h2>
      </div>
    </footer>
  )
}