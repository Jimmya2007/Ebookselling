import { Link } from 'react-router-dom'
import { products } from '../data/products'

const authors = [
  { title: 'Voices that stay with you', kicker: 'Meet the storytellers', author: 'Toni Morrison', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85', tone: 'sage' },
  { title: 'A world of her own', kicker: 'Women who write', author: 'Zora Neale Hurston', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85', tone: 'peach' },
  { title: 'Classics, reimagined', kicker: 'The greats', author: 'James Baldwin', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85', tone: 'lilac' },
]

const audiobooks = [
  { title: 'The Secret Garden', author: 'Frances Hodgson Burnett', length: '8 hr 42 min', color: 'mint', mark: 'G' },
  { title: 'Little Women', author: 'Louisa May Alcott', length: '19 hr 16 min', color: 'rose', mark: 'LW' },
  { title: 'The Wind in the Willows', author: 'Kenneth Grahame', length: '6 hr 18 min', color: 'blue', mark: 'W' },
  { title: 'A Room of One’s Own', author: 'Virginia Woolf', length: '4 hr 52 min', color: 'gold', mark: 'R' },
]

const genres = [
  { name: 'Mystery', count: '1,284 books', color: 'genre-mystery', mark: '01' },
  { name: 'Romance', count: '942 books', color: 'genre-romance', mark: '02' },
  { name: 'Literary', count: '2,106 books', color: 'genre-literary', mark: '03' },
  { name: 'Fantasy', count: '758 books', color: 'genre-fantasy', mark: '04' },
  { name: 'History', count: '616 books', color: 'genre-history', mark: '05' },
  { name: 'For young readers', count: '1,032 books', color: 'genre-young', mark: '06' },
]

const readingLists = [
  { title: 'A softer kind of Sunday', books: '18 books', votes: '2.4k saves', covers: ['rose', 'blue', 'gold', 'mint'] },
  { title: 'Small books, big feelings', books: '24 books', votes: '1.8k saves', covers: ['mint', 'lilac', 'rose', 'blue'] },
  { title: 'After dark, page one', books: '32 books', votes: '986 saves', covers: ['gold', 'blue', 'lilac', 'rose'] },
]

function SectionHeading({ eyebrow, title, action = 'Browse all' }) {
  return (
    <div className="section-heading">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      <Link to="/products" className="text-link">{action} <span aria-hidden="true">↗</span></Link>
    </div>
  )
}

export default function Home() {
  const featured = products.slice(0, 5)

  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">A little more wonder, every day</span>
          <h1 id="hero-title">Find your next <em>somewhere.</em></h1>
          <p>For the stories that take you places, and the pages that feel like home.</p>
          <Link to="/products" className="btn">Explore the shelves <span aria-hidden="true">↗</span></Link>
          <div className="hero-note"><span className="note-dot" /> Thoughtfully picked, always worth the read</div>
        </div>
        <div className="hero-art" role="img" aria-label="A sunlit reading nook surrounded by books">
          <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=90" alt="Open book resting in a warm, sunlit reading space" />
          <div className="hero-stamp"><span>THE</span><strong>Good<br />Read</strong><span>STARTS HERE</span></div>
          <span className="hero-caption">A world between the covers</span>
        </div>
      </section>

      <section className="home-section author-section" id="authors">
        <SectionHeading eyebrow="Good company" title="Authors to know" action="Meet more writers" />
        <div className="author-grid">
          {authors.map((author) => (
            <Link to="/products" className={`author-tile ${author.tone}`} key={author.author}>
              <div className="author-copy"><span>{author.kicker}</span><h3>{author.title}</h3><small>{author.author}</small></div>
              <img src={author.image} alt={author.author} loading="lazy" />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section audiobook-section" id="audiobooks">
        <SectionHeading eyebrow="Listen a little closer" title="Audio for the in-between" action="Browse audio" />
        <div className="audio-grid">
          {audiobooks.map((book) => (
            <Link to="/products" className="audio-item" key={book.title}>
              <div className={`audio-cover cover-${book.color}`}><span>{book.mark}</span><i aria-hidden="true">{book.title}</i></div>
              <div className="audio-info"><h3>{book.title}</h3><p>{book.author}</p><small>{book.length}</small></div>
              <span className="play-button" aria-label={`Listen to ${book.title}`}>▶</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section genre-section" id="genres">
        <SectionHeading eyebrow="Follow your curiosity" title="Pick a feeling" action="A shelf for every day" />
        <div className="genre-grid">
          {genres.map((genre) => (
            <Link to="/products" className={`genre-tile ${genre.color}`} key={genre.name}>
              <span className="genre-mark">{genre.mark}</span><span className="genre-title">{genre.name}</span><small>{genre.count}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section showcase-section" id="books">
        <SectionHeading eyebrow="The books we keep thinking about" title="On our bookshelves" action="See all books" />
        <div className="book-grid">
          {featured.map((product, index) => (
            <Link to={`/products/${product.slug}`} className={`book-item book-tone-${index % 5}`} key={product.id}>
              <div className="book-cover"><span className="book-cover-kicker">A GOOD READ</span><strong>{product.title}</strong><i>{product.category}</i><span className="cover-ornament" /></div>
              <h3>{product.title}</h3><p>{product.category}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section list-section" id="lists">
        <SectionHeading eyebrow="Made by readers, for readers" title="Lists worth saving" action="Explore all lists" />
        <div className="list-grid">
          {readingLists.map((list) => (
            <Link to="/products" className="reading-list" key={list.title}>
              <div className="list-covers">{list.covers.map((cover, index) => <span className={`mini-cover cover-${cover}`} key={`${cover}-${index}`} />)}</div>
              <h3>{list.title}</h3><p>{list.books}<span>·</span>{list.votes}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}