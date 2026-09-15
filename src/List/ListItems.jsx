import ListImg from '../List/ListImg.svg'

function ListItems() {
  const items = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  img: ListImg,
  title: "Figma",
  cate: 'Category',
  rating: "4/5",
  reviews: "20 reviews",
  text: "monday.com Work OS is an open platform where anyone can create and shape the tools they need to run every aspect of their work. By combining building blocks, like apps and integrations, organizations..."
}));
  return (
    <>
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      {items.map((item)=> (
        <li className='border-2 border-[#D1D5DB] rounded-lg p-6' key={item.id}>
          <div className="flex items-center mb-6">
            <img className="mr-4" src={item.img} alt={item.title} />
            
          <div className="flex flex-1 justify-between">
              <div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-xs py-1 px-4 border-2 border-[#D1D5DB] rounded-md text-[#111827]">{item.cate}</p>
              </div>

              <div className="flex gap-2">
                <span className="font-semibold">⭐ {item.rating}</span>
                <p className='text-[#2563EB] border-b border-[#2563EB]'>({item.reviews})</p>
              </div>
            </div>
          </div>

          <p className='mb-2'>{item.text}</p>
          <span className='text-[#2563EB] border-b-2 border-[#2563EB]'>Read more</span>

          <div className='mt-6 justify-between flex'>
            <button className='white-btn px-10 sm:px-5 lg:px-13'>Show more</button>
            <button className='blue-btn px-10 sm:px-5 lg:px-13'>Try for free</button>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}

export default ListItems