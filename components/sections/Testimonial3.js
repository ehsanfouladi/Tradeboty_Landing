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
			slidesPerView: 2,
			// spaceBetween: 30,
		},
	}
};
const Testimonial3 = () => {
	return (
	<>
	<section className="testimonial-section-three">
		<div className="bg bg-pattern-3"></div>
		<div className="auto-container">
			<div className="sec-title mb-0">
				<span className="sub-title">clients testimonial</span>
				<h2>Current world is full of <br/>digital requirement</h2>
			</div>

			<Swiper {...swiperOptions} className="two-items-carousel owl-carousel default-navs">
				<SwiperSlide>
					<div className="testimonial-block-three">
						<div className="inner-box">
							<div className="info-box">
								<figure className="thumb">
									<img src="images/resource/testi-thumb2-1.jpg" alt=""/>
									<span className="icon fa fa-quote-right"></span>
								</figure>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<h6 className="name">Dianne Russell</h6>
								<span className="designation">President of Sales</span>
							</div>
							<div className="text">Financial planners help people to gain knowledge about how to invest and save their money in the most efficient way ever. Many people all across the country use them</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block-three">
						<div className="inner-box">
							<div className="info-box">
								<figure className="thumb">
									<img src="images/resource/testi-thumb2-2.jpg" alt=""/>
									<span className="icon fa fa-quote-right"></span>
								</figure>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<h6 className="name">Eleanor Pena</h6>
								<span className="designation">Nursing Assistant</span>
							</div>
							<div className="text">Financial planners help people to gain knowledge about how to invest and save their money in the most efficient way ever. Many people all across the country use them</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block-three">
						<div className="inner-box">
							<div className="info-box">
								<figure className="thumb">
									<img src="images/resource/testi-thumb2-1.jpg" alt=""/>
									<span className="icon fa fa-quote-right"></span>
								</figure>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<h6 className="name">Dianne Russell</h6>
								<span className="designation">President of Sales</span>
							</div>
							<div className="text">Financial planners help people to gain knowledge about how to invest and save their money in the most efficient way ever. Many people all across the country use them</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
	</>
	);
};
export default Testimonial3
