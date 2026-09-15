import Img from './arrow.svg'

function RelateList() {
  const items = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title:'CRM Software',
  desc:'Sales software',
  img: Img
}));
  return (
    <>
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      {items.map((item) => (
        <li className='p-6 border-2 border-[#D1D5DB] rounded-lg' key={item.id}>
          <div className='flex items-center justify-between'>
            <div>
            <h1 className='font-semibold text-[#111827] mb-2'>{item.title}</h1>
            <p className='text-xs py-1 px-4 border-2 border-[#D1D5DB] rounded-md text-[#111827]'>{item.desc}</p>
          </div>

          <div>
            <img src={item.img} alt={item.title} />
          </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}

export default RelateList