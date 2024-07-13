import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Faq from "@/components/sections/innerpages/Faq"

export default function PageFaq() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Faq" />

    <Faq />
    </Layout>
    </>
  )
}