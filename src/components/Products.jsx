import figmaImg from '../List/ListImg.svg'

function Products() {
  const items = Array.from({length: 6 }, (_,index)=>({
    id: index + 1,
    title: 'Figma',
    cate: 'Category',
    rating: '4/5',
    review: '20 reviews'
  }))
  return (
    <>
    <section className='pb-30'>
      <div className='c-container'>
        <h1 className='font-semibold text-3xl mb-10'>Popular products</h1>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {items.map((item)=> (
        <li className='p-6 border-2 border-[#D1D5DB] rounded-lg' key={item.id}>
          <div className='flex items-center'>
            <img className='mr-4' src={figmaImg} alt={item.title} />
            <div className='flex flex-1 justify-between'>
              <div>
              <h1 className='font-semibold mb-2'>{item.title}</h1>
              <p className='text-xs py-1 px-4 border-2 border-[#D1D5DB] rounded-md text-[#111827]'>{item.cate}</p>
            </div>

            <div className='flex gap-2'>
              <p className='font-semibold'>⭐ {item.rating}</p>
              <p className='text-[#2563EB] border-b border-[#2563EB]'>({item.review})</p>
            </div>
            </div>
          </div>
        </li>
      ))}
    </ul>

      </div>
    </section>
    
    </>
  )
}

export default Products