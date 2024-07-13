import { useState } from 'react'
const Faq3 = () => {
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
	<section className="faqs-section-three">
		<div className="auto-container">
			<div className="row">
				<div className="faq-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2">
					<div className="inner-column">
						<div className="sec-title">
							<span className="sub-title">ask questions</span>
							<h2>Do You Have Any Question Please?</h2>
							<div className="text">It is a long established fact that a reader will be distr acted bioiiy the end gail readable content of a page when looking</div>
						</div>
						
						<ul className="accordion-box style-three wow fadeInRight">
							<li className="accordion block">
								<div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>Many desktop publishing packages page ? <div className="icon fa fa-plus"></div></div>
								<div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
									<div className="content">
										<div className="text">It is a long established fact that a reader will be distr acted bioiiy the readable content of a page when looking at its layout  Thoiie point of using.</div>
									</div>
								</div>
							</li>
							
							<li className="accordion block">
								<div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>Contrary to popular belief Ipsum is not simply ? <div className="icon fa fa-plus"></div></div>
								<div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
									<div className="content">
										<div className="text">It is a long established fact that a reader will be distr acted bioiiy the readable content of a page when looking at its layout  Thoiie point of using.</div>
									</div>
								</div>
							</li>

							<li className="accordion block">
								<div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>Why should I hire a digital agency? <div className="icon fa fa-plus"></div></div>
								<div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
									<div className="content">
										<div className="text">It is a long established fact that a reader will be distr acted bioiiy the readable content of a page when looking at its layout  Thoiie point of using.</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
					<div className="inner-column">
						<figure className="image"><img src="images/resource/faq3-1.jpg" alt=""/></figure>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
};
export default Faq3
