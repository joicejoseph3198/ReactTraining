import loadingImg from "../assets/images/LoadingImg.gif"

const Loader = () => {
    return(
        <div className="mt-10 text-bold text-xs  bg-gray-50">
            <div className="flex flex-col items-center justify-center sm:flex-row">
                <p className="pt-10 w-2/4 md:w-1/4">Sit tight! We are preparing an amazing experience just for you. Our servers are working hard to fetch the latest content. In the meantime, grab a cup of coffee and relax. We'll be with you shortly.</p>
                <img className="w-1/4 h-auto object-contain" src= {loadingImg} alt="Loading.." />
            </div>
        </div>
    )
}

export default Loader;