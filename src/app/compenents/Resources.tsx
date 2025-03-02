export default function ResourcesSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800">Our Resources</h2>
                <p className="mt-4 text-gray-600">
                    Problems faced by the developed and the developing countries in the area of welfare services
                    demand radically different approaches. Whereas, the developed countries are putting the
                    responsibility primarily on the government, the developing countries are struggling to mobilise
                    their own resources or look for foreign assistance for this purpose.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 font-bold text-xl">
                            1
                        </div>
                    </div>
                    <h3 className="mt-4 font-bold text-lg text-gray-800">VOLUNTEER BASE</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Edhi foundation is run entirely with the help of volunteers. There are around six thousand volunteers,
                        comprising of zonal heads, workers at several Edhi Homes, clerks at Edhi Centers, workers at maternity
                        homes and ambulance drivers.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 font-bold text-xl">
                            2
                        </div>
                    </div>
                    <h3 className="mt-4 font-bold text-lg text-gray-800">DONATION</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Voluntary donation from individuals ranging from Rs. 5 to many hundreds of thousand of rupees,
                        support the foundation’s activities. The emphasis is on individuals. Social masses contributions
                        are also made in form of food, clothing, medicines, and animal hides.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 font-bold text-xl">
                            3
                        </div>
                    </div>
                    <h3 className="mt-4 font-bold text-lg text-gray-800">MANAGEMENT STYLE</h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Management of all funds is centralized and remains in the exclusive control of Edhi with his son Faisal Edhi
                        and daughter Kubra Edhi who are personally involved in all operations of the foundation. They are also
                        responsible for national and international fund-raising.
                    </p>
                </div>
            </div>
        </section>
    )
}
