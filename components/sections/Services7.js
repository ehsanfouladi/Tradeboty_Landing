import Link from "next/link"
const Services7 = () => {
    return (
        <>
			<section className="service-section-seven">
				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="sub-title">Our services</span>
						<h2>Your digital journey <br/>starts here</h2>
					</div>
					<div className="row">
						<div className="service-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<div className="content">
									<div className="icon-box"><i className="icon flaticon-puzzle"></i></div>
									<h4 className="title"><Link href="page-service-details">Strategy Consulting</Link></h4>
									<div className="text">Aliquam justo, posuer is loborti viverra laoreet matti</div>
								</div>
							</div>
						</div>
						<div className="service-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<div className="content">
									<div className="icon-box"><i className="icon flaticon-camera"></i></div>
									<h4 className="title"><Link href="page-service-details">Media Management</Link></h4>
									<div className="text">Aliquam justo, posuer is loborti viverra laoreet matti</div>
								</div>
							</div>
						</div>
						<div className="service-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
							<div className="inner-box">
								<div className="content">
									<div className="icon-box"><i className="icon flaticon-settings"></i></div>
									<h4 className="title"><Link href="page-service-details">Engine Optimization</Link></h4>
									<div className="text">Aliquam justo, posuer is loborti viverra laoreet matti</div>
								</div>
							</div>
						</div>
						<div className="service-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<div className="content">
									<div className="icon-box"><i className="icon flaticon-diamond-2"></i></div>
									<h4 className="title"><Link href="page-service-details">Digital Advertising</Link></h4>
									<div className="text">Aliquam justo, posuer is loborti viverra laoreet matti</div>
								</div>
							</div>
						</div>
						<div className="service-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<div className="content">
									<div className="icon-box"><i className="icon flaticon-creativity"></i></div>
									<h4 className="title"><Link href="page-service-details">Design and Development</Link></h4>
									<div className="text">Aliquam justo, posuer is loborti viverra laoreet matti</div>
								</div>
							</div>
						</div>
						<div className="service-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
							<div className="inner-box">
								<div className="content">
									<div className="icon-box"><i className="icon flaticon-design-tool"></i></div>
									<h4 className="title"><Link href="page-service-details">E-commerce Solutions</Link></h4>
									<div className="text">Aliquam justo, posuer is loborti viverra laoreet matti</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    );
};
export default Services7