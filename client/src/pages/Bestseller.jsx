// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import api from "../api/api";// adjust path if needed

// export default function Bestseller({ addToCart }) {
//   const [bestSellers, setBestSellers] = useState([]);

//   useEffect(() => {
//     api.get("/best_sellers.php").then((res) => setBestSellers(res.data));
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center fw-bold mb-4" style={{ color: "purple" }}>🔥 Best Sellers</h2>

//       <Swiper
//         modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
//         slidesPerView={Math.min(books.length, 3)}
//         slidesPerGroup={Math.min(books.length, 3)}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation
//         effect="coverflow"
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           576: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//         }}
//       >
//         {bestSellers.map((book) => (
//           <SwiperSlide key={book.id}>
//             <div className="card h-100 shadow-sm">
//               <img
//                 src={book.image}
//                 className="card-img-top"
//                 style={{ height: 250, objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column text-center">
//                 <h5 className="card-title">{book.title}</h5>
//                 <p className="card-text">${book.price}</p>
//                 <button
//                   className="btn btn-warning mt-auto"
//                   onClick={() => addToCart(book)}
//                 >
//                   🛒 Add to Cart
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import api from "../api/api";

// export default function Bestseller({ addToCart }) {
//   const [bestSellers, setBestSellers] = useState([]);

//   useEffect(() => {
//     api.get("/best_seller.php")
//       .then((res) => setBestSellers(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center fw-bold" style={{ color: "purple" }}>Best Sellers</h2>
//       <div className="row">
//         {bestSellers.map((book) => (
//           <div className="col-md-3 col-sm-6 mb-4" key={book.id}>
//             <div className="card h-100">
//               <img
//                 src={book.image}
//                 alt={book.title}
//                 className="card-img-top"
//                 style={{ height: 250, objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{book.title}</h5>
//                 <p className="card-text">${book.price}</p>
//                 <button
//                   className="btn btn-warning mt-auto"
//                   onClick={() => addToCart(book)}
//                 >
//                   🛒 Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import api from "../api/api";

// // Swiper Core and required modules from proper paths for v11+
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow } from "swiper/modules/effect-coverflow/effect-coverflow.js";
// import { Pagination } from "swiper/modules/pagination/pagination.js";
// import { Navigation } from "swiper/modules/navigation/navigation.js";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// export default function Bestseller({ addToCart }) {
//   const [bestSellers, setBestSellers] = useState([]);

//   useEffect(() => {
//     api.get("/best_seller.php")
//       .then((res) => setBestSellers(res.data))
//       .catch((err) => console.error("API Error:", err));
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center fw-bold mb-4" style={{ color: "purple" }}>
//         Best Sellers
//       </h2>

//       <Swiper
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         loop={true}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//           slideShadows: true,
//         }}
//         pagination={{ clickable: true }}
//         navigation
//         style={{ paddingBottom: "40px" }}
//       >
//         {bestSellers.map((book) => (
//           <SwiperSlide key={book.id}>
//             <div className="card text-center" style={{ width: "18rem", margin: "auto" }}>
//               <img
//                 src={book.image}
//                 className="card-img-top"
//                 alt={book.title}
//                 style={{ height: "250px", objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{book.title}</h5>
//                 <p className="card-text">${book.price}</p>
//                 <button className="btn btn-warning mt-auto" onClick={() => addToCart(book)}>
//                   🛒 Add to Cart
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import api from "../api/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Bestseller({ addToCart }) {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    api.get("/best_seller.php")
      .then((res) => setBestSellers(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "purple" }}>
        Best Sellers
      </h2>

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        style={{ paddingBottom: "40px" }}
      >
        {bestSellers.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="card text-center" style={{ width: "18rem", margin: "auto" }}>
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">${book.price}</p>
                <button className="btn btn-danger mt-auto"style={{
    backgroundColor: "#f71930ff", // Bootstrap red
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "50px",
   
  }} onClick={() => addToCart(book)}>
                Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
