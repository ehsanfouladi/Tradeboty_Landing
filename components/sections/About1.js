import Link from "next/link"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const About1 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
	<section className="about-section">
		<div className="auto-container">
			<div className="row">
				<div className="content-column col-xl-6 col-lg-6 order-2 wow fadeInRight" data-wow-delay="600ms">
					<div className="inner-column">
						<div className="sec-title">
							<span className="sub-title">About us</span>
							<h2>Connecting your business with the world</h2>
							<div className="text">Lorem Ipsum is simply dummy text of the printing and estting industry. Lorem Ipsum has been the industry's standard dummy text ever since th 1500s, when</div>
						</div>

						<div className="info-block">
							<div className="inner">
								<div className="icon-box"><i className="icon flaticon-puzzle"></i></div>
								<div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</div>
							</div>
						</div>
						<div className="info-block">
							<div className="inner">
								<div className="icon-box"><i className="icon flaticon-production"></i></div>
								<div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</div>
							</div>
						</div>

						<div className="btn-box">
							<Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More<i className="fa fa-arrow-right"></i></span></Link>
                            <a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa fa-play" aria-hidden="true"></i>
								<span className="title">Watch more videos</span></a>
						</div>
					</div>
				</div>

				<div className="image-column col-xl-6 col-lg-6">
					<div className="inner-column wow fadeInLeft">
						<span className="icon-dots bounce-x"></span>
						<figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about1-1.jpg" alt=""/></figure>
						<figure className="image-2 overlay-anim wow fadeInLeft"><img src="images/resource/about1-2.jpg" alt=""/></figure>
						<div className="exp-box bounce-y">
							<div className="inner">
								<div className="icon-box">
									<span className="icon flaticon-title"></span>
								</div>
								<h4 className="title">30+ Year in Industry</h4>
								<p className="text">Lorem ipsum dolor si amet, consetetur sadipscing elitr, sed</p>
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
export default About1
