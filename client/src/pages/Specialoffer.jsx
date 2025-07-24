
// import romanceBannerImage from '../assets/romance_banner.png'; // Replace with your actual image path

// const RomancePromotionPage = () => {
//   return (
//     <div className="container py-5">
//       {/* Promotional Banner Section */}
//       <section className="row rounded-3 shadow-sm p-3 p-md-5 mb-5 align-items-center justify-content-center g-4"
//   style={{ backgroundColor: '#f591fa'}}>
//         <div className="col-lg-6 col-sm-6 col-md-6 text-center">
//           {/* Image with rounded corners and fluid responsiveness */}
//           <img
//             src={romanceBannerImage}
//             alt="Stack of romance books with roses"
//             className="img-fluid rounded-3"
//             style={{ maxWidth: '100%', height: 'auto' }} // Ensure image scales properly
//           />
//         </div>
//         <div className="col-lg-6 col-sm-6 col-md-6 text-center text-lg-start">
//           <h1 className="display-4 fw-bold mb-3"style={{ color: '#d104db',fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Read a Romance</h1> {/* Text color set to danger for pinkish hue */}
//           <p className="fs-5 text-muted mb-4"style={{fontSize: 'clamp(0.8rem, 1vw, 2rem)' }}>
//             Celebrate your love of love by purchasing a new book by a
//             romance author. We invite you to choose any of the steamy
//             titles below and receive 20% Off* at checkout with code <strong className="text-dark">RRA25</strong>
//           </p>
//           {/* Bootstrap Button */}
//           <button type="button" className="btn btn-lg btn-danger text-white rounded-pill px-4 py-2 shadow-sm"style={{fontSize: 'clamp(1rem, 1vw, 2rem)' }}>
//             Get 20% OFF select Title w/ Code RRA25
//           </button>
//         </div>
//       </section>

