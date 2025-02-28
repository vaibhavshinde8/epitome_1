import React from "react";
import { Link } from "react-router-dom";
const properties = [
    {
        id: 1,
        title: "Signature Global Twin Tower DXP",
        image: "https://imagizer.imageshack.com/img923/1429/jd3kvn.png",
    },
    {
        id: 2,
        title: "Signature Global Twin Tower DXP",
        image: "https://imagizer.imageshack.com/img922/4862/dP3boW.png",
    },
    {
        id: 3,
        title: "Signature Global Twin Tower DXP",
        image: "https://imagizer.imageshack.com/img922/5365/c1N1dm.png",
    },
    {
        id: 4,
        title: "Signature Global Twin Tower DXP",
        image: "https://imagizer.imageshack.com/img923/1354/AB92WJ.png",
    },
];

const RecommendedProperties = () => {
    
    return (
        <div className="p-6">
            {/* Heading */}
            <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
                <span className="text-[#043268]">Recomended</span> Properties
            </h2>

            {/* Property Cards */}
            <div className="bg-white rounded-lg flex justify-center">
                <div className="flex p-4 md:p-8 space-x-4 overflow-x-auto scrollbar-hide border border-gray-400">
                    {properties.map((property) => (
                        <Link key={property.id} to={`/Property`}>
                            <div className="relative min-w-[200px] md:min-w-[250px] bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
                                <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 p-2 text-white text-lg text-center">
                                    {property.title}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default RecommendedProperties;
