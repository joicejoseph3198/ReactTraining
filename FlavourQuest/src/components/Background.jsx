const Background = () => {
    return (
        <div className="fixed w-full h-screen z-[2]">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-bold text-[10vw] tracking-tighter text-transparent/10">Favourites</h1>
            <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-bold text-sm tracking-tighter text-transparent/70">This section is your personal culinary treasure trove, where you can revisit and rediscover the dishes that have won your heart. 
                Whether it's a comforting family classic, a decadent dessert, or an adventurous culinary experiment, your favorite recipes are here
                to delight your taste buds time and time again.
            </p>

        </div>
    )
}
export default Background;