import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const Contact4 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
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
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Contact4