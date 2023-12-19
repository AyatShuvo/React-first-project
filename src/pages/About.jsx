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
            <h1 className="text-5xl font-bold text-center text-red-500">About Page</h1>
            <Header menu={menu}/>
            
            
        </div>
    )
}
export default About