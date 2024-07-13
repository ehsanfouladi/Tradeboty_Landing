import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Product from "@/components/sections/innerpages/Product"

export default function PageProduct() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Product" />

    <Product />
    </Layout>
    </>
  )
}