export default function FormAddArticles() {
  return (
    <>
      <form className="form__addArticle">
        <input
          className="form__inputArea"
          type="text"
          placeholder="Inserisci titolo nuovo articolo"
        />
        <button className="form__submitBtn" type="submit">
          Aggiungi articolo
        </button>
      </form>
    </>
  );
}
