function Hero({title, desc}) {
  return (
    <>
    <div className="bg-[linear-gradient(90deg,#110E23,#50206C)] py-30">
      <div className="c-container">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-5">{title}</h2>

          <p className="text-center text-base md:text-2xl text-white">{desc}</p>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Hero