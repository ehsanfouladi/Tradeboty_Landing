import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Banner2 from "@/components/sections/Banner2"
import Clients2 from "@/components/sections/Clients2"
import Faq2 from "@/components/sections/Faq2"
import Funfact2 from "@/components/sections/Funfact2"
import News2 from "@/components/sections/News2"
import Process2 from "@/components/sections/Process2"
import Projects2 from "@/components/sections/Projects2"
import Services2 from "@/components/sections/Services2"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
import Video2 from "@/components/sections/Video2"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner2 />
                <About2 />
                <Services2 />
                <Projects2 />
                <Faq2 />
                <Process2 />
                <Funfact2 />
                <Team2 />
                <Testimonial2 />
                <Clients2 />
                <Video2 />
                <News2 />
            </Layout>
        </>
    )
}