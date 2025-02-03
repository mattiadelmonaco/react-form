import articlesData from "../data/articlesData";
import ArticleItem from "./ArticleItem";

export default function Main() {
  return (
    <main>
      <section className="container">
        <ul className="article-list">
          {articlesData.map((article) => {
            return (
              <ArticleItem
                key={article.id}
                title={article.title}
                url={article.url}
              />
            );
          })}
        </ul>
      </section>
      <hr />
    </main>
  );
}
