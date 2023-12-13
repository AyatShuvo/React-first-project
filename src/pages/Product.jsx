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
            <Header menu={menuProduct}/>
            

        </div>
    )
}
export default Product