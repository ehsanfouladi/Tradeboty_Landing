import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
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
const About1 = () => {
    const [isOpen, setOpen] = useState(false)
	const [isActive, setIsActive] = useState({
		status: false,
		key: 1,
	})
  
	const handleClick = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
			})
		} else {
			setIsActive({
				status: true,
				key,
			})
		}
	}
    return (
        <>
        <section className="about-section-four">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-7 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">About us</span>
                                <h2>Innovative Technology for <br/>Modern Business</h2>
                                <div className="text">Lorem ipsum dolor sit amet consectetur Amet fermentum  sapien montes mattis vulputates Bibendum a tortor faucibus eu risus dui Erat id  habitasse ut scelerisque lectus euismod velit Egestas arcu tempus</div>
                            </div>

                            <div className="row">
                                <div className="info-box col-lg-6 col-md-6">
                                    <div className="inner">
                                        <i className="icon flaticon-settings-2"></i>
                                        <h6 className="title">Web Development</h6>
                                    </div>
                                </div>
                                <div className="info-box col-lg-6 col-md-6">
                                    <div className="inner">
                                        <i className="icon flaticon-workers"></i>
                                        <h6 className="title">Network Management</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-box animate-2">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-xl-5 col-lg-6">
                        <div className="inner-column wow fadeInLeft">
                            <div className="image-box">
                                <div className="icon icon-dots-5 bounce-y"></div>
                                <figure className="image overlay-anim wow fadeInUp"><img src="images/resource/about4-1.jpg" alt=""/></figure>
                                <div className="exp-box">
                                    <h2 className="title">10</h2>
                                    <p className="text">years experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		<section className="subscribe-section">
			<div className="bg bg-pattern-5"></div>
			<div className="auto-container">
				<div className="row">
					<div className="title-column col-xl-6">
						<div className="inner-column">
							<h2 className="title">Subscribe our newsletter for any update informations</h2>
						</div>
					</div>
					<div className="form-column col-xl-6">
						<div className="newsletter-form">
							<form method="post" action="#">
								<div className="form-group">
									<input type="email" name="email" className="email" placeholder="Type email id" required=""/>
									<button type="button" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Subscribe</span></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section className="faqs-section-four pt-0">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        <div className="faq-column col-xl-7 col-lg-12 wow fadeInLeft">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our FAQ</span>
                                    <h2>Frequently Asked Question?</h2>
                                </div>
                                
                            <ul className="accordion-box style-four wow fadeInRight">
                                <li className="accordion block">
                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>How much does your service cost ? <div className="icon fa fa-angle-double-right"></div></div>
                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Lorem ipsum dolor sit amet consectetur. Aliquam ullamcorper id pretium diam ame lacus. Et lectus sem vitae feugiat arcu velit massa. Magna a pharetra quam.</div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="accordion block">
                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>How do I know if my project is on track ? <div className="icon fa fa-angle-double-right"></div></div>
                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Lorem ipsum dolor sit amet consectetur. Aliquam ullamcorper id pretium diam ame lacus. Et lectus sem vitae feugiat arcu velit massa. Magna a pharetra quam.</div>
                                        </div>
                                    </div>
                                </li>

                                <li className="accordion block">
                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>What is your process for creating digital solutions ? <div className="icon fa fa-angle-double-right"></div></div>
                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Lorem ipsum dolor sit amet consectetur. Aliquam ullamcorper id pretium diam ame lacus. Et lectus sem vitae feugiat arcu velit massa. Magna a pharetra quam.</div>
                                        </div>
                                    </div>
                                </li>

                                <li className="accordion block">
                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>Do you offer ongoing support and maintenance ? <div className="icon fa fa-angle-double-right"></div></div>
                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                        <div className="content">
                                            <div className="text">Lorem ipsum dolor sit amet consectetur. Aliquam ullamcorper id pretium diam ame lacus. Et lectus sem vitae feugiat arcu velit massa. Magna a pharetra quam.</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </div>
                        </div>

                        <div className="image-column col-xl-5 col-lg-12 wow fadeInRight">
                            <div className="inner-column">
                                <figure className="image"><img src="images/resource/faq4-1.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="fun-fact-section-four">
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        <div className="counter-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner">
                                <div className="content">
                                    <i className="icon flaticon-love-planet"></i>
                                    <div className="count-box"><CounterUp count={900} time={3} />+</div>
                                    <h6 className="counter-title">Client review</h6>
                                </div>
                            </div>
                        </div>

                        <div className="counter-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <div className="content">
                                    <i className="icon flaticon-workers"></i>
                                    <div className="count-box"><CounterUp count={200} time={3} />+</div>
                                    <h6 className="counter-title">Team member</h6>
                                </div>
                            </div>
                        </div>

                        <div className="counter-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                                <div className="content">
                                    <i className="icon flaticon-target"></i>
                                    <div className="count-box"><CounterUp count={10} time={3} />k+</div>
                                    <h6 className="counter-title">Complete project</h6>
                                </div>
                            </div>
                        </div>

                        <div className="counter-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <div className="content">
                                    <i className="icon flaticon-title"></i>
                                    <div className="count-box"><CounterUp count={20} time={3} />+</div>
                                    <h6 className="counter-title">Winning award</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="contact-section-four pull-up">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        <div className="form-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
                            <div className="inner-column">
                                <div className="contact-form style-two wow fadeInLeft">
                                    <div className="sec-title">
                                        <span className="sub-title">Contact us</span>
                                        <h2>Looking for the Best <br/>Solutions?</h2>
                                    </div>

                                    <form method="post" action="get" id="contact-form">
                                        <div className="row">
                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <input type="text" name="full_name" placeholder="Your Name" required/>
                                                    <span className="icon fa fa-at"></span>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <input type="text" name="Phone" placeholder="Phone Number" required/>
                                                    <span className="icon fa fa-phone"></span>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <input type="email" name="Email" placeholder="Email address" required/>
                                                    <span className="icon fa fa-paper-plane"></span>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <textarea name="message" placeholder="Your Message" required></textarea>
                                                    <span className="icon fa fa-envelope"></span>
                                                </div>
                                            </div>
                            
                                            <div className="form-group col-lg-12">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Submit Now</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <span className="icon icon-lines"></span>
                                    <figure className="image-1"><img src="images/resource/contact4-1.jpg" alt=""/></figure>
                                    <figure className="image-2 overlay-anim"><img src="images/resource/contact4-2.jpg" alt=""/></figure>
                                    <a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa fa-play" aria-hidden="true"></i></a>
                                    <div className="info-box">
                                        <div className="icon-box"><img src="images/icons/circle.png" alt=""/><span className="count">75%</span></div>
                                        <h6 className="title">Daily Activity</h6>
                                        <div className="text">Lorem Ipsum is simply</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default About1
