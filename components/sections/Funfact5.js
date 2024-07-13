import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact5 = () => {
    return (
        <>
            <section className="fun-fact-section-five pt-0">
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-workers"></i>
                                        <div className="count-box"><CounterUp count={650} time={3} />+</div>
                                        <h6 className="counter-title">Team Member</h6>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-love-planet"></i>
                                        <div className="count-box"><CounterUp count={900} time={3} />+</div>
                                        <h6 className="counter-title">Client review</h6>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-target"></i>
                                        <div className="count-box"><CounterUp count={5} time={3} />k+</div>
                                        <h6 className="counter-title">Complete Project</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-title"></i>
                                        <div className="count-box"><CounterUp count={100} time={3} />+</div>
                                        <h6 className="counter-title">Winning award</h6>
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
export default Funfact5
