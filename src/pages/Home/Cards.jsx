

const Cards = () => {
    return (
        <div className="px-5 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-emerald-400 py-16 rounded-tl-2xl rounded-br-2xl text-center">
                <h3 className="text-white text-3xl font-medium ml-8 px-3">Get in Touch With Us!</h3>
                <p className="text-white text-xl font-medium ml-8 px-5 mt-5">Ask questions, schedule a meeting or request a proposal. Let’s Get Started</p>
                <input className="h-16 my-4" type="text" />
            </div>
            <div className="bg-blue-500 py-16 rounded-tl-2xl rounded-br-2xl text-center">
                <h3 className="text-white text-3xl font-medium ml-10 px-3">Do You want To Work With Us!</h3>
                <p className="text-white text-xl font-medium ml-10 px-5 mt-5">If you are talented enough than you can join our team and have a bright future</p>
                <input className="h-16 my-4" type="text" />
            </div>
            </div>
        </div>
    );
};

export default Cards;