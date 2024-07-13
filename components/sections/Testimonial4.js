import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	breakpoints:{
		320: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
	}
};
const Testimonial4 = () => {
	return (
	<>
	<div className="combine-bg">
		<div className="bg bg-pattern-13"></div>

		<section className="testimonial-section-four">
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">Testomonial</span>
					<h2>Building your brand in the <br/>digital world</h2>
				</div>
				<div className="carousel-outer">
			<Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme disable-navs">
				<SwiperSlide>
					<div className="testimonial-block-four">
						<div className="inner-box">
							<figure className="image"><img src="images/resource/testi-thumb4-1.jpg" alt=""/></figure>
							<div className="rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="info-box">
								<h6 className="name">Jacob Jones</h6>
								<span className="designation">President of Sales</span>
								<span className="icon fa fa-quote-right"></span>
							</div>
							<div className="text">
								Financial planners help people to knowledge in about how to invest and 
								in save their moneye the most efficient way eve plan ners help 
								people tioniio know ledige in about how.
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block-four">
						<div className="inner-box">
							<figure className="image"><img src="images/resource/testi-thumb4-2.jpg" alt=""/></figure>
							<div className="rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="info-box">
								<h6 className="name">Samual curren</h6>
								<span className="designation">President of Sales</span>
								<span className="icon fa fa-quote-right"></span>
							</div>
							<div className="text">
								Financial planners help people to knowledge in about how to invest and
								in save their moneye the most efficient way eve plan ners help
								people tioniio know ledige in about how.
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block-four">
						<div className="inner-box">
							<figure className="image"><img src="images/resource/testi-thumb4-1.jpg" alt=""/></figure>
							<div className="rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="info-box">
								<h6 className="name">Jacob Jones</h6>
								<span className="designation">President of Sales</span>
								<span className="icon fa fa-quote-right"></span>
							</div>
							<div className="text">
								Financial planners help people to knowledge in about how to invest and 
								in save their moneye the most efficient way eve plan ners help 
								people tioniio know ledige in about how.
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
				</div>
			</div>
		</section>

		<section className="news-section-four pt-0">
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">Latest blog</span>
					<h2>Your digital success is our <br/>top priority</h2>
				</div>
				<div className="row">
					<div className="news-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="news-details"><img src="images/resource/news4-1.jpg" alt=""/></Link></figure>
								<span className="date">25 January</span>
							</div>
							<div className="content-box">
								<ul className="post-info">
									<li><i className="far fa-comment"></i>Comments (05)</li>
									<li><i className="far fa-user"></i>By admin</li>
								</ul>
								<h4 className="title"><Link href="news-details">web page editors now use Lorem Ipsum as their default</Link></h4>
								<Link href="news-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
							</div>
						</div>
					</div>

					<div className="news-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="news-details"><img src="images/resource/news4-2.jpg" alt=""/></Link></figure>
								<span className="date">25 January</span>
							</div>
							<div className="content-box">
								<ul className="post-info">
									<li><i className="far fa-comment"></i>Comments (05)</li>
									<li><i className="far fa-user"></i>By admin</li>
								</ul>
								<h4 className="title"><Link href="news-details">web page editors now use Lorem Ipsum as their default </Link></h4>
								<Link href="news-details" className="theme-btn btn-style-one light-bg "><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
							</div>
						</div>
					</div>
					<div className="news-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="news-details"><img src="images/resource/news4-3.jpg" alt=""/></Link></figure>
								<span className="date">25 January</span>
							</div>
							<div className="content-box">
								<ul className="post-info">
									<li><i className="far fa-comment"></i>Comments (05)</li>
									<li><i className="far fa-user"></i>By admin</li>
								</ul>
								<h4 className="title"><Link href="news-details">web page editors now use Lorem Ipsum as their default </Link></h4>
								<Link href="news-details" className="theme-btn btn-style-one light-bg "><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="subscribe-section alternate">
			<div className="auto-container">
				<div className="outer-box">
					<div className="row">
						<div className="title-column col-xl-6">
							<div className="inner-column">
								<h2 className="title">Subscribe for any update information</h2>
							</div>
						</div>
						<div className="form-column col-xl-6">
							<div className="newsletter-form">
								<form method="post" action="#">
									<div className="form-group">
										<input type="email" name="email" className="email" placeholder="Type email id" required=""/>
										<button type="button" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Submit</span></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	</div>
	</>
	);
};
export default Testimonial4
