import { useState } from 'react';
import ListItems from './ListItems';
import filterImg from './Filter.svg';

function List() {
  const [filterOpen, setFilterOpen] = useState(false);

  const [category, setCategory] = useState('All');
  const [rating, setRating] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  return (
    <section className="py-17">
      <div className="c-container">

        <div className="flex items-center justify-between mb-10 relative">
          <p><span className="font-bold">24</span> listings</p>

          <button onClick={() => setFilterOpen(!filterOpen)} className="white-btn flex gap-2 items-center">
            <p>Filter</p>
            <img src={filterImg} alt="filter img" />
          </button>

          {filterOpen && (
            <div className="absolute right-0 top-14 z-20 bg-white border-2 border-[#D1D5DB] rounded-xl p-6 w-70 shadow-lg">

              <div className="mb-5">
                <label className="block font-semibold mb-2">Category</label>

                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border-2 border-[#D1D5DB] rounded-lg px-3 py-2">
                  <option value="All">All categories</option>
                  <option value="Design">Design</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Communication">Communication</option>
                  <option value="Project Management">Project Management</option>
                  <option value="Development">Development</option>
                  <option value="Storage">Storage</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block font-semibold mb-2">Rating</label>

                <select value={rating} onChange={(e) => setRating(e.target.value)} className="w-full border-2 border-[#D1D5DB] rounded-lg px-3 py-2">
                  <option value="All">All ratings</option>
                  <option value="5">5 stars</option>
                  <option value="4.5">4.5+ stars</option>
                  <option value="4">4+ stars</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block font-semibold mb-2">Sort by</label>

                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full border-2 border-[#D1D5DB] rounded-lg px-3 py-2">
                  <option value="default">Default</option>
                  <option value="highest-rating"> Highest rated</option>
                  <option value="most-reviews">Most reviews</option>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                </select>
              </div>

              <button onClick={() => { setCategory('All'); setRating('All'); setSortBy('default');}}
                className="white-btn w-full">Clear filters</button>
            </div>
          )}
        </div>

        <ListItems 
          category={category}
          rating={rating}
          sortBy={sortBy}
        />

      </div>
    </section>
  );
}

export default List;
