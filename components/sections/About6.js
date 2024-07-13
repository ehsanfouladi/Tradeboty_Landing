import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const About6 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
	<section className="about-section-six">
		<div className="auto-container">
			<div className="row">
				<div className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
					<div className="inner-column">
						<div className="sec-title">
							<span className="sub-title">About us</span>
							<h2>Connecting your business with the world</h2>
							<div className="text">Lorem Ipsum is simply dummy text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum Lorem Ipsum is simply dummy text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum</div>
						</div>
						<div className="row">
							<div className="about-block-six col-lg-6 col-md-6">
								<div className="inner">
									<div className="icon-box"><i className="icon flaticon-promotion"></i></div>
									<h4 className="title">Digital Reality</h4>
									<div className="text">Lorem Ipsusimply dummy tex of the printing Lore</div>
								</div>
							</div>
							<div className="about-block-six col-lg-6 col-md-6">
								<div className="inner">
									<div className="icon-box"><i className="icon flaticon-stats"></i></div>
									<h4 className="title">Online Magic</h4>
									<div className="text">Lorem Ipsusimply dummy tex of the printing Lore</div>
								</div>
							</div>
						</div>
						<div className="info-box">
							<figure className="image"><img src="images/resource/about6-3.jpg" alt=""/></figure>
							<div className="text">
								Lorem Ipsum is simply dummy text of the <br/>printing Lorem Ips is simply dumm
							</div>
						</div>
					</div>
				</div>
				<div className="image-column col-xl-6 col-lg-6">
					<div className="inner-column wow fadeInLeft">
						<span className="icon-dots-7 bounce-y"></span>
						<figure className="image-1 wow fadeInUp"><img src="images/resource/about6-1.jpg" alt=""/></figure>
						<figure className="image-2 wow fadeInLeft"><img src="images/resource/about6-2.jpg" alt=""/></figure>
                        <a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa-solid fa-play" aria-hidden="true"></i></a>
						<div className="exp-box bounce-y">
							<div className="inner">
								<div className="icon-box">
									<span className="icon fa fa-medal"></span>
								</div>
								<h4 className="title">Best Awarded Company</h4>
								<p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed</p>
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
export default About6