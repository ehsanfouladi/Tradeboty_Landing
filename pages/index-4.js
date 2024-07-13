import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import Banner4 from "@/components/sections/Banner4"
import Contact4 from "@/components/sections/Contact4"
import Projects4 from "@/components/sections/Projects4"
import Services4 from "@/components/sections/Services4"
import Subscribe4 from "@/components/sections/Subscribe4"
import Team4 from "@/components/sections/Team4"
import Testimonial4 from "@/components/sections/Testimonial4"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={4}>
                <Banner4 />
                <About4 />
                <Services4 />
                <Projects4 />
                <Subscribe4 />
                <Team4 />
                <Contact4 />
                <Testimonial4 />
            </Layout>
        </>
    )
}