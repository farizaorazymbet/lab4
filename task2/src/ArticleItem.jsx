import { useState } from "react";

function ArticleItem({ article, onClickRemove, onClickToggle }) {
    const [isOpened, setIsOpened] = useState(article.display === "block");

    const handleToggle = () => {
        onClickToggle(article.id);
        setIsOpened((prev) => !prev);
    };

    return (
        <li>
            <a href="#!" onClick={handleToggle}>{article.title}</a>
            <button onClick={() => onClickRemove(article.id)}>×</button>
            <p style={{ display: isOpened ? "block" : "none" }}>{article.summary}</p>
        </li>
    );
}

export default ArticleItem;