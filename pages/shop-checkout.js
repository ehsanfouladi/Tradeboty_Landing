import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopCheckout from "@/components/sections/innerpages/ShopCheckout"

export default function PageShopCheckout() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Shop Checkout" />

    <ShopCheckout />
    </Layout>
    </>
  )
}