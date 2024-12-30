import testiImage from "../../assets/testimonialImg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "great product",
    img: testiImage,
  },
  {
    id: 2,
    name: "Victor",
    text: "great product",
    img: testiImage,
  },
  {
    id: 3,
    name: "Victor",
    text: "great product",
    img: testiImage,
  },
  {
    id: 4,
    name: "Victor",
    text: "great product",
    img: testiImage,
  },
  {
    id: 5,
    name: "Victor",
    text: "great product",
    img: testiImage,
  },
];
export default function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">What our customers are saying</p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
        </div>
        {/* Testimonial cards */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt="image"
                      className="rounded w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">
                        {data.text}
                        <h1 className="text-xl font-bold text-black/80 dark:text-light">
                          {data.name}
                        </h1>
                      </p>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ''
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div></div>
      </div>
    </div>
  );
}
