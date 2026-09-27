import React from 'react';


function Services() {

    return (

        <>
                {/*Hero Section */}
                <div className ="flex flex-col items-center text-white pt-8 flex bg-[url('/src/assets/candorbanner.jpg')] bg-cover bg-center bg-blend-multiply min-h-[100vh]  min-h-[100vh]  bg-gray-600" >
                        <h1 className=" text-4xl sm:text-6xl lg:text-7xl mt-50 text-center tracking-wide px-30 font-extrabold">
                            Top Services of Construction Company for <span className="bg-gradient-to-r from-orange-600 to-red-800 to-blue-500 text-transparent bg-clip-text"> Reliable Building Solutions </span>
                        </h1>
                        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                            Discover the top services of our construction company delivering reliable building solutions. Experience expert craftsmanship and timely project completion. Contact us today!
                        </p>

                </div>

                {/*Services Offered*/}
                <div className=" relative pt-20 border-b min-h-[800px]">
                    <div className="text-center">
                            <span className="bg-gradient-to-r from-orange-600 to-red-800 to-blue-500 text-transparent bg-clip-text font-bold rounded-md h-6 text-sm font-medium px-3 py-2 uppercase">
                                Services
                            </span>
                    </div>
                
          
                    <div className="flex justify-center items-center mt-20 ">
                        <div class="col-start-1 row-start-1 grid  grid-rows-2 gap-4 rounded-lg text-center text-sm font-bold text-white sm:grid-cols-2 md:grid-cols-3">
                            <div className="rounded-lg text-black p-4 h-60 w-80 border border-gray-500 hover:border-orange-600 bg-white">Planning
                              <p className="font-light mt-4 justify-center text-left text-md text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla atque quia beatae corrupti optio doloremque enim necessitatibus labore, quis debitis voluptates vero vel quae, sed, deleniti pariatur perspiciatis animi asperiores.</p>
                            </div>
                            <div className="rounded-lg text-black p-4 h-60 w-80 border border-gray-500 hover:border-orange-600 bg-white" >Design
                              <p className="font-light mt-4 justify-center text-left text-md text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla atque quia beatae corrupti optio doloremque enim necessitatibus labore, quis debitis voluptates vero vel quae, sed, deleniti pariatur perspiciatis animi asperiores.</p>
                            </div>
                            <div className="rounded-lg border border-gray-500 hover:border-orange-600 text-black p-4 h-60 w-80 bg-white">General Contracting
                              <p className="font-light mt-4 justify-center text-left text-md text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla atque quia beatae corrupti optio doloremque enim necessitatibus labore, quis debitis voluptates vero vel quae, sed, deleniti pariatur perspiciatis animi asperiores.</p>
                            </div>
                            <div className="rounded-lg text-black border border-gray-500 hover:border-orange-600 p-4 h-60 w-80 bg-white">Resedential Maintenance
                              <p className="font-light mt-4 justify-center text-left text-md text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla atque quia beatae corrupti optio doloremque enim necessitatibus labore, quis debitis voluptates vero vel quae, sed, deleniti pariatur perspiciatis animi asperiores.</p>
                            </div>
                            <div className="rounded-lg text-black border border-gray-500 hover:border-orange-600 p-4 h-60 w-80 bg-white">Industrial Project
                              <p className="font-light mt-4 justify-center text-left text-md text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla atque quia beatae corrupti optio doloremque enim necessitatibus labore, quis debitis voluptates vero vel quae, sed, deleniti pariatur perspiciatis animi asperiores.</p>
                            </div>
                            <div className="rounded-lg text-black border border-gray-500 hover:border-orange-600 p-4 h-60 w-80 bg-white">Commercial
                              <p className="font-light mt-4 justify-center text-left text-md text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla atque quia beatae corrupti optio doloremque enim necessitatibus labore, quis debitis voluptates vero vel quae, sed, deleniti pariatur perspiciatis animi asperiores.</p>
                            </div>
                          </div>
                      </div>
             
                </div>
        </>

    );

}
export default Services;