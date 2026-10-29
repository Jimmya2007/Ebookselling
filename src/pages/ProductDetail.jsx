import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <section>
        <h1>Product not found</h1>
        <Link to="/products" className="btn">
          Back to products
        </Link>
      </section>
    )
  }

  return (
    <section className="detail">
      <div className="detail-cover" style={{ background: product.color }}>
        <span>FABLE &amp; FOLIO</span>
        <strong>{product.title}</strong>
        <i>{product.author}</i>
      </div>
      <div className="detail-info">
        <span className="tag">{product.category}</span>
        <h1>{product.title}</h1>
        <p className="detail-author">by {product.author}</p>
        <p className="price big">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button className="btn" type="button">
          Add to cart
        </button>
        <p>
          <Link to="/products">← Back to products</Link>
        </p>
      </div>
    </section>
  )
}