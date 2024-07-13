import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact1 = () => {
    return (
        <>
            <section className="fun-fact-section pull-down">
                <div className="bg bg-pattern-1"></div>
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-target"></i>
                                        <div className="count-box"><CounterUp count={50} time={3} />k</div>
                                        <h6 className="counter-title">Project complete</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-man"></i>
                                        <div className="count-box"><CounterUp count={38} time={3} />k</div>
                                        <h6 className="counter-title">Happy Client</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-workers"></i>
                                        <div className="count-box"><CounterUp count={12} time={3} />k</div>
                                        <h6 className="counter-title">Team Members</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon flaticon-title"></i>
                                        <div className="count-box"><CounterUp count={34} time={3} />k</div>
                                        <h6 className="counter-title">Winning Award</h6>
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
export default Funfact1
