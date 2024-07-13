import Link from "next/link"
const Services3 = () => {
    return (
        <>
		<section className="services-section-three">
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">Our Services</span>
					<h2>Empowering your online <br/>presence</h2>
				</div>

				<div className="row">
					<div className="service-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
						<div className="inner-box">
							<figure className="image"><img src="images/resource/service2-1.jpg" alt=""/></figure>
							<div className="content-box">
								<div className="icon-box">
									<i className="icon flaticon-stats"></i>
								</div>
								<h4 className="title"><Link href="page-service-details">Search Engine Optimization</Link></h4>
								<Link href="page-service-details" className="theme-btn btn-style-one"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
							</div>
						</div>
					</div>

					<div className="service-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><img src="images/resource/service2-2.jpg" alt=""/></figure>
							</div>
							<div className="content-box">
								<div className="icon-box">
									<i className="icon flaticon-support-2"></i>
								</div>
								<h4 className="title"><Link href="page-service-details">Content Creation and Marketing</Link></h4>
								<Link href="page-service-details" className="theme-btn btn-style-one"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
							</div>
						</div>
					</div>

					<div className="service-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><img src="images/resource/service2-3.jpg" alt=""/></figure>
							</div>
							<div className="content-box">
								<div className="icon-box">
									<i className="icon flaticon-maintenance"></i>
								</div>
								<h4 className="title"><Link href="page-service-details">Factory & Building Acomodation</Link></h4>
								<Link href="page-service-details" className="theme-btn btn-style-one"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
};
export default Services3