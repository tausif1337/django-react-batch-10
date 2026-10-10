function Button({text="SHOPNIL", onClick}){

    return(
        <button onClick={onClick}>{text}</button>
    )
}
export default Button;