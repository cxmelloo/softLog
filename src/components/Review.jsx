import reviewImg from '../assets/Revieww.svg'

function Review() {
  return (
    <section className="pb-20">
      <div className="c-container flex flex-col-reverse md:flex-row items-center justify-between bg-[#F3F4F6] rounded-xl">

        <div className="ml-0 md:ml-20 pt-10 md:pt-0 pb-10 md:pb-0 w-full">
          <h1 className="font-bold text-4xl text-[#111827]">Using products?</h1>
          <h2 className="font-semibold text-4xl text-[#6B7280] mb-10">Write a review</h2>
          <button className="blue-btn w-full md:px-7">Write a review</button>
        </div>

        <div>
          <img className="w-full" src={reviewImg} alt="Review Image"/>
        </div>

      </div>
    </section>
  )
}

export default Review 