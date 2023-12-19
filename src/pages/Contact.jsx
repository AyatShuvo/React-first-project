import Header from "../components/Header"

function Contact() {
    const menuContact = [
        {
            name : "Home",
            path : "/"

        },
        {
            name : "About",
            path : "/about"
        },
        {
            name : "product",
            path : "/product"
        },
    ] 
    return(
        <div>
            <h1 className="text-5xl font-bold text-center text-red-500">Contact Page</h1>
            <Header menu={menuContact}/>
            

        </div>
    )
}
export default Contact