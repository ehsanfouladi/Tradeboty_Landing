import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	pagination: true,

};
const Testimonial5 = () => {
	return (
	<>
	<section className="testimonial-section-five pull-up">
		<div className="auto-container">
			<div className="row">
				<div className="testimonial-column col-xl-6 col-lg-7 col-md-12 col-sm-12">
					<div className="inner-column">
						<div className="sec-title style-two">
							<span className="sub-title">Clients testimonial</span>
							<h2>What They Say About US</h2>
						</div>
						
						<div className="carousel-outer">
							<Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme disable-navs default-dots-two">
								<SwiperSlide>
									<div className="testimonial-block-five">
										<div className="inner-box">
											<div className="text">Lorem ipsum dolor sit amet consectetur. Purus consequat pulvinar tincid unt metus nibh pulvinar purus. Feugiat mi ridiculus ac ac habitasse.</div>
											<div className="info-box">
												<figure className="image"><a href="#"><img src="images/resource/testi-thumb5-1.png" alt=""/></a></figure>
												<div className="rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="name-box">
													<h6 className="name">Jessica Lee </h6>
													<span className="designation">(Business Manager)</span>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonial-block-five">
										<div className="inner-box">
											<div className="text">Lorem ipsum dolor sit amet consectetur. Purus consequat pulvinar tincid unt metus nibh pulvinar purus. Feugiat mi ridiculus ac ac habitasse.</div>
											<div className="info-box">
												<figure className="image"><a href="#"><img src="images/resource/testi-thumb5-1.png" alt=""/></a></figure>
												<div className="rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="name-box">
													<h6 className="name">Jessica Lee </h6>
													<span className="designation">(Business Manager)</span>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="testimonial-block-five">
										<div className="inner-box">
											<div className="text">Lorem ipsum dolor sit amet consectetur. Purus consequat pulvinar tincid unt metus nibh pulvinar purus. Feugiat mi ridiculus ac ac habitasse.</div>
											<div className="info-box">
												<figure className="image"><a href="#"><img src="images/resource/testi-thumb5-1.png" alt=""/></a></figure>
												<div className="rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="name-box">
													<h6 className="name">Jessica Lee </h6>
													<span className="designation">(Business Manager)</span>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
					<div className="image-box">
						<figure className="image"><img src="images/resource/testi-img-1.png" alt=""/></figure>
					</div>
				</div>
			</div>
		</div>
	</section>
	</>
	);
};
export default Testimonial5
