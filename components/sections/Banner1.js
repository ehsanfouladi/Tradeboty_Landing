import Link from "next/link"
const Banner1 = () => {
    return (
        <>
        <section className="banner-section">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/1.jpg)' }}></div>
            <div className="bg bg-overlay wow fadeIn" data-wow-delay="300ms"></div>

            <div className="auto-container">
                <div className="content-box">
                    <span className="sub-title wow fadeInUp" data-wow-delay="600ms">Crafting digital</span>
                    <h1 className="title wow fadeInUp" data-wow-delay="900ms">Amplify your digital presence</h1>
                    <div className="text wow fadeInUp" data-wow-delay="1200ms">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.</div>
                    <div className="btn-box wow fadeInUp" data-wow-delay="1600ms">
                        <Link href="page-about" className="theme-btn btn-style-one hover-light"><span className="btn-title">Discover More <i className="fa fa-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Banner1