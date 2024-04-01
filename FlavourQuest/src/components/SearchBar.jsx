
const SearchBar = () =>{
    return(
        <div className="mt-10 mx-10 max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex">
            <input type="text" placeholder="Search for recipes" 
            className="bg-transparent w-full focus:outline-none pr-4  text-sm lg:text-xl font-semibold border-0 " 
           > </input>
            <button className="flex flex-row items-center justify-center px-4 rounded-full text-sm bg-black text-white border-transparent py-1.5 h-[38px] -mr-3">
                Search
                </button>
            </div>
    )
}
export default SearchBar;