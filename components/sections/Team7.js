import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	effect: 'fade',
	grabCursor: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
  // Pagination
  pagination: {
    clickable: true,
    type: 'progressbar',
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
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
	}

};
const Team7 = () => {
	return (
	<>
		<section className="team-section-seven pull-up pb-0">    
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">Expert members</span>
					<h2>Empowering your online presence</h2>
				</div>

				<Swiper {...swiperOptions} className="three-items-carousel owl-carousel owl-theme disable-navs">
					<SwiperSlide>
						<div className="team-block-seven">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details.html"><img src="images/resource/team7-1.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
										<Link href="#"><i className="fab fa-pinterest"></i></Link>
									</div> 
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details.html">Ronald Richards</Link></h4>
									<span className="designation">WordPress</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="team-block-seven">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details.html"><img src="images/resource/team7-2.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
										<Link href="#"><i className="fab fa-pinterest"></i></Link>
									</div>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details.html">Theresa Webb</Link></h4>
									<span className="designation">Human Resource</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="team-block-seven">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details.html"><img src="images/resource/team7-3.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
										<Link href="#"><i className="fab fa-pinterest"></i></Link>
									</div>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details.html">Courtney Henry</Link></h4>
									<span className="designation">Ux Architect</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="team-block-seven">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details.html"><img src="images/resource/team7-1.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
										<Link href="#"><i className="fab fa-pinterest"></i></Link>
									</div>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details.html">Ronald Richards</Link></h4>
									<span className="designation">WordPress</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="team-block-seven">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details.html"><img src="images/resource/team7-2.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
										<Link href="#"><i className="fab fa-pinterest"></i></Link>
									</div>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details.html">Theresa Webb</Link></h4>
									<span className="designation">Human Resource</span>
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
export default Team7
