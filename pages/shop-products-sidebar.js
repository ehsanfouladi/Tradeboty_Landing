import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopSidebar from "@/components/sections/innerpages/ShopSidebar"

export default function PageShopSidebar() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Shop Sidebar" />

    <ShopSidebar />
    </Layout>
    </>
  )
}