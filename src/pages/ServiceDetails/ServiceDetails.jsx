import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./detailCard";




const ServiceDetails = () => {
    const [details,setDetails] = useState({});
    const {id} = useParams();
    const serviceDetails = useLoaderData();
    useEffect(() => {
        const findDetails = serviceDetails?.find((service) => service.id == id);
        // console.log(findDetails);
        setDetails(findDetails);
        
    },[id,serviceDetails])
    // console.log(details);
    return (
        <div>
             <h2>Service Details</h2>
             <DetailCard details={details}></DetailCard>
        </div>
    );
};

export default ServiceDetails;