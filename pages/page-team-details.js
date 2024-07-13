import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import TeamDetails from "@/components/sections/innerpages/TeamDetails"

export default function PageTeamDetails() {
  return (
    <>
    <Layout headerStyle={4} footerStyle={4}>
    <PageTitle pageName="Team Details" />

    <TeamDetails />
    </Layout>
    </>
  )
}