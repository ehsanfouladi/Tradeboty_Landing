import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import NewsGrid from "@/components/sections/innerpages/NewsGrid"
export default function pageNewsGrid() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="News Grid" />
    <NewsGrid />
    </Layout>
    </>
  )
}