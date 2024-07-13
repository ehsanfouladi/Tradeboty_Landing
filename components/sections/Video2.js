import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const Video2 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
		<section className="contact-section-two">
			<div className="auto-container">
				<div className="outer-box">
					<div className="row">
						<div className="form-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
							<div className="inner-column">
								<div className="contact-form-two wow fadeInLeft">
									<div className="sec-title">
										<span className="sub-title">talk to us</span>
										<h2>Crafting digital strategies<br/> that work</h2>
									</div>

									<form method="post" action="get" id="contact-form">
										<div className="row">
											<div className="form-group col-lg-6 col-md-6">
												<input type="text" name="full_name" placeholder="Your Name" required/>
											</div>
											<div className="form-group col-lg-6 col-md-6">
												<input type="email" name="email" placeholder="Your Email" required/>
											</div>
											<div className="form-group col-lg-6 col-md-6">
												<input type="text" name="phone" placeholder="Phone Number" required/>
											</div>
											<div className="form-group col-lg-6 col-md-6">
												<input type="text" name="subject" placeholder="Subject" required/>
											</div>
											<div className="form-group col-lg-12">
												<textarea name="message" placeholder="Message" required></textarea>
											</div>
											<div className="form-group col-lg-12">
												<button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send Here</span></button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>

						<div className="image-column col-lg-6 col-md-12">
							<div className="inner-column">
								<div className="image-box">
									<figure className="image overlay-anim"><img src="images/resource/contact-2.jpg" alt=""/></figure>
									<a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa fa-play" aria-hidden="true"></i></a>
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
export default Video2
