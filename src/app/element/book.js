export const Book = ({title, author, genre}) => {
    let className = "classic-book-library";
    return <div className={className}>
            <span>{title}</span>
            <span>{author}</span>
            <span>{genre}</span>
    </div>
};