import Layout from "@/components/layout/Layout"
import About5 from "@/components/sections/About5"
import Banner5 from "@/components/sections/Banner5"
import Contact5 from "@/components/sections/Contact5"
import Funfact5 from "@/components/sections/Funfact5"
import News5 from "@/components/sections/News5"
import Process5 from "@/components/sections/Process5"
import Projects5 from "@/components/sections/Projects5"
import Services5 from "@/components/sections/Services5"
import Subscribe5 from "@/components/sections/Subscribe5"
import Team5 from "@/components/sections/Team5"
import Testimonial5 from "@/components/sections/Testimonial5"
export default function Home5() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={5}>
                <Banner5 />
                <About5 />
                <Services5 />
                <Funfact5 />
                <Projects5 />
                <Process5 />
                <Subscribe5 />
                <Testimonial5 />
                <Team5 />
                <Contact5 />
                <News5 />
            </Layout>
        </>
    )
}