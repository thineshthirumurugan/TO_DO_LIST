const Header=(props)=>{
    
    return (
        <header>
            <h1>
                {props.title}
            </h1>
        </header>
    )
}
//Suppose props la irunthu entha value varalana 
Header.defaultProps ={
    title:"To do List"
}
export default Header