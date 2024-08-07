import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import review1Logo from './assets/review1.png'; // Adjust the path as necessary
// import review2Logo from './assets/review2.png'; // Adjust the path as necessary
// import review3Logo from './assets/review3.png'; // Adjust the path as necessary

const reviews = [
  {
    text: "MI Kidney Centre is focusing on spreading Dialysis services in different districts of Nepal, prioritizing rural cities with frequent screening and awareness programs for Kidney diseases.",
    name: "Mark International Kidney Center",
    // logo: review1Logo
  },
  {
    text: "A team of doctors committed to providing affordable and high-quality basic medical services believes in preventing and reducing illness within an affordable setup.",
    name: "Budhanilkantha Healthcare Pvt. Ltd.",
    // logo: review2Logo
  },
  {
    text: "Charak Memorial Hospital strives for excellence in quality, hygiene, and technology, meeting public health needs in the Western Region through innovation and cost-effective solutions.",
    name: "Charak Hospital Pvt. Ltd.",
    // logo: review3Logo
  }
];

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="flex justify-center mb-4">
               
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_empty.svg" alt="star" className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">{review.name}</h2>
              <div className="flex justify-center mt-4">
                {/* <img src={review.logo} alt={review.name} className="w-20 h-auto" /> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
