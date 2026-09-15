import filterImg from '../List/Filter.svg'
import ListItems from './ListItems';

function Lists() {
  return (
    <>
    <section className='py-17'>
        <div className='c-container'>
          <div className='flex items-center justify-between mb-10'>
            <p>805 listings</p>
          <button className='white-btn flex gap-2'>
          <p>Filter</p>
          <img src={filterImg} alt="filter img"/>
        </button>
          </div>
          <ListItems/>

          <button className='white-btn mt-20 block mx-auto'>Load more</button>
        </div>
    </section>
    </>
  )
}

export default Lists