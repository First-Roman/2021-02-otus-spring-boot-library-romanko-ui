import {Provider} from "react-redux";
import {Component} from "react";
import {store} from "../store";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {BrowserBookContainer} from "../container/browserBookContainer";
import {AuthorCustomGridContainer} from "../container/authorCustomGridContainer";
import {GenreCustomGridContainer} from "../container/genreCustomGridContainer";
import {CustomFormLayoutContainer} from "../container/customFormLayoutContainer";

class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Provider store={store}>
            <Router>
                <div>
                    <CustomFormLayoutContainer/>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Книги</Link>
                            </li>
                            <li>
                                <Link to="/author">Авторы</Link>
                            </li>
                            <li>
                                <Link to="/genre">Жанры</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <BrowserBookContainer/>
                        </Route>
                        <Route exact path="/author">
                            <AuthorCustomGridContainer/>
                        </Route>
                        <Route exact path="/genre">
                            <GenreCustomGridContainer/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>)
    }
}

export default MainLayout;