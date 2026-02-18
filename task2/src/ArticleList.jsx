import ArticleItem from "./ArticleItem";

function ArticleList({ articles, onClickRemove, onClickToggle }) {
    return (
        <ul>
            {articles.map((article) => (
                <ArticleItem
                    key={article.id}
                    article={article}
                    onClickRemove={onClickRemove}
                    onClickToggle={onClickToggle}
                />
            ))}
        </ul>
    );
}

export default ArticleList;