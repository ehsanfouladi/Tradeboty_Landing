import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import Funfact1 from "@/components/sections/Funfact1"
import Form1 from "@/components/sections/Form1"
import Team1 from "@/components/sections/Team1"
import Faq1 from "@/components/sections/Faq1"
import Testimonial1 from "@/components/sections/Testimonial1"
import News1 from "@/components/sections/News1"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner1 />
                <About1 />
                <Services1 />
                <Funfact1 />
                <Form1 />
                <Team1 />
                <Faq1 />
                <Testimonial1 />
                <News1 />
            </Layout>
        </>
    )
}