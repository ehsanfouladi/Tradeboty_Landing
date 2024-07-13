
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'
import Footer4 from './Footer4'
import Footer5 from './Footer5'
import Footer6 from './Footer6'
import Footer7 from './Footer7'
import Header1 from "./Header1"
import Header2 from './Header2'
import Header3 from './Header3'
import Header4 from './Header4'
import Header5 from './Header5'
import Header6 from './Header6'
import Header7 from './Header7'
import PageHead from './PageHead'

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)

    useEffect(() => {

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
                {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
                {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
                {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
                {headerStyle == 6 ? <Header6 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
                {headerStyle == 7 ? <Header7 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}

                <main className="main">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                    {children}
                </main>

                {!footerStyle && < Footer1 />}
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}
                {footerStyle == 3 ? < Footer3 /> : null}
                {footerStyle == 4 ? < Footer4 /> : null}
                {footerStyle == 5 ? < Footer5 /> : null}
                {footerStyle == 6 ? < Footer6 /> : null}
                {footerStyle == 7 ? < Footer7 /> : null}

            </div>
                <BackToTop />
        </>
    )
}
