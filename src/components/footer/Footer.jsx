import FooterNav from "./FooterNav";

function Footer() {
  return (
    <>
    <footer>
      <div className="c-container">
        <FooterNav/>
        <div className="border-2 border-[#E5E7EB] my-10"></div>
        <p className="text-[#9CA3AF] font-base font-medium">© 2023 Softlog</p>
      </div>
    </footer>
    </>
  )
}

export default Footer