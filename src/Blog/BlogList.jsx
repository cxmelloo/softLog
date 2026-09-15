import pfp from '../Blog/pfp.png'
import BlogImg from '../Blog/BlogImg.svg'

function BlogList() {
  const items = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    pfp: pfp,
    name: 'Jackie Colburn',
    desc: 'Elon Musk Is Approaching Twitter As If Its Users Are Interchangeable. Is He Right?',
    cate: 'Label',
    date: 'Nov 4, 2022',
    img: BlogImg
  }))

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items.map((item) => (
        <li className="border-2 border-[#D1D5DB] rounded-xl overflow-hidden flex flex-col md:flex-col lg:flex-row p-3 items-center" key={item.id}>
          <div className="hidden md:block md:order-first md:w-full md:h-40 lg:order-last lg:w-fit lg:h-auto lg:shrink-0">
            <img className="w-full h-full object-cover" src={BlogImg}alt="image"/>
          </div>

          <div className="p-3 flex-1 min-w-0">
            <div className="flex gap-3 mb-3">
              <img src={pfp} alt={item.name} />
              <h5 className="font-semibold">{item.name}</h5>
            </div>

            <p className="font-semibold text-lg mb-3">{item.desc}</p>

            <div className="flex gap-4">
              <p className="text-[#6B7280]">{item.date}</p>
              <p className="text-xs py-1 px-4 border-2 border-[#D1D5DB] rounded-md text-[#111827]">{item.cate}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}


export default BlogList