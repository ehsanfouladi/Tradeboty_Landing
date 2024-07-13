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
	pagination:{clickable:true},

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
const Testimonial1 = () => {
	return (
	<>
	<section className="testimonial-section">
		<div className="auto-container">
			<div className="sec-title text-center">
				<span className="sub-title">client testimonial</span>
				<h2>Empowering your <br/>online presence</h2>
			</div>

			<Swiper {...swiperOptions} className="two-items-carousel owl-carousel disable-navs">
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
							<div className="info-box">
								<div className="quote-icon"><span className="icon fa fa-quote-right"></span></div>
								<h4 className="name">Robert Fox</h4>
								<span className="designation">Marketing Coordinator</span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
							</div>
							<div className="text">Financial planners help people to gain knowledge about how toio invest and save their money in the most efficient way ever. Many people all across the country use them</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
							<div className="info-box">
								<div className="quote-icon"><span className="icon fa fa-quote-right"></span></div>
								<h4 className="name">Wade Warren</h4>
								<span className="designation">Marketing Coordinator</span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
							</div>
							<div className="text">Financial planners help people to gain knowledge about how toio invest and save their money in the most efficient way ever. Many people all across the country use them</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
							<div className="info-box">
								<div className="quote-icon"><span className="icon fa fa-quote-right"></span></div>
								<h4 className="name">Robert Fox</h4>
								<span className="designation">Marketing Coordinator</span>
								<div className="rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
							</div>
							<div className="text">Financial planners help people to gain knowledge about how toio invest and save their money in the most efficient way ever. Many people all across the country use them</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
	</>
	);
};
export default Testimonial1
