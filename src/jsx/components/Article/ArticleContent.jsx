import PropTypes from 'prop-types';

/**
 * @param {ArticleContentPropTypes} props
 */
export default function ArticleContent(props) {
  let authorAnchors = props.authors.map((author, i) =>
    `<a href="https://TODO.com">${author}</a>`
  ).join(' & ');
  let authorContainer = <span dangerouslySetInnerHTML={{__html: authorAnchors}}></span>

  return (
    <div id="article-container">
      <h1>{props.title}</h1>
        <p className="byline">By {authorContainer} </p>
        <div dangerouslySetInnerHTML={{__html: props.content || ''}} />
    </div>
  )
}

ArticleContent.propTypes = {
  title: PropTypes.string.isRequired
}

/**
 * @typedef ArticleContentPropTypes
 * @prop {string} title
 * @prop {string} content
 * @prop {string[]} authors
 */
