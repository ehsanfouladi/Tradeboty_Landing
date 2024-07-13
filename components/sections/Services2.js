import Link from "next/link"
const Services2 = () => {
    return (
        <>
			<section className="services-section-two">
				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="sub-title">We Provide</span>
						<h2>Your partner in digital<br/>transformation</h2>
					</div>

					<div className="row">
						<div className="service-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<figure className="image"><Link href="page-service-details"><img src="images/resource/service1-1.jpg" alt=""/></Link></figure>
								<div className="content-box">
									<i className="icon flaticon-design-tool"></i>
									<span className="cat">Management</span>
									<h4 className="title"><Link href="page-service-details">Digital Advertising</Link></h4>
								</div>
							</div>
						</div>

						<div className="service-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<figure className="image"><Link href="page-service-details"><img src="images/resource/service1-2.jpg" alt=""/></Link></figure>
								<div className="content-box">
									<i className="icon flaticon-success"></i>
									<span className="cat">Cutting</span>
									<h4 className="title"><Link href="page-service-details">Branding and Identity</Link></h4>
								</div>
							</div>
						</div>

						<div className="service-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
							<div className="inner-box">
								<figure className="image"><Link href="page-service-details"><img src="images/resource/service1-3.jpg" alt=""/></Link></figure>
								<div className="content-box">
									<i className="icon flaticon-approved"></i>
									<span className="cat">Solution</span>
									<h4 className="title"><Link href="page-service-details">Analytics and Reporting</Link></h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    );
};
export default Services2