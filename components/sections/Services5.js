import Link from "next/link"
const Services5 = () => {
    return (
        <>
			<section className="services-section-five pull-down">
				<div className="auto-container">
					<div className="row">
						<div className="title-column col-lg-6 col-md-12 col-sm-12">
							<div className="sec-title style-two">
								<span className="sub-title">Featured services</span>
								<h2>Connecting your business with the world</h2>
								<p className="text">Lorem ipsum dolor sit amet consecte. Mauris donec nulla tempor lacinia vitae laoreet. Amet nunc adipiscing commodo tortor feugiat convallis vel adipiscing. Mattis ipsum maecenas dolo</p>
							</div>
						</div>
						
						<div className="service-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInRight">
							<div className="inner-box">
								<div className="icon-box"><i className="icon flaticon-design-tool"></i></div>
								<h4 className="title"><Link href="page-service-details">Pixie Digital</Link></h4>
								<div className="text">Lorem Ipsum is simply is dumio yadvice design in us repairs </div>
								<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
							</div>
						</div>

						<div className="service-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInRight">
							<div className="inner-box">
								<div className="icon-box"><i className="icon flaticon-startup"></i></div>
								<h4 className="title"><Link href="page-service-details">Fuse Agency</Link></h4>
								<div className="text">Lorem Ipsum is simply is dumio yadvice design in us repairs </div>
								<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
							</div>
						</div>

						<div className="service-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInLeft">
							<div className="inner-box">
								<div className="icon-box"><i className="icon flaticon-diamond-2"></i></div>
								<h4 className="title"><Link href="page-service-details">Byte Labs</Link></h4>
								<div className="text">Lorem Ipsum is simply is dumio yadvice design in us repairs </div>
								<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
							</div>
						</div>

						<div className="service-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInLeft">
							<div className="inner-box">
								<div className="icon-box"><i className="icon flaticon-promotion"></i></div>
								<h4 className="title"><Link href="page-service-details">Pixel Punch</Link></h4>
								<div className="text">Lorem Ipsum is simply is dumio yadvice design in us repairs </div>
								<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
							</div>
						</div>

						<div className="service-block-five col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
							<div className="inner-box">
								<div className="icon-box"><i className="icon flaticon-puzzle"></i></div>
								<h4 className="title"><Link href="page-service-details">Find Out More Of Our Services</Link></h4>
								<div className="text">Lorem ipsum dolor sit amet consectetur. Mauris donec nulla tempor lacinia vitae laoreet. Amet nunc adipiscing commodo tortor nibh feugiat</div>
								<Link href="page-service-details" className="read-more">Read More<i className="fa-solid fa-arrow-right"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    );
};
export default Services5