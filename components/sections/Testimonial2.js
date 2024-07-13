import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	navigation: true,

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
			slidesPerView: 3,
			// spaceBetween: 30,
		},
	}
};
const Testimonial2 = () => {
	return (
	<>
	<section className="testimonial-section-two">
		<div className="auto-container">
			<div className="sec-title mb-0">
				<span className="sub-title">clients review</span>
				<h2>Your partner in digital <br/>transformation</h2>
			</div>

			<Swiper {...swiperOptions} className="three-items-carousel owl-carousel default-navs">
				<SwiperSlide>
					<div className="testimonial-block-two">
						<div className="inner-box">
							<div className="content-box">
								<span className="icon fa fa-quote-right"></span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<div className="text">Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve.planners help</div>
								<div className="info-box">
									<figure className="thumb"><img src="images/resource/testi-thumb1-1.png" alt=""/></figure>
									<h4 className="name">Jacob Jones</h4>
									<span className="designation">Marketing Coordinator</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block-two">
						<div className="inner-box">
							<div className="content-box">
								<span className="icon fa fa-quote-right"></span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<div className="text">Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve.planners help</div>
								<div className="info-box">
									<figure className="thumb"><img src="images/resource/testi-thumb1-2.png" alt=""/></figure>
									<h4 className="name">Marvin McKinney</h4>
									<span className="designation">Web Designer</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block-two">
						<div className="inner-box">
							<div className="content-box">
								<span className="icon fa fa-quote-right"></span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<div className="text">Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve.planners help</div>
								<div className="info-box">
									<figure className="thumb"><img src="images/resource/testi-thumb1-3.png" alt=""/></figure>
									<h4 className="name">Robert Fox</h4>
									<span className="designation">Dog Trainer</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block-two">
						<div className="inner-box">
							<div className="content-box">
								<span className="icon fa fa-quote-right"></span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<div className="text">Financial planners help people to knowledge in about how to invest and save their moneye the most efficient way eve.planners help</div>
								<div className="info-box">
									<figure className="thumb"><img src="images/resource/testi-thumb1-1.png" alt=""/></figure>
									<h4 className="name">Jacob Jones</h4>
									<span className="designation">Marketing Coordinator</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
	</>
	);
};
export default Testimonial2
