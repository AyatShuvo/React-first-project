import Header from "../components/Header"

function About() {
    const menu = [
        {
            name : "Home",
            path : "/"

        },
        {
            name : "product",
            path : "/product"
        },
        {
            name : "Contact",
            path : "/contact"
        }
    ] 
    return(
        <div>
            <Header menu={menu}/>
            
            <h1 className="text-2xl text-center">About Page</h1>
        </div>
    )
}
export default About