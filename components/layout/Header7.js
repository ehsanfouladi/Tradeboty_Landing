import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header7({ scroll, isSearch, handleSearch, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className={`main-header header-style-seven ${isSearch ? "moblie-search-active" : ""}`}>

            <div class="header-top">
			<div class="inner-container">
				<div class="top-left">
					<div class="text">Using user feedback to create a million dollar</div>
				</div>
				
				<div class="top-right">
					<ul class="list-style-one">
						<li><i class="fa fa-phone"></i> <Link href="#">(629) 555-0129</Link></li>
						<li><i class="fa fa-envelope"></i> <Link href="#">info@example.com</Link></li>
						<li><i class="fa fa-map-marker-alt"></i> 6391 Elgin St. Celina, 10299</li>
					</ul>
					<span class="divider"></span>
					<ul class="social-icon-one light">
						<li>Follow On:</li>
						<li><Link href="#"><span class="fab fa-facebook-f"></span></Link></li>
						<li><Link href="#"><span class="fab fa-instagram"></span></Link></li>
						<li><Link href="#"><span class="fab fa-twitter"></span></Link></li>
						<li><Link href="#"><span class="fab fa-linkedin"></span></Link></li>
					</ul>
				</div>
			</div>
		</div>
		  
		<div class="header-lower">
			<div class="main-box">
				<div class="logo-box">
					<div class="logo"><Link href="/"><img src="images/logo-3.png" alt="" title="Digicod"/></Link></div>
				</div>

				<div class="nav-outer">    
					<nav class="nav main-menu">
                        <Menu />
					</nav>

					<div class="outer-box">

						<Link href="page-contact" class="theme-btn btn-style-one"><span class="btn-title"><i class="fa fa-arrow-right "></i> Get a quote</span></Link>
						
						<button class="ui-btn ui-btn toggle-hidden-bar" onClick={handleMobileMenu}><span class="fa fa-bars"></span></button>
						<div class="mobile-nav-toggler" onClick={handleMobileMenu}><span class="icon lnr-icon-bars"></span></div>
					</div>
				</div>
			</div>
		</div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><img src="/images/logo-3.png" alt=""/></Link></div>
                            <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="/mailto:help@company.com">help@company.com</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" onClick={handleSearch} />
                    <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/"><img src="/images/logo-2.png" alt="" /></Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <Menu />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header >

        </>
    )
}
