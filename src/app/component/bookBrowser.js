import {Component} from "react";
import {Book} from "../element/book";
import {Button} from "../element/button";

class BookBrowser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={this.props.className}>
            <h2>{this.props.title}</h2>
            <Button title={this.props.buttonAddTitle}
                    handler={this.props.addHandler}/>
            {this.props.books.map((book, key) => <div className={this.props.classNameBookWrapper} key={"wrap" + key}>
                <Book
                    title={book.title}
                    author={book.author}
                    genre={book.genre} key={key}/>
                <Button title={this.props.buttonChangeTitle} name={book.id}
                        handler={this.props.editHandler} key={"btn-chg" + key}/><Button
                title={this.props.buttonRemoveTitle} name={book.id}
                handler={this.props.removeHandler} key={"btn-rmv" + key}/></div>)}
        </div>
    }

    componentDidMount() {
        this.props.onloadBooks();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.reloadBook !== this.props.reloadBook) {
            this.props.onloadBooks();
        }
    }
}

export default BookBrowser;