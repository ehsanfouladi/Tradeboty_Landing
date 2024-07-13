import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamGrid from "@/components/sections/innerpages/TeamGrid"

export default function PageTeamGrid() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Team Grid" />

    <TeamGrid />
    </Layout>
    </>
  )
}