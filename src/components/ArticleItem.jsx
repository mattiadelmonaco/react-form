export default function ArticleItem({ id, title, url }) {
  return (
    <li key={id} className="article">
      <a href={url} className="article__title">
        <h3>{title}</h3>
      </a>
      <button className="article__btn--delete">
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}
