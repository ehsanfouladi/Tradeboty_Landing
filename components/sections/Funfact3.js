import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact3 = () => {
    return (
        <>
            <section className="fun-fact-section-three pull-down">
                <div className="bg-shape"></div>
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            <div className="counter-block-three col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner">
                                    <i className="icon flaticon-title"></i>
                                    <div className="count-box"><CounterUp count={20} time={3} />+</div>
                                    <h6 className="counter-title">Winning award</h6>
                                </div>
                            </div>

                            <div className="counter-block-three col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner">
                                    <i className="icon flaticon-bar-chart-1"></i>
                                    <div className="count-box"><CounterUp count={100} time={3} />+</div>
                                    <h6 className="counter-title">Total Project</h6>
                                </div>
                            </div>

                            <div className="counter-block-three col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-love-planet"></i>
                                        <div className="count-box"><CounterUp count={12} time={3} />k+</div>
                                        <h6 className="counter-title">Setishfied Client</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block-three col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-workers"></i>
                                        <div className="count-box"><CounterUp count={90} time={3} />k+</div>
                                        <h6 className="counter-title">Team Member</h6>
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
export default Funfact3
