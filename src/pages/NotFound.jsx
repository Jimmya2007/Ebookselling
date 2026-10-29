import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h1>404: Page not found</h1>
      <Link to="/" className="btn">
        Go home
      </Link>
    </section>
  )
}