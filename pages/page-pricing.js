import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Pricing from "@/components/sections/innerpages/Pricing"

export default function PagePricing() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Pricing" />

    <Pricing />
    </Layout>
    </>
  )
}