import { useLoaderData } from "react-router-dom";
import GalleryCard from "./GalleryCard";


const Gallery = () => {
    const gallery = useLoaderData();
    // console.log(gallery);
    return (
        <div className="px-5 mt-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                gallery.map(item => <GalleryCard key={item.id} item={item}></GalleryCard>)
            }
           </div>
        </div>
    );
};

export default Gallery;