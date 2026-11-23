
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'AIR STRIKE RED',
    category: 'RUNNING',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900',
    tag: 'BEST SELLER',
  },
  {
    id: 2,
    name: 'STREET FORCE',
    category: 'LIFESTYLE',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900',
    tag: 'NEW DROP',
  },
  {
    id: 3,
    name: 'SHADOW RUNNER',
    category: 'RUNNING',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900',
    tag: 'LIMITED',
  },
  {
    id: 4,
    name: 'BLOCK CLASSIC',
    category: 'LIFESTYLE',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900',
    tag: 'ESSENTIAL',
  },
]

const formatPrice = (price) =>
  price.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
  })

function Home() {
  const [category, setCategory] = useState('TODAS')
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState('')

  const visibleProducts =
    category === 'TODAS'
      ? products
      : products.filter((product) => product.category === category)

  function addToCart(product) {
    setCartCount((count) => count + 1)
    setNotice(`${product.name} AÑADIDA AL CARRITO`)

    window.clearTimeout(window.noticeTimer)
    window.noticeTimer = window.setTimeout(() => {
      setNotice('')
    }, 2200)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#101010] text-white">

      {/* CABECERA */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#101010]/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">

          <a
            href="#inicio"
            onClick={closeMenu}
            className="text-2xl font-black tracking-[-.08em]"
          >
            SOLE<span className="text-[#ff3030]">//</span>CLUB
          </a>

          <nav className="hidden items-center gap-9 text-xs font-black uppercase tracking-widest md:flex">
            <a className="nav-link" href="#inicio">Inicio</a>
            <a className="nav-link" href="#coleccion">Colección</a>
            <a className="nav-link" href="#nosotros">Nosotros</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#coleccion"
              className="action-button border border-white/30 text-[10px] font-black tracking-wider transition hover:border-[#ff3030] hover:bg-[#ff3030]"
            >
              CARRITO <span className="ml-1 text-[#ff3030]">{cartCount}</span>
            </a>

            <button
              className="menu-button flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/25 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col border-t border-white/10 px-5 py-3 md:hidden">
            <a onClick={closeMenu} className="border-b border-white/10 py-4 text-sm font-black uppercase" href="#inicio">
              Inicio
            </a>
            <a onClick={closeMenu} className="border-b border-white/10 py-4 text-sm font-black uppercase" href="#coleccion">
              Colección
            </a>
            <a onClick={closeMenu} className="py-4 text-sm font-black uppercase" href="#nosotros">
              Nosotros
            </a>
          </nav>
        )}
      </header>

      {/* PORTADA */}
      <section id="inicio" className="border-b border-white/10">
        <div className="mx-auto grid min-h-[calc(100svh-76px)] max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:gap-16 lg:px-14">

          <div>
            <p className="mb-7 text-[10px] font-black uppercase tracking-[.3em] text-[#ff3030]">
              STREET CULTURE / DROP 001
            </p>

            <h1 className="text-[clamp(4.5rem,10vw,9rem)] font-black uppercase leading-[.78] tracking-[-.09em]">
              DON'T<br />
              FOLLOW<span className="text-[#ff3030]">.</span><br />
              <span className="text-[#ff3030]">LEAD.</span>
            </h1>

            <p className="mt-9 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              No nacimos para seguir tendencias. Nacimos para romperlas.
              Encuentra las zapatillas que hablan por ti.
            </p>

            <a
              href="#coleccion"
              className="action-button mt-8 inline-flex items-center gap-5 bg-[#ff3030] text-xs font-black uppercase tracking-widest transition hover:bg-white hover:text-black"
            >
              VER COLECCIÓN <span className="text-lg">↗</span>
            </a>
          </div>

          <div className="relative">
            <span className="absolute -right-3 -top-3 z-10 flex h-24 w-24 rotate-12 items-center justify-center bg-[#ff3030] text-center text-[10px] font-black leading-tight sm:h-28 sm:w-28">
              NO RULES<br />JUST STYLE
            </span>

            <img
              className="h-[420px] w-full border border-white/10 object-cover sm:h-[540px]"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200"
              alt="Zapatilla deportiva roja"
            />

            <div className="mt-4 flex justify-between text-[9px] font-bold uppercase tracking-[.2em] text-white/40">
              <span>SOLE//CLUB CAMPAIGN</span>
              <span>001 — 026</span>
            </div>
          </div>
        </div>
      </section>

      {/* FRANJA */}
      <div className="border-y border-black bg-[#ff3030] px-4 py-5 text-center text-xl font-black uppercase tracking-widest text-black sm:text-3xl">
        BUILT FOR THE STREETS — MADE TO STAND OUT
      </div>

      {/* CATÁLOGO */}
      <section
        id="coleccion"
        className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-20 sm:px-8 md:py-28 lg:px-14"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[.3em] text-[#ff3030]">
              01 / THE SELECTION
            </p>

            <h2 className="text-5xl font-black uppercase leading-[.85] tracking-[-.07em] sm:text-7xl">
              SHOP THE<br />
              <span className="text-[#ff3030]">DROP.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/50">
            Modelos seleccionados para quienes tienen estilo propio.
            Sin imitaciones. Sin seguir a nadie.
          </p>
        </div>

        {/* FILTROS */}
        <div className="mb-9 flex flex-wrap items-center gap-3 border-b border-white/15 pb-7">

          {['TODAS', 'RUNNING', 'LIFESTYLE'].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`filter-button border text-[10px] font-black tracking-widest transition ${
                category === item
                  ? 'border-[#ff3030] bg-[#ff3030] text-white'
                  : 'border-white/20 text-white/60 hover:border-white hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}

          <span className="ml-auto self-center text-[10px] font-bold tracking-widest text-white/35">
            {visibleProducts.length} MODELOS
          </span>
        </div>

        {/* PRODUCTOS */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

          {visibleProducts.map((product, index) => (
            <article className="product-card" key={product.id}>

              <div className="relative overflow-hidden border border-white/10 bg-[#202020]">

                <span className="absolute left-4 top-4 z-10 bg-[#ff3030] px-3 py-2 text-[9px] font-black tracking-wider">
                  {product.tag}
                </span>

                <img
                  className="product-image h-[310px] w-full object-cover sm:h-[350px]"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <span className="absolute bottom-4 right-4 text-xs font-black text-white/70">
                  0{index + 1}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 border-b border-white/20 py-5">

                <div>
                  <p className="mb-2 text-[9px] font-black tracking-[.2em] text-[#ff3030]">
                    {product.category}
                  </p>

                  <h3 className="text-lg font-black uppercase">
                    {product.name}
                  </h3>
                </div>

                <p className="whitespace-nowrap text-sm font-black">
                  {formatPrice(product.price)}
                </p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="action-button mt-4 flex w-full items-center justify-between bg-white/5 text-[10px] font-black tracking-widest transition hover:bg-[#ff3030]"
              >
                AÑADIR AL CARRITO <span className="text-lg">+</span>
              </button>

            </article>
          ))}
        </div>
      </section>

      {/* MARCA */}
      <section
        id="nosotros"
        className="scroll-mt-20 border-y border-white/10 bg-[#1b1b1b] px-5 py-24 sm:px-8 md:py-32 lg:px-14"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-2 md:gap-20">

          <div>
            <p className="mb-6 text-[10px] font-black tracking-[.3em] text-[#ff3030]">
              02 / OUR ATTITUDE
            </p>

            <h2 className="text-6xl font-black uppercase leading-[.82] tracking-[-.08em] sm:text-8xl">
              WALK<br />
              YOUR<br />
              <span className="text-[#ff3030]">OWN</span><br />
              PATH.
            </h2>
          </div>

          <div className="flex flex-col justify-center">

            <h3 className="max-w-lg text-2xl font-black uppercase leading-tight sm:text-3xl">
              LA CALLE NO SIGUE REGLAS. TU ESTILO TAMPOCO.
            </h3>

            <p className="mt-7 max-w-lg text-sm leading-8 text-white/50">
              SOLE//CLUB nace de la cultura sneaker y el streetwear.
              Creemos en la expresión personal, la autenticidad y en vestir
              sin pedir permiso. No se trata solo de caminar, sino de dejar huella.
            </p>

            <a
              href="#coleccion"
              className="action-button mt-9 w-fit border border-[#ff3030] text-[10px] font-black tracking-widest transition hover:bg-[#ff3030]"
            >
              DESCUBRE LA COLECCIÓN ↗
            </a>
          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 sm:px-8 lg:px-14">

        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-10 md:flex-row md:items-end">

          <div>
            <a href="#inicio" className="text-4xl font-black tracking-[-.08em]">
              SOLE<span className="text-[#ff3030]">//</span>CLUB
            </a>

            <p className="mt-3 text-[9px] font-bold tracking-[.25em] text-white/35">
              BUILT FOR THE STREETS.
            </p>
          </div>

          <nav className="flex flex-wrap gap-7 text-[10px] font-black uppercase tracking-widest">
            <a className="nav-link" href="#inicio">Inicio</a>
            <a className="nav-link" href="#coleccion">Colección</a>
            <a className="nav-link" href="#nosotros">Nosotros</a>
          </nav>
        </div>

        <p className="pt-6 text-[9px] font-bold tracking-widest text-white/30">
          © 2026 SOLE//CLUB — TODOS LOS DERECHOS RESERVADOS
        </p>
      </footer>

      {/* AVISO DEL CARRITO */}
      {notice && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 bg-[#ff3030] px-6 py-4 text-center text-[10px] font-black tracking-widest shadow-xl"
        >
          ✓ {notice} · TOTAL: {cartCount}
        </div>
      )}

    </main>
  )
}

export default Home
