import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services = useLoaderData()
    return (
        <div className="px-5 mt-8">
            <div className="text-center mb-5">
                <h1 className="text-3xl font-bold text-slate-400"><span className="text-red-400 ">Events</span> Services</h1>
                <p className="text-slate-400 text-lg font-medium mt-4">We make your events smart & impactful by personalised event management services</p>
            </div>
            <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;