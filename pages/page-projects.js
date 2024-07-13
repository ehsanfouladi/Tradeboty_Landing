import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ProjectGrid from "@/components/sections/innerpages/ProjectGrid"
export default function pageProjectGrid() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Project Grid" />
    <ProjectGrid />
    </Layout>
    </>
  )
}