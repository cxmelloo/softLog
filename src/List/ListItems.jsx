import { useEffect, useState } from 'react';
import ListImg from './ListImg.svg';

const items = [
  {
    id: 1,
    img: ListImg,
    title: 'Figma',
    cate: 'Design',
    rating: 4.2,
    reviews: 20,
    text: 'Figma is a collaborative design platform where teams can create, prototype, and collaborate together.',
  },
  {
    id: 2,
    img: ListImg,
    title: 'Notion',
    cate: 'Productivity',
    rating: 4.8,
    reviews: 35,
    text: 'Notion is an all-in-one workspace for notes, documents, project management, and team collaboration.',
  },
  {
    id: 3,
    img: ListImg,
    title: 'Slack',
    cate: 'Communication',
    rating: 4.4,
    reviews: 42,
    text: 'Slack brings teams together with channels, messaging, file sharing, and integrations in one place.',
  },
  {
    id: 4,
    img: ListImg,
    title: 'Trello',
    cate: 'Project Management',
    rating: 4.1,
    reviews: 28,
    text: 'Trello helps teams organize projects using boards, lists, and cards that make workflows easy to manage.',
  },
  {
    id: 5,
    img: ListImg,
    title: 'Canva',
    cate: 'Design',
    rating: 4.7,
    reviews: 50,
    text: 'Canva makes it easy to create presentations, social media graphics, documents, and other visual content.',
  },
  {
    id: 6,
    img: ListImg,
    title: 'Asana',
    cate: 'Project Management',
    rating: 4.5,
    reviews: 31,
    text: 'Asana helps teams manage tasks, projects, deadlines, and workflows from a single platform.',
  },
  {
    id: 7,
    img: ListImg,
    title: 'Monday.com',
    cate: 'Productivity',
    rating: 4.6,
    reviews: 46,
    text: 'Monday.com is a flexible work platform that helps teams manage projects, workflows, and everyday tasks.',
  },
  {
    id: 8,
    img: ListImg,
    title: 'Jira',
    cate: 'Development',
    rating: 4.3,
    reviews: 39,
    text: 'Jira helps development teams plan, track, and release software while managing their entire workflow.',
  },
  {
    id: 9,
    img: ListImg,
    title: 'Dropbox',
    cate: 'Storage',
    rating: 4.0,
    reviews: 25,
    text: 'Dropbox provides secure cloud storage that makes it easy to store, share, and collaborate on files.',
  },
  {
    id: 10,
    img: ListImg,
    title: 'GitHub',
    cate: 'Development',
    rating: 4.9,
    reviews: 60,
    text: 'GitHub provides developers with tools for hosting code, collaborating, reviewing changes, and managing projects.',
  },
  {
    id: 11,
    img: ListImg,
    title: 'Zoom',
    cate: 'Communication',
    rating: 4.2,
    reviews: 37,
    text: 'Zoom provides video meetings, messaging, and collaboration tools for individuals and teams.',
  },
  {
    id: 12,
    img: ListImg,
    title: 'HubSpot',
    cate: 'Marketing',
    rating: 4.5,
    reviews: 29,
    text: 'HubSpot provides marketing, sales, customer service, and CRM tools to help businesses grow.',
  },
  {
    id: 13,
    img: ListImg,
    title: 'Figma',
    cate: 'Design',
    rating: 4.6,
    reviews: 44,
    text: 'Figma helps designers build modern interfaces, prototypes, design systems, and collaborative experiences.',
  },
  {
    id: 14,
    img: ListImg,
    title: 'Jira',
    cate: 'Development',
    rating: 4.7,
    reviews: 52,
    text: 'Jira gives software teams powerful tools for planning, tracking issues, and managing development workflows.',
  },
  {
    id: 15,
    img: ListImg,
    title: 'Canva',
    cate: 'Design',
    rating: 4.3,
    reviews: 67,
    text: 'Canva provides simple tools for creating beautiful graphics, presentations, posters, and social media content.',
  },
  {
    id: 16,
    img: ListImg,
    title: 'Zoom',
    cate: 'Communication',
    rating: 4.8,
    reviews: 73,
    text: 'Zoom makes it easy for teams and individuals to communicate through reliable video meetings and collaboration tools.',
  },
  {
    id: 17,
    img: ListImg,
    title: 'Notion',
    cate: 'Productivity',
    rating: 4.4,
    reviews: 58,
    text: 'Notion gives teams a flexible workspace for organizing information, projects, documents, and knowledge.',
  },
  {
    id: 18,
    img: ListImg,
    title: 'Dropbox',
    cate: 'Storage',
    rating: 4.6,
    reviews: 41,
    text: 'Dropbox makes file storage, sharing, and collaboration simple with secure cloud-based tools.',
  },
  {
    id: 19,
    img: ListImg,
    title: 'Slack',
    cate: 'Communication',
    rating: 4.7,
    reviews: 81,
    text: 'Slack gives teams a central place for communication, collaboration, file sharing, and useful integrations.',
  },
  {
    id: 20,
    img: ListImg,
    title: 'Monday.com',
    cate: 'Productivity',
    rating: 4.2,
    reviews: 34,
    text: 'Monday.com helps organizations organize projects, automate workflows, and manage everyday work.',
  },
  {
    id: 21,
    img: ListImg,
    title: 'HubSpot',
    cate: 'Marketing',
    rating: 4.8,
    reviews: 64,
    text: 'HubSpot brings CRM, marketing, sales, and customer service tools together in one connected platform.',
  },
  {
    id: 22,
    img: ListImg,
    title: 'Trello',
    cate: 'Project Management',
    rating: 4.5,
    reviews: 47,
    text: 'Trello provides a visual way to organize tasks, projects, deadlines, and team workflows.',
  },
  {
    id: 23,
    img: ListImg,
    title: 'Asana',
    cate: 'Project Management',
    rating: 4.9,
    reviews: 76,
    text: 'Asana helps teams coordinate complex projects, track progress, and stay organized from start to finish.',
  },
  {
    id: 24,
    img: ListImg,
    title: 'GitHub',
    cate: 'Development',
    rating: 4.6,
    reviews: 92,
    text: 'GitHub provides developers with a collaborative environment for code hosting, review, and software development.',
  },
];

