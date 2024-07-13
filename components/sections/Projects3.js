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
const Projects3 = () => {
	return (
	<>
	<section className="projects-section-three">
		<div className="auto-container">
			<div className="sec-title text-center">
				<span className="sub-title">Our gallery</span>
				<h2>Building your digital <br/>future</h2>
			</div>

			<div className="carousel-outer">
			<Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme disable-navs">
				<SwiperSlide>
					<div className="project-block-three">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="images/resource/project3-1.jpg" data-fancybox="" data-caption=""><img src="images/resource/project3-1.jpg" alt=""/></Link></figure>
								<Link href="page-project-details" className="icon"><i className="fa fa-plus"></i></Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-three">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="images/resource/project3-2.jpg" data-fancybox="" data-caption=""><img src="images/resource/project3-2.jpg" alt=""/></Link></figure>
								<Link href="page-project-details" className="icon"><i className="fa fa-plus"></i></Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-three">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="images/resource/project3-3.jpg" data-fancybox="" data-caption=""><img src="images/resource/project3-3.jpg" alt=""/></Link></figure>
								<Link href="page-project-details" className="icon"><i className="fa fa-plus"></i></Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-three">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="images/resource/project3-4.jpg" data-fancybox="" data-caption=""><img src="images/resource/project3-4.jpg" alt=""/></Link></figure>
								<Link href="page-project-details" className="icon"><i className="fa fa-plus"></i></Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-three">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="images/resource/project3-5.jpg" data-fancybox="" data-caption=""><img src="images/resource/project3-5.jpg" alt=""/></Link></figure>
								<Link href="page-project-details" className="icon"><i className="fa fa-plus"></i></Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project-block-three">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="images/resource/project3-1.jpg" data-fancybox="" data-caption=""><img src="images/resource/project3-1.jpg" alt=""/></Link></figure>
								<Link href="page-project-details" className="icon"><i className="fa fa-plus"></i></Link>
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
export default Projects3
