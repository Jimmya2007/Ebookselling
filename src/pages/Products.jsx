import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('search')?.trim() ?? ''
	const visibleProducts = products.filter((product) =>
		`${product.title} ${product.author} ${product.category}`.toLowerCase().includes(query.toLowerCase()),
	)

	return (
		<section>
			<span className="eyebrow">A good place to begin</span>
			<h1 className="catalog-heading">{query ? `Results for “${query}”` : 'The bookshop'}</h1>
			<p className="catalog-subtitle">{visibleProducts.length} thoughtfully chosen reads</p>
			<div className="grid">
				{visibleProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			{visibleProducts.length === 0 && <p>No books match that search. Try an author, title, or genre.</p>}
		</section>
	)
}
