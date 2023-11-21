import "./styles/QuoteBox.css"

const QuoteCard = ({quote, handleChangeQuote}) => {
  const {phrase, author} = quote
  return( 
  <article className="quoteBox">
    <h1 className="quoteBox__title">FORTUNE COOKIES</h1>
    <button className="quoteBox__button" onClick={handleChangeQuote}>Test my luck</button>
    <div className="quoteBox__quote">
      <p>{phrase}</p>
    </div>
    <span className="quoteBox__author">Source: {author}</span>
  </article>
)};
export default QuoteCard;
