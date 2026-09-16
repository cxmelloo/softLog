import FAQ from "../components/Faq";
import Hero from "../components/Hero";
import Review from "../components/Review";
import Title from "../components/Title";
import Lists from "../List/Lists";
import Relate from "../Related/Relate";

function Home() {
return (
  <>
    <Hero title='CRM software' desc="Accounting software automates an organization's financial functions and transactions with modules including accounts payable, accounts receivable, payroll, billing and general ledger."/>
    <Lists/>
    <Relate/>
    <FAQ/>
    <Review/>
    <Title/>
    <Review/>
    </>
)
} 

export default Home