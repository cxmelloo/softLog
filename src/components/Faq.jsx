import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const items = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    question: "This is a question title",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptates quisquam officia rem animi autem?",
  }));

  return (
    <section className="py-30">
      <div className="c-container">
        <h2 className="font-semibold text-3xl mb-10">Frequently asked questions</h2>

      <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
          <li key={item.id} className="rounded-md border-2 border-[#D1D5DB]">
            <button onClick={() => setOpen(open === index ? null : index)} 
            className="flex w-full items-center justify-between px-4 py-5">
              <span className="text-lg text-[#111827] font-semibold">{item.question}</span>
              <span className="w-6 h-6">{open === index ? "−" : "+"}</span>
            </button>

            {open === index && (
              <p className="px-4 pb-5 text-md text-[#111827]">{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default FAQ;