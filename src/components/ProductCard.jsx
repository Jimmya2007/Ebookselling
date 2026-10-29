import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="card">
      <div className="card-cover" style={{ background: product.color }}>
        <span className="card-cover-kicker">FABLE &amp; FOLIO</span>
        <strong>{product.title}</strong>
        <i>{product.author}</i>
      </div>
      <div className="card-body">
        <span className="tag">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="card-author">{product.author}</p>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}