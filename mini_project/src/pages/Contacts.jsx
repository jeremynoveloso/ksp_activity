import React from 'react';

function Contacts() {

    return (

            <>
                <div className ="flex flex-col items-center text-white pt-8 flex bg-[url('/src/assets/candorbanner.jpg')] bg-cover bg-center bg-blend-multiply min-h-[100vh]  min-h-[100vh]  bg-gray-600" >
                        <h1 className=" text-4xl sm:text-6xl lg:text-7xl mt-50 text-center tracking-wide px-30 font-extrabold">
                            Contact Us
                        </h1>
                        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                            Reach out to our team quickly and easily through our Contact Us page. We're here to assist you with any questions or support you need. Get in touch today!
                        </p>
                </div>

                {/* 
                <div className="max-w-md mx-auto my-20 ">
                    <form action="" method="" className="h-80 w-100 justify-content items-center ">
                        <div class="row-form">
                            <h3 className="font-bold text-xl uppercase mb-4 bg-linear-65 from-cyan-500 to-blue-500 text-transparent bg-clip-text">Log-in Form</h3>
                            <div class="input-box">
                                <span>Enter Username or Email</span>
                               
                                <input type="username" id="username" name="username" placeholder="Enter username or email" required className="w-full border px-3 py-2 rounded my-5"/>
                            </div>
                            <div class="input-box">
                                <span>Password</span>
                                
                                <input type="password" id="password" name="password" placeholder="Enter password" required className="w-full border px-3 py-2 rounded my-5" />
                            </div>

                        </div>
                        <button type="submit" className="bg-red-600 text-white px-4 py-2 mt-2 rounded hover:bg-red-700 cursor-pointer bg-linear-65 from-cyan-500 to-blue-500 w-[100%]">Submit</button>
                    </form>
                </div>
                */}
                {/*Contact Form */}
                
 
                <div className="flex flex-col md:flex-row min-h-screen lg:p-20 md:p-10 p-5 gap-4">
                    {/* Left side with image and branding */}
                    <div className="md:w-1/2 relative bg-[url('/src/assets/candorbanner.jpg')]">
                        <img
                        src="src/assets/construction-office.avif"
                        alt="City Skyline"
                        className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-70 flex flex-col justify-center items-center text-center p-6">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Your vision. Our expertise. Built to last.
                        </h2>
                        <p className="text-white text-lg">Candor Project</p>
                        </div>
                    </div>

                    {/* Right side with form */}
                    <div className="md:w-1/2 flex flex-col justify-center p-10 border rounded-lg">
                        <h1 className="text-3xl font-extrabold mb-4">
                        Let's Build Your <span className="bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">Dream House </span>
                        </h1>
                        <p className="text-gray-600 mb-6">
                        Get in touch with our team and have the best deals in Candor.
                        </p>

                        {/* Contact options */}
                        <div className="mb-6 space-y-2">
                        <p className="text-gray-700">Phone: +1 (234) 567-8910</p>
                        <p className="text-gray-700">Email:  info@candor.com</p>
                        <p className="text-gray-700">Location: Baguio</p>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-600 to-red-800 text-white font-semibold py-3 rounded-lg cursor-pointer"
                        >
                            Send Message
                        </button>
                        </form>
                    </div>
                </div>   
            </>
    );

}
export default Contacts;