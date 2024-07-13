import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ProjectDetails from "@/components/sections/innerpages/ProjectDetails"
export default function pageProjectDetails() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Project Details" />
    <ProjectDetails />
    </Layout>
    </>
  )
}