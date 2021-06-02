import "../../style/botton.css"

export const Button = ({title, name, handler}) => {
    let className = "classic-button-library";
    return <div className={className} onClick={() => handler(name)}><span>{title}</span></div>;
};