//       {/* Book Promotion Details Section
//       <section className="row justify-content-center">
//         <div className="col-lg-8">
//           <div className="card shadow-sm p-4">
//             <div className="if i want test database for server to client but i don't have mysql workbenh i have only debeaver psql xampp body">
//               <h2 className="card-title h3 mb-4 text-center">
//                 <span role="img" aria-label="sparkling heart">💖</span> "Love Blooms Under the Stars" Book Promotion! <span role="img" aria-label="sparkling heart">💖</span>
//               </h2>
//               <p className="card-text fs-5 mb-3">
//                 Get ready to fall in love with your next favorite read! Before the New Year,
//                 immerse yourself in a captivating romance novel and enjoy a special
//                 discount.
//               </p>
//               <p className="card-text fs-5 mb-3">
//                 <span role="img" aria-label="book emoji">📖</span> <strong>Book Title:</strong> "Whispers of a Starlit Night" <span role="img" aria-label="night with stars emoji">🌌</span> <br />
//                 <strong>Synopsis:</strong> Follow the
//                 journey of two souls destined to meet under the most unexpected
//                 circumstances. A heartwarming tale of forbidden love, second chances,
//                 and the magic of finding your true north.
//               </p>
//               <p className="card-text fs-4 fw-bold text-success mb-4">
//                 <span role="img" aria-label="sparkles emoji">✨</span> Special Offer: 20% OFF! <span role="img" aria-label="sparkles emoji">✨</span>
//               </p>
//               <p className="card-text fs-6 text-muted">
//                 <span role="img" aria-label="pin emoji">📌</span> Don't miss out on this limited-time offer! Follow us for more exciting
//                 releases and promotions on our Facebook page: <a href="#" className="text-decoration-none fw-bold">[BOOKISHCLOUD]</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       {/* Book Promotion Details Section */}
// <section className="row justify-content-center">
//   <div className="col-lg-8">
//     <div className="p-4">
//       <h2 className="h3 mb-4 text-center">
//         <span role="img" aria-label="sparkling heart">💖</span> "Love Blooms Under the Stars" Book Promotion! <span role="img" aria-label="sparkling heart">💖</span>
//       </h2>
//       <p className="fs-5 mb-3">
//         Get ready to fall in love with your next favorite read! Before the New Year,
//         immerse yourself in a captivating romance novel and enjoy a special
//         discount.
//       </p>
//       <p className="fs-5 mb-3">
//         <span role="img" aria-label="book emoji">📖</span> <strong>Book Title:</strong> "Whispers of a Starlit Night" <span role="img" aria-label="night with stars emoji">🌌</span> <br />
//         <strong>Synopsis:</strong> Follow the
//         journey of two souls destined to meet under the most unexpected
//         circumstances. A heartwarming tale of forbidden love, second chances,
//         and the magic of finding your true north.
//       </p>
//       <p className="fs-4 fw-bold text-success mb-4">
//         <span role="img" aria-label="sparkles emoji">✨</span> Special Offer: 20% OFF! <span role="img" aria-label="sparkles emoji">✨</span>
//       </p>
//       <p className="fs-6 text-muted">
//         <span role="img" aria-label="pin emoji">📌</span> Don't miss out on this limited-time offer! Follow us for more exciting
//         releases and promotions on our Facebook page: <a href="#" className="text-decoration-none fw-bold">[BOOKISHCLOUD]</a>
//       </p>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default RomancePromotionPage;import romanceBannerImage from '../assets/romance_banner.png'; // Replace with your actual image path
import Nav from './Nav';
import Footer from './Footer';
import romanceBannerImage from '../assets/romance_banner.png'; // Replace with your actual image path
const RomancePromotionPage = () => {
  return (
    <>
      <Nav />

      <div className="container py-5">
        {/* Promotional Banner Section */}
        <section
          className="row rounded-3 shadow-sm p-3 p-md-5 mb-5 align-items-center justify-content-center g-4"
          style={{ backgroundColor: '#f591fa' }}
        >
          <div className="col-lg-6 col-sm-6 col-md-6 text-center">
            {/* Image with rounded corners and fluid responsiveness */}
            <img
              src={romanceBannerImage}
              alt="Stack of romance books with roses"
              className="img-fluid rounded-3"
              style={{ maxWidth: '100%', height: 'auto' }} // Ensure image scales properly
            />
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6 text-center text-lg-start">
            <h1
              className="display-4 fw-bold mb-3"
              style={{ color: '#d104db', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              Read a Romance
            </h1>{' '}
            {/* Text color set to pink */}
            <p className="fs-5 text-muted mb-4" style={{ fontSize: 'clamp(0.8rem, 1vw, 2rem)' }}>
              Celebrate your love of love by purchasing a new book by a romance author. We invite you
              to choose any of the steamy titles below and receive 20% Off* at checkout with code{' '}
              <strong className="text-dark">RRA25</strong>
            </p>
            {/* Bootstrap Button */}
            <button
              type="button"
              className="btn btn-lg btn-danger text-white rounded-pill px-4 py-2 shadow-sm"
              style={{ fontSize: 'clamp(1rem, 1vw, 2rem)' }}
            >
              Get 20% OFF select Title w/ Code RRA25
            </button>
          </div>
        </section>

        {/* Book Promotion Details Section */}
        <section className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4">
              <h2 className="h3 mb-4 text-center">
                <span role="img" aria-label="sparkling heart">
                  💖
                </span>{' '}
                "Love Blooms Under the Stars" Book Promotion!{' '}
                <span role="img" aria-label="sparkling heart">
                  💖
                </span>
              </h2>
              <p className="fs-5 mb-3">
                Get ready to fall in love with your next favorite read! Before the New Year, immerse
                yourself in a captivating romance novel and enjoy a special discount.
              </p>
              <p className="fs-5 mb-3">
                <span role="img" aria-label="book emoji">
                  📖
                </span>{' '}
                <strong>Book Title:</strong> "Whispers of a Starlit Night"{" "}
                <span role="img" aria-label="night with stars emoji">
                  🌌
                </span>{' '}
                <br />
                <strong>Synopsis:</strong> Follow the journey of two souls destined to meet under the
                most unexpected circumstances. A heartwarming tale of forbidden love, second
                chances, and the magic of finding your true north.
              </p>
              <p className="fs-4 fw-bold text-success mb-4">
                <span role="img" aria-label="sparkles emoji">
                  ✨
                </span>{' '}
                Special Offer: 20% OFF!{' '}
                <span role="img" aria-label="sparkles emoji">
                  ✨
                </span>
              </p>
              <p className="fs-6 text-muted">
                <span role="img" aria-label="pin emoji">
                  📌
                </span>{' '}
                Don't miss out on this limited-time offer! Follow us for more exciting releases and
                promotions on our Facebook page:{' '}
                <a href="#" className="text-decoration-none fw-bold">
                  [សំណេរ]
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default RomancePromotionPage;
