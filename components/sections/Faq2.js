import { useState } from 'react'
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Faq2 = () => {
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
	<section className="faqs-section-two">
		<div className="auto-container">
			<div className="row">
				<div className="faq-column col-xl-6 col-lg-12 order-2">
					<div className="inner-column">
						<div className="sec-title">
							<span className="sub-title">ask questions</span>
							<h2>Do You Have Any Question Please?</h2>
						</div>
						
						<ul className="accordion-box style-two wow fadeInRight">
							<li className="accordion block">
								<div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>What is a digital agency? <div className="icon fa fa-plus"></div></div>
								<div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
									<div className="content">
										<div className="text">It is a long established fact that a reader will be disitrict acted bijoy in thei readable content of a page when looking at its layout Thooiie point the of using the table loren ipsum</div>
									</div>
								</div>
							</li>
							
							<li className="accordion block">
								<div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>What services do digital agencies offer? <div className="icon fa fa-plus"></div></div>
								<div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
									<div className="content">
										<div className="text">It is a long established fact that a reader will be disitrict acted bijoy in thei readable content of a page when looking at its layout Thooiie point the of using the table loren ipsum</div>
									</div>
								</div>
							</li>

							<li className="accordion block">
								<div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>Why should I hire a digital agency? <div className="icon fa fa-plus"></div></div>
								<div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
									<div className="content">
										<div className="text">It is a long established fact that a reader will be disitrict acted bijoy in thei readable content of a page when looking at its layout Thooiie point the of using the table loren ipsum</div>
									</div>
								</div>
							</li>

							<li className="accordion block">
								<div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>How much does it cost to hire a digital agency? <div className="icon fa fa-plus"></div></div>
								<div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
									<div className="content">
										<div className="text">It is a long established fact that a reader will be disitrict acted bijoy in thei readable content of a page when looking at its layout Thooiie point the of using the table loren ipsum</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
					<div className="inner-column">
						<figure className="image"><img src="images/resource/faq2-1.jpg" alt=""/></figure>
						<div className="info-box">
							<h4 className="title">Project Management Update</h4>
							<div className="count-box"><CounterUp count={100} time={3} />%</div>
							<h4 className="sub-title">Clients Satisfied</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
};
export default Faq2
