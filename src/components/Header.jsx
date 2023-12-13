import {Link} from "react-router-dom"

function Header({menu}) {
  console.log(menu);
  
  return (
    <div>
        <h1 className="text-5xl font-extrabold text-center">Header</h1>
        <ul className="text-center text-indigo-900 font-bold ">
            { menu ? 
              menu.map((item, i)=> (
                <li key={i} className="hover:text-red-900 hover:text-3xl"><Link to={item.path}>{item.name}</Link></li>
              )) : "home"
            }
        </ul>
    </div>
  );
}

export default Header;
