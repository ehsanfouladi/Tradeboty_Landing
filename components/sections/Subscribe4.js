const Subscribe4 = () => {
    return (
        <>
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
        </>
    );
};
export default Subscribe4