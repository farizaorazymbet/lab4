import { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

function ArticleManager() {
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    const onClickAdd = () => {
        const newArticle = { id: Date.now(), title, summary, display: "none" };
        setArticles((prevArticles) => [...prevArticles, newArticle]);
        setTitle("");
        setSummary("");
    };

    const onClickRemove = (id) => {
        setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
    };

    const onClickToggle = (id) => {
        setArticles((prevArticles) =>
            prevArticles.map((article) =>
                article.id === id ? { ...article, display: article.display === "none" ? "block" : "none" } : article
            )
        );
    };

    return (
        <div>
            <h1>Articles</h1>
            <AddArticle
                name="Add New Article"
                title={title}
                summary={summary}
                onChangeTitle={(e) => setTitle(e.target.value)}
                onChangeSummary={(e) => setSummary(e.target.value)}
                onClickAdd={onClickAdd}
            />
            <ArticleList articles={articles} onClickRemove={onClickRemove} onClickToggle={onClickToggle} />
        </div>
    );
}

export default ArticleManager;