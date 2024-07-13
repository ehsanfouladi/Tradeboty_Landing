import Link from "next/link"
const Projects2 = () => {
    return (
        <>
		<section className="projects-section-two">
			<div className="auto-container">
				<div className="sec-title text-center">
					<span className="sub-title">latest project</span>
					<h2>Igniting your digital<br/>presence</h2>
				</div>

				<div className="row">
					<div className="project-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-project-details"><img src="images/resource/project2-1.jpg" alt=""/></Link></figure>
							</div>
							<div className="caption-box">
								<h4 className="title"><Link href="page-project-details">Optimization</Link></h4>
								<Link href="page-project-details" className="icon"><i className="fa fa-plus"></i></Link>
							</div>
						</div>
					</div>

					<div className="project-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-project-details"><img src="images/resource/project2-2.jpg" alt=""/></Link></figure>
							</div>
							<div className="caption-box">
								<h4 className="title"><Link href="page-project-details">Advertising</Link></h4>
								<Link href="page-project-details" className="icon"><i className="fa fa-plus"></i></Link>
							</div>
						</div>
					</div>

					<div className="project-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box">
							<div className="image-box">
								<figure className="image"><Link href="page-project-details"><img src="images/resource/project2-3.jpg" alt=""/></Link></figure>
							</div>
							<div className="caption-box">
								<h4 className="title"><Link href="page-project-details">Management</Link></h4>
								<Link href="page-project-details" className="icon"><i className="fa fa-plus"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
};
export default Projects2