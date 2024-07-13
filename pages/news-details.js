import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewsDetails from "@/components/sections/innerpages/NewsDetails"
export default function pageNewsDetails() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="News Details" />
    <NewsDetails />
    </Layout>
    </>
  )
}