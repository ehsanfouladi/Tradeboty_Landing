import Link from "next/link"
const Services4 = () => {
    return (
        <>
		<section className="services-section-four">
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">Best Service</span>
					<h2>Digital solutions for your <br/>every need</h2>
				</div>
				<div className="row">
					<div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-service-details"><img src="images/resource/service4-1.jpg" alt=""/></Link></figure>
							</div>
							<div className="content-box">
								<i className="icon flaticon-promotion"></i>
								<h4 className="title"><Link href="page-service-details">Social Media Marketing</Link></h4>
								<div className="text">We design develop and maintain software applications designer here</div>
							</div>
						</div>
					</div>
					<div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-service-details"><img src="images/resource/service4-2.jpg" alt=""/></Link></figure>
							</div>
							<div className="content-box">
								<i className="icon flaticon-web-programming"></i>
								<h4 className="title"><Link href="page-service-details">E-commerce Development</Link></h4>
								<div className="text">We design develop and maintain software applications designer here</div>
							</div>
						</div>
					</div>
					<div className="service-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-service-details"><img src="images/resource/service4-3.jpg" alt=""/></Link></figure>
							</div>
							<div className="content-box">
								<i className="icon flaticon-creativity"></i>
								<h4 className="title"><Link href="page-service-details">User Experience Design</Link></h4>
								<div className="text">We design develop and maintain software applications designer here</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
};
export default Services4