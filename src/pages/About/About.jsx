

const About = () => {
    return (
        <div className="px-3 max-w-screen-xl mx-auto">
            <div className="text-center my-8 px-5">
                <h2 className="text-slate-400 font-bold text-3xl">We <span className="text-red-400">Create Events</span> That Lasts</h2>
                <p className="text-slate-400 text-lg font-medium mt-3">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer full range of Events Management Services that scale to your needs & budget.</p>
            </div>
            {/* Our vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="">
                    <img className="w-full h-52" src="https://i.ibb.co/71RZH9L/Our-Vision-2.jpg" alt="" />
                    <h2 className="text-center text-xl font-medium my-3">Our Vision</h2>
                    <p className="text-center text-lg px-3">Aorem ipsum dolor sit amet consectetur elit sed tempor incididunt ut labore etua dolore mag aliqua minim veniam quis nostrud exercitation</p>
                </div>
                {/* Our Approach */}
                <div className="">
                    <img className="w-full h-52" src="https://i.ibb.co/2q9SZgS/Approach-1.jpg" alt="" />
                    <h2 className="text-center text-xl font-medium my-3">Our Approach</h2>
                    <p className="text-center text-lg px-3">Aorem ipsum dolor sit amet consectetur elit sed tempor incididunt ut labore etua dolore mag aliqua minim veniam quis nostrud exercitation</p>
                </div>
                {/* Our Goals */}
                <div className="">
                    <img className="w-full h-52" src="https://i.ibb.co/yfRVgPW/Our-Goals.jpg" alt="" />
                    <h2 className="text-center text-xl font-medium my-3">Our Goals</h2>
                    <p className="text-center text-lg px-3">Aorem ipsum dolor sit amet consectetur elit sed tempor incididunt ut labore etua dolore mag aliqua minim veniam quis nostrud exercitation</p>
                </div>
            </div>
            {/* Why choose us */}
            <div className="flex flex-col-reverse lg:flex-row my-10 px-3 gap-3">
                <div className="flex-1">
                    <h2 className="text-2xl font-medium px-2 my-3">Why Choose <span className="text-red-400">Events</span></h2>
                    <p className="text-xl px-2">Corem ipsum dolor sit amet elit sed do eiusmod tempor incididunt labore.</p>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <img src="https://i.ibb.co/YB8MCfg/The-Events-Specialists.png" alt="" />
                        <div className="">
                            <h3 className="text-lg font-medium mb-2">The Events Specialists</h3>
                            <p>Sit amet consectetur elit sed lusm tempor incidant temdore labore dolore lorem ipsum consectetur adipisicing elit sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center my-3">
                        <img src="https://i.ibb.co/8B1tX9R/Dedicated-Venues-Arrangements.png" alt="" />
                        <div className="">
                            <h3 className="text-lg font-medium mb-2">The Events Specialists</h3>
                            <p>Sit amet consectetur elit sed lusm tempor incidant temdore labore dolore lorem ipsum consectetur adipisicing elit sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <img src="https://i.ibb.co/wrKHtQF/All-Types-of-Events.png" alt="" />
                        <div className="">
                            <h3 className="text-lg font-medium mb-2">The Events Specialists</h3>
                            <p>Sit amet consectetur elit sed lusm tempor incidant temdore labore dolore lorem ipsum consectetur adipisicing elit sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="w-full h-full" src="https://i.ibb.co/x17kbRb/Events-5.jpg" alt="" />
                </div>
            </div>
            {/* Team members */}
            <div className="text-center my-10">
                <h2 className="text-3xl font-bold text-slate-400"><span className="text-red-400">Our</span> Team Members</h2>
                <p className="text-lg my-5 font-medium">We make your events smart & impactful by personalised event management services</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* One */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                   <img src="https://i.ibb.co/ZNq54xN/Ava-Taylor.jpg" alt="" />
                    <div className="text-start">
                        <h2 className="text-xl font-medium ">Ava Taylor</h2>
                        <p className=" font-medium my-4">Supervisor</p>
                        <p>Eorem ipsum dolor sit ame adipisicn elit sed do eiusmod tempor incidida labore dolor magna</p>
                    </div>
                </div>
                {/* Two */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <img src="https://i.ibb.co/FmpQxW4/Kethy-Hilton.jpg" alt="" />
                    <div className="text-start">
                        <h2 className="text-xl font-medium ">Kethy Hilton</h2>
                        <p className=" font-medium my-4">Events Manager</p>
                        <p>Eorem ipsum dolor sit ame adipisicn elit sed do eiusmod tempor incidida labore dolor magna</p>
                    </div>
                </div>
                {/* Three */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <img src="https://i.ibb.co/NZk42rh/Charles-Hasman.jpg" alt="" />
                    <div className="text-start">
                        <h2 className="text-xl font-medium ">Charles Hasman</h2>
                        <p className=" font-medium my-4">Founder & Director</p>
                        <p>Eorem ipsum dolor sit ame adipisicn elit sed do eiusmod tempor incidida labore dolor magna</p>
                    </div>
                </div>
                {/* Four */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <img src="https://i.ibb.co/gZZGZsb/Anna-Sydney.jpg" alt="" />
                    <div className="text-start">
                        <h2 className="text-xl font-medium ">Anna Sydney</h2>
                        <p className=" font-medium my-4">Events Manager</p>
                        <p>Eorem ipsum dolor sit ame adipisicn elit sed do eiusmod tempor incidida labore dolor magna</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;