function ListItems({ category, rating, sortBy }) {
  const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
    setVisibleCount(6);
  }, [category, rating, sortBy]);

  let filteredItems = items.filter((item) => {
    const categoryMatch =
      category === 'All' || item.cate === category;

    const ratingMatch =
      rating === 'All' || item.rating >= Number(rating);

    return categoryMatch && ratingMatch;
  });

  if (sortBy === 'highest-rating') {
    filteredItems.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === 'most-reviews') {
    filteredItems.sort((a, b) => b.reviews - a.reviews);
  }

  if (sortBy === 'az') {
    filteredItems.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sortBy === 'za') {
    filteredItems.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  const visibleItems = filteredItems.slice(
    0,
    visibleCount
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + 6, filteredItems.length)
    );
  };

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleItems.map((item) => (
          <li key={item.id} className="border-2 border-[#D1D5DB] rounded-lg p-6 h-full flex flex-col">

            <div className="flex items-start mb-6">
              <img className="mr-4 shrink-0" src={item.img} alt={item.title}/>

              <div className="flex-1 flex justify-between gap-3">
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs py-1 px-4 border-2 border-[#D1D5DB] rounded-md text-[#111827] inline-block">{item.cate}</p>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-semibold whitespace-nowrap">⭐ {item.rating.toFixed(1)}/5</span>
                  <p className="text-[#2563EB]">({item.reviews} reviews)</p>
                </div>

              </div>
            </div>

            <div>
              <p className="mb-2">{item.text}</p>
              <span className="text-[#2563EB] border-b-2 border-[#2563EB]">Read more</span>
            </div>

            <div className="mt-auto pt-6 flex justify-between gap-4">
              <button className="white-btn px-6 sm:px-5 lg:px-8 flex-1">Show more</button>
              <button className="blue-btn px-6 sm:px-5 lg:px-8 flex-1">Try for free</button>
            </div>

          </li>
        ))}
      </ul>

      {filteredItems.length === 0 && (
        <p className="text-center py-10">No listings found.</p>
      )}

      {visibleCount < filteredItems.length && (
        <button onClick={handleLoadMore} className="white-btn mt-10 md:mt-20 block mx-auto">Load more</button>
      )}
    </>
  );
}

export default ListItems;
