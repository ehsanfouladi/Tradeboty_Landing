import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Contact from "@/components/sections/innerpages/Contact"
export default function Pagecontact() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Contact Us" />
    <Contact />
    </Layout>
    </>
  )
}