import articlesData from "../data/articlesData";
import ArticleItem from "./ArticleItem";
import FormAddArticles from "./FormAddArticle";

export default function Main() {
  return (
    <main>
      <section>
        <div className="container">
          <ul className="articles-list">
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
        </div>
      </section>
      <hr />
      <div className="container">
        <FormAddArticles />
      </div>
    </main>
  );
}
