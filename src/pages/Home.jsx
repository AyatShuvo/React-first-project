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
                <Header menu ={menuHome}/>
            <h1 className="text-2xl text-center text-gray-900 dark:text-white">Home Page</h1>
            <div></div>
        </main>
    )
}

export default Home