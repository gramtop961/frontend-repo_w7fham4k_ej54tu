import React from 'react'
import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200">
      <div className="container-max flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-xl tracking-tight">AuRAKi</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/products" className="hover:underline">Shop</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/cart" aria-label="Cart" className="text-sm border border-black px-3 py-1 rounded-sm hover:bg-black hover:text-white transition-colors">Cart</Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container-max py-12 text-sm text-gray-400 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div>
          <div className="font-bold text-gray-900 mb-2">AuRAKi</div>
          <p>Monochrome silver jewelry. Minimal. Refined.</p>
        </div>
        <div className="flex gap-12">
          <div>
            <div className="font-semibold text-gray-900 mb-2">Company</div>
            <ul className="space-y-2">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900 mb-2">Support</div>
            <ul className="space-y-2">
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
        <div className="text-gray-400">© {new Date().getFullYear()} AuRAKi</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        {/* Hero with Spline 3D cover */}
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/70 to-white/10" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-max pb-10">
              <h1 className="text-3xl md:text-5xl font-bold">Silver, reduced to essentials.</h1>
              <p className="mt-2 text-gray-400 max-w-xl">Swiss-grid layouts, pure black & white, crafted to let the metal speak.</p>
              <Link to="/products" className="inline-block mt-6 bg-black text-white px-5 py-3 rounded-sm">Shop the collection</Link>
            </div>
          </div>
        </section>

        {/* Featured collections */}
        <section className="container-max py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {['Rings', 'Necklaces', 'Earrings'].map((c) => (
              <Link key={c} to="/products" className="card p-8 group focus-visible:ring-2 ring-black">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl">{c}</h3>
                  <span className="text-xs text-gray-400">Explore →</span>
                </div>
                <div className="aspect-square bg-gray-50 border border-gray-200" />
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="border-y border-gray-200 bg-gray-50">
          <div className="container-max py-12 md:py-16">
            <div className="max-w-xl">
              <h2 className="text-2xl">Stay informed</h2>
              <p className="text-gray-400 mt-2">New drops and restocks. No noise.</p>
              <form className="mt-6 flex gap-2">
                <input type="email" required placeholder="Email address" className="w-full border border-black px-3 py-3 rounded-sm focus:border-2" />
                <button type="submit" className="bg-black text-white px-5 py-3 rounded-sm">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
