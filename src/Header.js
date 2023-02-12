import Logo from "./meme2-removebg-preview.png"
const Header = () => {
    return(
        <nav>
           <div className="meme--header">
                <img src={Logo} alt=""/>
                <h1>MemeGenerator</h1>
           </div>
           <div className="meme--project">
                <h3>React-Project</h3>
           </div> 
        </nav>
    )
}
export default Header;