import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 5,
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
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 5,
			// spaceBetween: 30,
		},
	}
};
const Projects4 = () => {
	return (
	<>
	<section className="projects-section-four">
		<div className="auto-container">
			<div className="sec-title mb-0">
				<span className="sub-title">Our gallery</span>
				<h2>Your digital success is our <br/>top priority</h2>
			</div>
			<div className="carousel-outer">
			<Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme default-navs-two">
				<SwiperSlide>
					<div className="project-block-four">
						<div className="inner-box">
							<figure className="image"><Link href="page-project-details"><img src="images/resource/project4-1.jpg" alt=""/></Link></figure>
							<div className="info-box">
								<i className="icon fa fa-angles-right"></i>
								<h6 className="title"><Link href="page-project-details">User Development</Link></h6>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-four">
						<div className="inner-box">
							<figure className="image"><Link href="page-project-details"><img src="images/resource/project4-2.jpg" alt=""/></Link></figure>
							<div className="info-box">
								<i className="icon fa fa-angles-right"></i>
								<h6 className="title"><Link href="page-project-details">User Development</Link></h6>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-four">
						<div className="inner-box">
							<figure className="image"><Link href="page-project-details"><img src="images/resource/project4-3.jpg" alt=""/></Link></figure>
							<div className="info-box">
								<i className="icon fa fa-angles-right"></i>
								<h6 className="title"><Link href="page-project-details">User Development</Link></h6>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-four">
						<div className="inner-box">
							<figure className="image"><Link href="page-project-details"><img src="images/resource/project4-4.jpg" alt=""/></Link></figure>
							<div className="info-box">
								<i className="icon fa fa-angles-right"></i>
								<h6 className="title"><Link href="page-project-details">User Development</Link></h6>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-four">
						<div className="inner-box">
							<figure className="image"><Link href="page-project-details"><img src="images/resource/project4-5.jpg" alt=""/></Link></figure>
							<div className="info-box">
								<i className="icon fa fa-angles-right"></i>
								<h6 className="title"><Link href="page-project-details">User Development</Link></h6>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-four">
						<div className="inner-box">
							<figure className="image"><Link href="page-project-details"><img src="images/resource/project4-1.jpg" alt=""/></Link></figure>
							<div className="info-box">
								<i className="icon fa fa-angles-right"></i>
								<h6 className="title"><Link href="page-project-details">User Development</Link></h6>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			</div>
		</div>
	</section>
	</>
	);
};
export default Projects4
