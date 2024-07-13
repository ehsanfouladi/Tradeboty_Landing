import Link from "next/link"
const Services6 = () => {
    return (
        <>
			<section className="services-section-six">
				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="sub-title">Our services</span>
						<h2>There is a Big opportunity of <br/>Company</h2>
					</div>

					<div className="row">
						<div className="service-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-service-details"><img src="images/resource/service6-1.jpg" alt=""/></Link></figure>
									<i className="icon flaticon-promotion"></i>
								</div>
								<div className="content-box">
									<span className="cat">Category</span>
									<h4 className="title"><Link href="page-service-details">Digital Strategy</Link></h4>
									<div className="text">Lorem Ipsusimply dummy of the printing Lore Lorem Ipsusimply dummy tex of the</div>
									<Link href="page-service-details" className="read-more">Read More<i className="fa fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>
			
						<div className="service-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-service-details"><img src="images/resource/service6-2.jpg" alt=""/></Link></figure>
									<i className="icon flaticon-support-2"></i>
								</div>
								<div className="content-box">
									<span className="cat">Category</span>
									<h4 className="title"><Link href="page-service-details">Content Creation</Link></h4>
									<div className="text">Lorem Ipsusimply dummy of the printing Lore Lorem
										Ipsusimply dummy tex of the</div>
									<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>
			
						<div className="service-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-service-details"><img src="images/resource/service6-3.jpg" alt=""/></Link></figure>
									<i className="icon flaticon-stats"></i>
								</div>
								<div className="content-box">
									<span className="cat">Category</span>
									<h4 className="title"><Link href="page-service-details">E-commerce Solutions</Link></h4>
									<div className="text">Lorem Ipsusimply dummy of the printing Lore Lorem
										Ipsusimply dummy tex of the</div>
									<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    );
};
export default Services6