import {Component} from "react";
import {Button} from "../element/button";


class CustomGrid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={this.props.className}>
            <h2>{this.props.title}</h2>
            <Button title={this.props.buttonAddTitle}
                    handler={this.props.addHandler}/>
            <div className="item-wrapper">
                {this.props.data.map((d, k) => <div className="item" key={k}><span>{d.text}</span> <Button key={"btn-dlt" + k}
                                                                            handler={this.props.editHandler}
                                                                            name={d.id}
                                                                            title={this.props.editButtonTitle}/><Button
                    key={"btn-rmv" + k} handler={this.props.removeHandler} name={d.id}
                    title={this.props.removeButtonTitle}/></div>)}
            </div>
        </div>
    }

    componentDidMount() {
        this.props.onloadData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.reload !== this.props.reload) {
            this.props.onloadData();
        }
    }
}

export default CustomGrid;