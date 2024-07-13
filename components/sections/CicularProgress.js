import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const CicularProgress = () => {
    const percentage = 80;
    return (
        <>
	<section className="contact-section-three">
		<div className="auto-container">
			<div className="outer-box">
				<div className="row">
					<div className="form-column col-lg-6 col-md-12 col-sm-12 order-2">
						<div className="inner-column">
							<div className="contact-form wow fadeInLeft">
								<div className="sec-title">
									<span className="sub-title">Send a message</span>
									<h2>Enhancing digital experiences</h2>
								</div>

								<form method="post" action="get" id="contact-form">
									<div className="row">
										<div className="form-group col-lg-12">
											<div className="input-outer">
												<input type="text" name="full_name" placeholder="Your Name" required/>
												<span className="icon fa fa-user"></span>
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
												<input type="email" name="Email" placeholder="Your Email" required/>
												<span className="icon fa fa-envelope"></span>
											</div>
										</div>

										<div className="form-group col-lg-12">
											<div className="input-outer">
												<textarea name="message" placeholder="Message" required></textarea>
												<span className="icon fa fa-paper-plane"></span>
											</div>
										</div>
						
										<div className="form-group col-lg-12">
											<button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send Now</span></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className="image-column col-lg-6 col-md-12">
						<div className="inner-column">
							<div className="image-box">
								<figure className="image overlay-anim"><img src="images/resource/contact-3.jpg" alt=""/></figure>
								<div className="skill-box wow fadeInUp">
									<div className="pie-graph">
										<div className="graph-outer">
                                        <CircularProgressbar value={80} text={`${percentage}%`}strokeWidth={8} styles={buildStyles({
                                                        textColor: "#000",
                                                        trailColor: '#E3E3E3',
                                                        pathColor: '#22D36B',
                                                    })}/>
										</div>
									</div>
									<h6 className="title">Agency Design</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
};
export default CicularProgress