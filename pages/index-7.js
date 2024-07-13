import Layout from "@/components/layout/Layout"
import About7 from "@/components/sections/About7"
import Banner7 from "@/components/sections/Banner7"
import Clients7 from "@/components/sections/Clients7"
import Process7 from "@/components/sections/Process7"
import Projects7 from "@/components/sections/Projects7"
import Services7 from "@/components/sections/Services7"
import Team7 from "@/components/sections/Team7"
import WhyChooseUs7 from "@/components/sections/WhyChooseUs7"
export default function Home7() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <Banner7 />
                <About7 />
                <Services7 />
                <Projects7 />
                <WhyChooseUs7 />
                <Team7 />
                <Clients7 />
                <Process7 />
            </Layout>
        </>
    )
}