import React from 'react';

function Home() {

    return (
                <>
                    <div className="flex flex-col pt-30 px-6 bg-gray-600 min-h-[100vh] flex bg-[url('/src/assets/candorbanner.jpg')] bg-cover bg-center bg-blend-multiply">
                    
                        <div className="flex flex-col items-center mt-6 lg:mt-20 text-white pt-8">
                                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-extrabold">
                                    Transform your <span className="bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">Dream</span> into <span className="bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">Reality</span> 
                                </h1>
                                <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">We believe great construction is more than just bricks and concrete—it’s about building spaces where people can live, work, grow, and create lasting memories. With a commitment to safety, craftsmanship, and customer satisfaction, we work closely with our clients from concept to completion.</p>
                            <div className="flex justify-center my-10">
                                <a href="#" className="bg-gradient-to-r from-orange-600 to-red-800 p-3 rounded-md">
                                    Book Your Appointment
                                </a>
                                <a href="#" className="p-3 mx-3 rounded-md border">Sign-up</a>
                            </div>
                        </div>           
                    </div>

                    {/* Why coose us section */}

                    <section className="w-full bg-white px-4 py-8">
                        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 overflow-hidden rounded-2xl bg-gray-100 p-6 md:p-8 lg:p-10">

                            {/* Left Content */}
                            <div className="flex w-full flex-col items-start md:w-1/2">
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-gray-700">
                                    <span className="bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">WHY CHOOSE CANDOR</span>
                                </p>

                                <h1 className="max-w-md text-3xl font-extrabold leading-[1.1]  sm:text-4xl lg:text-5xl">
                                    Building Dreams. Creating {" "}
                                    <span className="bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">
                                    Foundations for the Future.
                                    </span>
                                </h1>

                                <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                                    At Candor, we turn ideas into strong, lasting structures. From residential homes to commercial spaces and major construction projects, we deliver quality workmanship, reliable service, and attention to every detail.
                                </p>

                                <button className=" mt-6 rounded-md bg-gradient-to-r from-orange-600 to-red-800 px-6 py-3 text-sm font-semibold text-white cursor-pointer">
                                    Learn More
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className="relative hidden w-1/2 md:block">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img src="src/assets/construction-office.avif" alt="" className="h-[220px] w-full object-cover lg:h-[280px]"/>
                                </div>
                            </div>
                        </div>
                    </section>

                     {/* Gallery Section*/}
                    <div className="overflow-hidden relative pt-20 border-b min-h-[800px]">
                            <div className="text-center">
                                    <span className="bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text font-bold rounded-md h-6 text-sm font-medium px-3 py-2 uppercase">
                                        Gallery
                                    </span>
                            </div>
                        
                    
                    
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 mt-20 justify-content items-center px-10 pb-20">
                                    <div className="overflow-hidden border border-gray-200 bg-white rounded-sm shadow-sm    transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-red-500 p-10">
                                        <img src="https://images.pexels.com/photos/33998571/pexels-photo-33998571.jpeg" className="w-full block object-cover rounded-lg" alt="Metal Scaffolding" />
                                        <h2 className="px-2 py-3 font-bold">Metal Scaffolding</h2>                                 
                                    </div>
                                    <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm    transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-red-500 p-10">
                                        <img src="https://images.pexels.com/photos/33762932/pexels-photo-33762932.jpeg" className="w-full block object-cover rounded-lg" alt="High-rise building" />
                                        <h2 className="px-2 py-3 font-bold">High-rise with crane</h2>                                 
                                    </div>
                                    <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm    transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-red-500 p-10">
                                        <img src="https://images.pexels.com/photos/33762932/pexels-photo-33762932.jpeg" className="w-full block object-cover rounded-sm" alt="High rise building" />
                                        <h2 className="px-2 py-3 font-bold">High rise crane</h2>                                 
                                    </div>
                            
                            
                            </div>
             
                    </div>
                </>
           
        
    );

}
export default Home;