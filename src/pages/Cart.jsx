import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <section>
      <h1>Your cart</h1>
      <p>Your cart is empty.</p>
      <Link to="/products" className="btn">
        Continue shopping
      </Link>
    </section>
  )
}