import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-row flex-wrap justify-between border-b-2 pb-2 border-black text-sm">
        <div>
          <div className="md:text-2xl"> FlavorQuest </div>
        </div>
        <nav>
          <ul className="flex flex-wrap flex-row gap-4 content-center text-xs md:text-xl color-black">
            <li><Link to="">Home</Link> </li>
            <li><Link to="search">Find Recipes</Link></li>
            <li>Curate Your Meal Plan </li>
            <li>Favourites </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Navbar;