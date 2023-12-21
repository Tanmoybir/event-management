


const Banner = () => {
    return (
        <div className="px-5">
            <div className="bg-img4 hero min-h-screen w-full bg-cover relative">
                <div className="hero-content text-center">
                    <div data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500" 
                        className="max-w-md">
                        <p className="mb-5 text-2xl text-slate-600 font-medium">We are the Event Management Specialists</p>
                        <h1 className="mb-5 text-5xl text-slate-600 font-bold">CELEBRATE YOUR EVENTS THAT <br /> LASTS LONGER</h1>

                        <div className="w-36 md:w-52 lg:w-56 h-24 border-r-8 border-red-400 mt-4"></div>
                        <button className="btn mt-3 bg-red-400 hover:bg-blue-400 hover:ring-blue-400">Our Features</button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Banner;