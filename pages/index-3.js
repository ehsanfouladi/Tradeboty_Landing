import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Banner3 from "@/components/sections/Banner3"
import CicularProgress from "@/components/sections/CicularProgress"
import Clients3 from "@/components/sections/Clients3"
import Faq3 from "@/components/sections/Faq3"
import Funfact3 from "@/components/sections/Funfact3"
import News3 from "@/components/sections/News3"
import Projects3 from "@/components/sections/Projects3"
import Services3 from "@/components/sections/Services3"
import Team3 from "@/components/sections/Team3"
import Testimonial3 from "@/components/sections/Testimonial3"
import Video3 from "@/components/sections/Video3"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner3 />
                <About3 />
                <Services3 />
                <Funfact3 />
                <CicularProgress />
                <Projects3 />
                <Faq3 />
                <Team3 />
                <Video3 />
                <Clients3 />
                <Testimonial3 />
                <News3 />
            </Layout>
        </>
    )
}