import Link from "next/link"
import { useState } from 'react'
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Team4 = () => {
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
		<div className="combine-bg">
			<div className="bg bg-pattern-12"></div>
	
			<section className="team-section-four">    
				<div className="auto-container">
					<div className="sec-title text-center">
						<span className="sub-title">Our Experts</span>
						<h2>Building your brand in the <br/>digital world</h2>
					</div>
	
					<div className="row">
						<div className="team-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details"><img src="images/resource/team4-1.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
									</div> 
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details">John Smith</Link></h4>
									<span className="designation">Web Developer</span>
								</div>
							</div>
						</div>
	
						<div className="team-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details"><img src="images/resource/team4-2.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
									</div>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details">Michael Johnson</Link></h4>
									<span className="designation">Founder & CEO</span>
								</div>
							</div>
						</div>
	
						<div className="team-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-team-details"><img src="images/resource/team4-3.jpg" alt=""/></Link></figure>
									<div className="social-links">
										<Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-facebook-f"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link>
									</div>
								</div>
								<div className="info-box">
									<h4 className="name"><Link href="page-team-details">Emily Jones</Link></h4>
									<span className="designation">Software Developer</span>
								</div>
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
		</div>
        </>
    );
};
export default Team4