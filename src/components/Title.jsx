import { Link } from "react-router-dom";
import Arrow from '../Related/arrow.svg'
import BlogList from "../Blog/BlogList";

function Title() {
  return (
    <>
    <section className="py-30">
      <div className="c-container">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-[#111827] text-3xl font-semibold">This is a title</h1>
          <Link className="flex items-center gap-2" to='blog'>
          <p className="font-medium text-base">Go to blog</p>
          <img src={Arrow} alt="arrow"/>
          </Link>
        </div>

        <BlogList/>
      </div>
    </section>
    </>
  )
}

export default Title