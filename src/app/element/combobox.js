import {Inpt} from "./input";

export const Combobox = ({option, handler, name, placeholder, defaultValue, change, click}) => {
    return change ?
        <select onClick={handler} name={name}>{option.map((o, k) => <option key={k}>{o}</option>)}</select> :
        <Inpt placeholder={placeholder} name={name} click={click} change={handler} defaultValue={defaultValue}/>
};