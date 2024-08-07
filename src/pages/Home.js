import React from 'react'
import { IoIosPaper } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import im from "../Designer.png"
import "./Home.css"
import Review from "./home-components/ReviewSlider"
export default function Home() {
    return (
        <div>
            <div class="container">
                <div class="content">
                    <div class="text-content">
                        <h1>Danphe HIMS</h1>
                        <p>For Healthcare Institutions</p>
                        <h2>Delivering better outcomes by working together to build smart system solutions for you</h2>
                        <ul>
                            <li>Improve your patient experience by improving your process with DANPHE HMIS Software</li>
                            <li>Significant reduction in time and effort required to manage your Health Institution</li>
                        </ul>
                        <a href="#" class="explore-button">Explore More →</a>
                    </div>
                    <div class="image-content">
                        <img src={im} alt="Danphe HIMS" />
                    </div>
                </div>
            </div>

            {/* <!-- card component --> */}

            <div className="container">
                <div className="card">
                    <div className="card-image">
                        <img src="path_to_image" alt="cool image" />
                    </div>
                    <div className="card-content">
                        <h2>Tech health</h2>
                        <p>Explore more about us</p>
                        <button className="view-detail">View Detail</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Broucher</h2>
                        <p>One solution, no software clutter – Comprehensive EHR and HIMS in a nutshell.</p>
                        <button className="download-now">Download Now</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Presentation</h2>
                        <p>One solution, no software clutter – Comprehensive EHR and HIMS in a nutshell.</p>
                        <button className="download-now">Download Now</button>
                    </div>
                </div>
            </div>
            {/*trusted and best wala*/}
            <div name="trusted and best software">
                <div className="max-w-6xl mx-auto p-5">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold mb-3">We Provide Trusted and Best Software</h1>
                        <p className="text-gray-700">All-in-one hospital management solution for seamless operations</p>
                    </div>
                    <div className="d-flex flex-row md:flex-row items-center gap-5">
                        <div className="w-full md:w-1/2">
                            <img src="path_to_dashboard_image" alt="Software Dashboard" className="rounded-lg shadow-md" />
                        </div>
                        <div className="flex flex-col gap-5 w-1/3 md:w-1/2">
                            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 flex items-center gap-5">
                                <img src="path_to_icon1" alt="Built By Doctors For Doctors" className="w-12 h-12" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Built By Doctors For Doctors</h3>
                                    <p className="text-gray-700">We have your efficiency and ease in mind, so we have developed a user-friendly solution.</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 flex items-center gap-5">
                                <img src="path_to_icon2" alt="Customizable & Scalable" className="w-12 h-12" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Customizable & Scalable</h3>
                                    <p className="text-gray-700">We built it from the bottom up, so we can customize to your needs. Also, as your business grows, Danphe can scale to meet your demands.</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 flex items-center gap-5">
                                <img src="path_to_icon3" alt="Cloudbase Service" className="w-12 h-12" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Cloudbase Service</h3>
                                    <p className="text-gray-700">We offer both on-premises and cloud-based services catering to your needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Review />
        </div>
    )
}
