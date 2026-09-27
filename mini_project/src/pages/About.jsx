import React from 'react';
import Testimonials from './Testimonials';

function About() {

    return (

            <>
              
                <div className ="flex flex-col items-center text-white pt-8 flex bg-[url('/src/assets/candorbanner.jpg')] bg-cover bg-center bg-blend-multiply min-h-[100vh]  min-h-[100vh]  bg-gray-600" >
                        <h1 className=" text-4xl sm:text-6xl lg:text-7xl mt-50 text-center tracking-wide px-30 font-extrabold">
                            About Section
                        </h1>
                        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis hic quod quia, ipsum modi id? Hic sunt dolores facilis odit obcaecati, deleniti adipisci corrupti ipsam illo vero labore id.
                        </p>

                </div>
                

               

                {/* About us section */}

                    <section className="w-full px-4 py-8">
                        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 shadow-sm overflow-hidden rounded-2xl p-6 md:p-8 lg:p-10 rounded-xl dark:shadow-lg">
                       
                            {/* Left image */}
                            <div className="relative hidden w-1/2 md:block ">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img src="src/assets/candor_office.jpg" alt="" className="h-[220px] w-full object-cover lg:h-[280px]"/>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="flex w-full flex-col items-start md:w-1/2">
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-gray-700">
                                    <span className="bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">ABOUT US</span>
                                </p>

                                <h1 className="max-w-md text-3xl font-extrabold leading-[1.1]  sm:text-4xl lg:text-5xl">
                                    We deliver the  {" "}
                                    <span className="bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">
                                    best result
                                    </span>
                                </h1>

                                <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore eaque similique tempora porro tempore veritatis facere, id, sequi assumenda, natus amet. Ut harum soluta ab molestias ducimus impedit porro.
                                </p>

                                
                            </div>

                            
                        </div>
                    </section>
                   
                <Testimonials/>

            </>
    );

}
export default About;