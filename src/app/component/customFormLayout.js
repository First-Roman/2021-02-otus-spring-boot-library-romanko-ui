import {Component} from "react";
import {Button} from "../element/button";
import {Inpt} from "../element/input";
import {Combobox} from "../element/combobox";
import "../../style/clear.css";
import "../../style/body.css";

class CustomFormLayout extends Component {

    constructor(props) {
        super(props);
        this.clsHandler = clsHandler.bind(this);
        this.sndHandler = sndHandler.bind(this);
        this.setData = setData.bind(this);
        this.clickLoad = clickLoad.bind(this);
        this.formHandler = formHandler.bind(this);
        this.formRef = React.createRef();
    }

    render() {
        return this.props.visible ? <div className={this.props.className}>
            <h2>{this.props.formTitle}</h2>
            <form onSubmit={this.formHandler} ref={this.formRef}>
                <ul>
                    {this.props.data.map((d, k) => <li key={k}>{d.type === "input" ?
                        <Inpt key={"inpt" + k} name={d.name} change={this.setData} defaultValue={d.defaultValue}
                              placeholder={d.placeholder}/> :
                        <Combobox key={"cmb" + k} handler={this.setData} option={d.option} name={d.name}
                                  placeholder={d.placeholder} defaultValue={d.defaultValue} click={this.clickLoad}
                                  change={d.change}/>}</li>)}
                </ul>
                <Button handler={this.clsHandler} name={"close"} title={this.props.clsBtnTitle}/>
                <Button handler={this.sndHandler} name={"save"} title={this.props.sndBtnTitle}/>
            </form>
        </div> : null
    }
}

function setData(e) {
    let elem = e.target;
    let value = elem.value;
    let name = elem.name;
    this.props.setValue({name, value});
}

function clsHandler() {
    this.props.close();
}

function sndHandler() {
    let formData = new FormData(this.formRef.current);
    let boolean = (this.props.original !== undefined);
    if (boolean && this.props.original.hasOwnProperty("id")) {
        formData.append("id", this.props.original["id"]);
    }
    this.props.data.forEach(itm => {
        if (itm.type === "select" && itm.change && itm.hasOwnProperty("addParam")) {
            let selectValue = formData.get(itm.name);
            let find = itm.original.filter(i => i.text === selectValue)[0];
            formData.append(itm.addParam, find.id);
        } else if (itm.type === "select" && !itm.change && itm.hasOwnProperty("addParam") && boolean && this.props.original.hasOwnProperty(itm.addParam)) {
            formData.append(itm.addParam, this.props.original[itm.addParam]);
        }
    });

    this.props.sendForm(formData, this.props.type);
}

function clickLoad(e) {
    let t = e.target;
    this.props.onLoadDataToSelect(t.name);
}

function formHandler(e) {
    e.preventDefault();
}

export default CustomFormLayout;