
const slider = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img
                        src="https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/321/original/TMOTC_BookshopHomepageHeroAd_Desktop_PReorder.jpg?1752156803"
                        className="d-block w-100"
                        style={{ height: '20%', width: '100%' }} 
                        alt="Slide 1"
                    />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img
                        src="https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/315/original/warrior-princess-assassin-BOOKSHOP-ads-2048x600.jpg?1752587649"
                        className="d-block w-100"
                        style={{ height: '10%', width: '100%' }}
                        alt="Slide 2"
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default slider;
