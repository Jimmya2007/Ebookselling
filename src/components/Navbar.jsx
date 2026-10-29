import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-mark" aria-hidden="true">f.</span>
          Fable &amp; Folio
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>
            Discover
          </NavLink>
          <NavLink to="/#authors">Authors</NavLink>
          <NavLink to="/#genres">Genres</NavLink>
          <NavLink to="/products">Books</NavLink>
        </nav>
        <form action="/products" method="get" className="nav-search" role="search">
          <button type="submit" aria-label="Search books">⌕</button>
          <input type="search" name="search" placeholder="Search books..." aria-label="Search books" />
        </form>
        <Link to="/cart" className="nav-cart">My bag</Link>
      </div>
    </header>
  )
}