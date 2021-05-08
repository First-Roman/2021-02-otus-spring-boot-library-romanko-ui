export const Inpt = ({className, name, placeholder, defaultValue, change, click}) => {
    return <input name={name} placeholder={placeholder} value={defaultValue} onClick={click} onChange={change}
                  className={className}/>
};