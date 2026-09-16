import reviewImg from '../assets/Review.svg'

function Review() {
  return (
    <section className="w-full pb-20">
      <div className="c-container">
        <div className="w-full bg-[#F3F4F6] rounded-xl overflow-hidden flex flex-col-reverse md:flex-row">

          <div className="w-full md:w-1/2 flex flex-col justify-center px-8 ">
            <h1 className="font-bold text-4xl md:text-5xl text-[#111827]">Using products?</h1>
            <h2 className="font-semibold text-4xl md:text-5xl text-[#6B7280] mb-10">Write a review</h2>
            <button className="blue-btn w-full md:w-fit px-7 mb-10 md:mb-0">Write a review</button>
          </div>

          <div className="w-full md:w-1/2 shrink-0 flex items-center justify-center">
            <img className="block w-full h-auto" src={reviewImg} alt="Review Image"/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Review
