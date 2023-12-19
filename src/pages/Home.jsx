import Header from "../components/Header"

function Home() {
    const menuHome = [
        {
            name : "About",
            path : "/about"
        },
        {
            name : "Contact",
            path : "/contact"
        }
    ] 
    return (
        <main>
            <h1 className="text-5xl font-bold text-center text-red-500">Home Page</h1>
                <Header menu ={menuHome}/>
            
            <div></div>
        </main>
    )
}

export default Home