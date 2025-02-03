import { useState } from "react";
import articlesData from "../data/articlesData";

export default function FormAddArticles() {
  const [articleTitle, setArticleTitle] = useState("");
  const [articlesData2, setArticleData] = useState(articlesData[0].title);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(articlesData2);

    // setArticleData([...articlesData2, articleTitle]);
  };

  return (
    <>
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
    </>
  );
}
