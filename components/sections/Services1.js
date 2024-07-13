import Link from "next/link"
const Services1 = () => {
    return (
        <>
		<section className="services-section">
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">popular services</span>
					<h2>We turn ideas into <br/>digital reality</h2>
				</div>

				<div className="row">
					<div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
						<div className="inner-box">
							<div className="icon-box"><i className="icon flaticon-promotion"></i></div>
							<h4 className="title"><Link href="page-service-details">Digital Advertising</Link></h4>
							<div className="text">Our mission is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </div>
							<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
						</div>
					</div>

					<div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
						<div className="inner-box">
							<div className="icon-box"><i className="icon flaticon-diamond-2"></i></div>
							<h4 className="title"><Link href="page-service-details">Branding and Identity</Link></h4>
							<div className="text">Our mission is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </div>
							<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
						</div>
					</div>

					<div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box">
							<div className="icon-box"><i className="icon flaticon-rocket-ship"></i></div>
							<h4 className="title"><Link href="page-service-details">E-commerce Solutions</Link></h4>
							<div className="text">Our mission is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </div>
							<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
};
export default Services1
