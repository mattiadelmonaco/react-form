import { useState } from "react";
import articles from "../data/articlesData";
import ArticleItem from "./ArticleItem";

export default function Main() {
  const [articleTitle, setArticleTitle] = useState("");

  const [articlesData, setArticleData] = useState(articles);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArticleData([
      ...articlesData,
      {
        id: articlesData.length + 1,
        title: articleTitle,
        url: "#",
      },
    ]);
  };

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
      <section>
        <div className="container">
          <form onSubmit={handleSubmit} className="form__addArticle">
            <input
              className="form__inputArea"
              type="text"
              placeholder="Inserisci titolo nuovo articolo"
              value={articleTitle}
              onChange={(e) => {
                setArticleTitle(e.target.value);
              }}
            />
            <button className="form__submitBtn" type="submit">
              Aggiungi articolo
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
