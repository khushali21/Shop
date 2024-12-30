import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/Img1.png";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "white",
  },
  {
    id: 2,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "white",
  },
  {
    id: 3,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "white",
  },
  {
    id: 4,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "white",
  },
  {
    id: 5,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "white",
  },
];
export default function Products() {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <div key={data.id} className="space-y-3">
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-2 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
