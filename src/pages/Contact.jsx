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
            <Header menu={menuContact}/>
            

        </div>
    )
}
export default Contact