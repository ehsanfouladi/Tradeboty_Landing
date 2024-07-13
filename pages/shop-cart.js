import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopCart from "@/components/sections/innerpages/ShopCart"

export default function PageShopCart() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Shop Cart" />

    <ShopCart />
    </Layout>
    </>
  )
}