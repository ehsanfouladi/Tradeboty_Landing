import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import About1 from "@/components/sections/innerpages/About1"

export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="About Us" />

    <About1 />
    </Layout>
    </>
  )
}