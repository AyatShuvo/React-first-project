import Header from "../components/Header"

function Product() {
    const menuProduct = [
        {
            name : "img",
            path : "/"

        },
        {
            name : "card",
            path : "/"
        },
        {
            name : "title",
            path : "/"
        }
    ] 
    return(
        <div>
            <h1 className="text-5xl font-bold text-center text-red-500">Product Page</h1>
            <Header menu={menuProduct}/>
            

        </div>
    )
}
export default Product