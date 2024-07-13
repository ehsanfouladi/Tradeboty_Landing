import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const About3 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <>
        <section className="about-section-three">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">About us</span>
                                <h2>Where creativity meets <br/>technology</h2>
                                <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is an oi simply</div>
                            </div>

                            <div className="row g-0 blocks-outer">
                                <div className="info-block-two col-lg-6 col-md-6 col-sm-12 mb-sm-50">
                                    <div className="inner-box">
                                        <i className="icon flaticon-diamond-2"></i>
                                        <h4 className="title">Digital Strategy</h4>
                                        <div className="text">Lorem Ipsum simply is dumiomy is text 
                                        Lorem Ipsum is simply is ou our o dummy text</div>
                                    </div>
                                </div>
                                <div className="info-block-two col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <i className="icon flaticon-design-tool"></i>
                                        <h4 className="title">Design and Development</h4>
                                        <div className="text">Lorem Ipsum simply is dumiomy is text 
                                        Lorem Ipsum is simply is ou our o dummy text</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-xl-6 col-lg-12">
                        <div className="inner-column wow fadeInLeft">
                            <div className="image-box">
                                <figure className="image wow fadeInUp"><img src="images/resource/about3-1.jpg" alt=""/></figure>
                                    <a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa fa-play" aria-hidden="true"></i></a>
                            </div>
                            <div className="client-info-box">
                                <div className="inner">
                                    <ul className="clients-thumb">
                                        <li><img src="images/resource/clients-thumb-1.png" alt=""/></li>
                                        <li><img src="images/resource/clients-thumb-2.png" alt=""/></li>
                                        <li><img src="images/resource/clients-thumb-3.png" alt=""/></li>
                                        <li><i className="icon fa-solid fa-plus"></i></li>
                                    </ul>
                                    <h6 className="title">10k+ Clients</h6>
                                    <div className="text">Lorem Ipsum is simply </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
        </>
    );
};
export default About3