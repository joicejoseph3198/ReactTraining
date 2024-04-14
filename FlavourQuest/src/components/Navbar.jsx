import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-row flex-wrap justify-between border-b-2 pb-2 border-black text-md">
        <div className="text-xl">
          <div className="font-bold"> FlavourQuest &trade; </div>
          <p>/ फ्लेवर क्वेस्ट /</p>
        </div>
        <nav>
          <ul className="flex flex-wrap flex-row gap-2 content-center color-black">
            <li><Link to="">Home</Link> </li>
            <li><Link to="search">Find Recipes</Link></li>
            <li><Link to="favourites">Favourites </Link></li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Navbar;