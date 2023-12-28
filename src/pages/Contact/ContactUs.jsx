import {FaAddressCard } from 'react-icons/fa';
import {BsFillTelephoneInboundFill } from 'react-icons/bs';
import {HiOutlineMailOpen } from 'react-icons/hi';

const ContactUs = () => {
    return (
        <div className="px-3 my-10 max-w-screen-xl mx-auto">
            {/*  */}
            <div className="bg-img5 hero min-h-[50vh] w-full bg-cover relative">
                <div className="hero-content text-center">
                    <div data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500" 
                        className="max-w-md">
                        <div className="w-36 md:w-52 lg:w-40 h-24 border-r-8 border-red-400 mt-4"></div>
                        <h1 className="mb-5 text-5xl text-white font-bold">Contact Us</h1>
                    </div>
                </div>

            </div>
            {/*  */}
            <h2 className="text-center text-xl font-medium">Contact us if you need our services. We will be happy to make your events memorable!</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            <div className="bg-emerald-400 py-16 rounded-tl-2xl rounded-br-2xl">
                <div className="flex items-center justify-between gap-3">
                <h3 className="text-white text-lg font-medium ml-8">Address</h3>
                <FaAddressCard className='text-4xl mr-5'></FaAddressCard>
                </div>
                <p className="text-white text-2xl font-medium ml-8">38-2 Hilton Street, California</p>
            </div>
            <div className="bg-blue-500 py-16 rounded-tl-2xl rounded-br-2xl">
                <div className="flex items-center justify-between">
                <h3 className="text-white text-lg font-medium ml-10">Phone</h3>
                <BsFillTelephoneInboundFill className='text-4xl mr-5'></BsFillTelephoneInboundFill>
                </div>
                <p className="text-white text-2xl font-medium ml-10">(+01) 123 456 7890</p>
            </div>
            <div className="bg-stone-600 py-16 rounded-tl-2xl rounded-br-2xl">
                <div className="flex items-center justify-between">
                <h3 className="text-white text-lg font-medium ml-10">Email</h3>
                <HiOutlineMailOpen className='text-4xl mr-5'></HiOutlineMailOpen>
                </div>
                <p className="text-white text-2xl font-medium ml-10">inform@dvents.com</p>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;