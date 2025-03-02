
import Image from "next/image";
import service1 from "../images/service1.png"
import service2 from "../images/service2.png"
import service3 from "../images/service3.jpg"
import service4 from "../images/service4.png"
import service5 from "../images/service5.png"
import service6 from "../images/service6.png"

const services = [
    { title: "AMBULANCE SERVICE", color: "bg-blue-500", image: service1 },
    { title: "EDUCATIONAL SERVICES", color: "bg-purple-500", icon: "🏫" },
    { title: "CHILDREN SERVICES", color: "bg-green-400", image: service2 },
    { title: "GRAVEYARD SERVICES", color: "bg-orange-400", icon: "⚰️" },
    { title: "HOSPITAL SERVICES", color: "bg-red-400", image: service3 },
    { title: "HOMES & ORPHANAGE CENTRES", color: "bg-yellow-400", icon: "👨‍👩‍👧" },
    { title: "EDHI MORGUE SERVICES", color: "bg-blue-500", image: service4 },
    { title: "MARRIAGE BUREAU SERVICES", color: "bg-purple-500", icon: "💒" },
    { title: "LANGER SERVICE (FREE KITCHEN)", color: "bg-green-400", image: service5 },
    { title: "REHABILITATION CENTER", color: "bg-orange-400", icon: "🏥" },
    { title: "MISSING PERSONS SERVICE", color: "bg-red-400", image: service6 },
    { title: "EDHI ANIMAL HOSTEL", color: "bg-yellow-400", icon: "🐾" },
];

export default function ServicesSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800">OUR SERVICES</h2>
                <p className="mt-2 text-gray-600">
                    Serving Humanity is the Spirit of All Religions
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-lg shadow-lg ${service.color} text-white flex flex-col justify-between`}
                        >
                            {service.image ? (
                                <div className="h-32">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                            ) : (
                                <div className="h-32 flex items-center justify-center text-6xl">
                                    {service.icon}
                                </div>
                            )}

                            <div className="p-4 text-center flex-1 flex flex-col justify-between">
                                <h3 className="text-lg font-bold">{service.title}</h3>
                                <button className="mt-4 bg-white text-gray-800 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-gray-200">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
