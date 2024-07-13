import Layout from "@/components/layout/Layout"
import About6 from "@/components/sections/About6"
import Banner6 from "@/components/sections/Banner6"
import Clients6 from "@/components/sections/Clients6"
import Faq6 from "@/components/sections/Faq6"
import Process6 from "@/components/sections/Process6"
import Projects6 from "@/components/sections/Projects6"
import Services6 from "@/components/sections/Services6"
import Subscribe6 from "@/components/sections/Subscribe6"
import Team6 from "@/components/sections/Team6"
export default function Home6() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={6}>
                <Banner6 />
                <About6 />
                <Services6 />
                <Projects6 />
                <Faq6 />
                <Team6 />
                <Clients6 />
                <Process6 />
                <Subscribe6 />
            </Layout>
        </>
    )
}