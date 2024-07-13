import Link from "next/link"
import { useState } from 'react'
const Faq6 = () => {
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
            <section className="faq-section-five">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            <div className="content-column col-xl-6 col-lg-12 order-xl-2 wow fadeInLeft">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="sub-title">ask question</span>
                                        <h2>There Big opportunity of Company</h2>
                                    </div>

                                    <ul className="accordion-box style-five wow fadeInRight animated">
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>What types of issues can Help Desk?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Lorem Ipsum is simply dummy text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum Lorem Ipsum is simply dummy text of the printing Lorem.</div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>What services do digital agencies offer?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Lorem Ipsum is simply dummy text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum Lorem Ipsum is simply dummy text of the printing Lorem.</div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>What the cost of Help Desk and Support services?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Lorem Ipsum is simply dummy text of the printing Lorem Ips is simply dummy text of the printi Lorem Ipsum Lorem Ipsum is simply dummy text of the printing Lorem.</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="image-column col-xl-6 col-lg-12 wow fadeInRight">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <figure className="image overlay-anim"><Link href="#"><img src="images/resource/faq5-1.jpg" alt=""/></Link></figure>
                                        <div className="exp-box">
                                            <div className="icon-box">
                                                <span className="icon flaticon-workers"></span>
                                            </div>
                                            <h6 className="title">200+</h6>
                                            <span className="text">Team member</span>
                                        </div>
                                    </div>

                                    <div className="image-box">
                                        <figure className="image-2 overlay-anim"><Link href="#"><img src="images/resource/faq5-2.jpg" alt=""/></Link></figure>
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
export default Faq6
