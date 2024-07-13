import { useState } from 'react'
const Faq1 = () => {
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
            <section className="faqs-section">
                <div className="anim-icons">
                    <span className="icon icon-flower"></span>
                    <span className="icon icon-chat"></span>
                </div>
                
                <div className="auto-container">
                    <div className="row">
                        <div className="faq-column col-xl-6 col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">ask question</span>
                                    <h2>Unlocking your online potential</h2>
                                </div>
                                
                                <ul className="accordion-box wow fadeInRight">
                                    <li className="accordion block">
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>How To Start Business Without Investment? <div className="icon fa fa-plus"></div></div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="accordion block">
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>How to Get Your Business Report For Me? <div className="icon fa fa-plus"></div></div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="accordion block">
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>Why should I hire a digital agency? <div className="icon fa fa-plus"></div></div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image-1 overlay-anim"><img src="images/resource/faq1-1.jpg" alt=""/></figure>
                                <figure className="image-2 overlay-anim"><img src="images/resource/faq1-2.jpg" alt=""/></figure>
                                <div className="info-box">
                                    <span className="icon icon-arrow-down"></span>
                                    <div className="count-box"><span className="count-text" data-speed="3000" data-stop="4">0</span>.5k+</div>
                                    <span className="title">Job Done</span>
                                </div>
                                <span className="icon icon-dots-2 bounce-x"></span>
                                <span className="icon icon-arrow-round"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Faq1
