import { useState } from "react";
import { NavLink } from "react-router-dom";

function FooterNav() {
  const [open, setOpen] = useState(null);

  const sections = [
    { title: "Product",
      links: [
        { label: "Categories", to: "/categories" },
        { label: "Write a review", to: "/review" },
        { label: "Claim your profile", to: "/profile" },
      ],
    }, { title: "Company",
      links: [
        { label: "About us", to: "/about" },
        { label: "Press", to: "/press" },
        { label: "Media kit", to: "/media" },
        { label: "Contact", to: "/contact" },
      ],
    }, { title: "Social",
      links: [
        { label: "Twitter", to: "https://x.com/TeamMessi?lang=en", external: true},
        { label: "LinkedIn", to: "https://www.linkedin.com/in/lionel-andr%C3%A9s-messi-cuccitini-70012932a",external: true},
        { label: "Facebook", to: "https://www.facebook.com/leomessi", external: true},
        { label: "Instagram", to: "https://www.instagram.com/leomessi/", external: true},
        { label: "Youtube", to: "https://www.youtube.com/@LeoMessi", external: true,},
      ],
    }, {
      title: "Resources",
      links: [
        { label: "Blog", to: "/blog" },
        { label: "Newsletter", to: "/letter" },
        { label: "Support", to: "/support" },
        { label: "Sitemap", to: "/sitemap" },
      ],
    }, {
      title: "Legal",
      links: [
        { label: "Terms", to: "/terms" },
        { label: "Privacy", to: "/privacy" },
        { label: "Cookies", to: "/cookies" },
      ],
    },
  ];

  const toggleSection = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <nav>
      <div className="hidden md:flex flex-wrap items-start gap-5 mb-10">
        {sections.map((section) => (
          <ul key={section.title} className="grid min-w-53 gap-2">
            <li className="mb-6 font-semibold text-2xl">{section.title}</li>

            {section.links.map((link) => (
              <li key={link.label} className="c-nav">
                {link.external ? (
                  <a href={link.to} target="_blank" rel="noreferrer">{link.label}</a>
                ) : (
                  <NavLink to={link.to}>{link.label}</NavLink>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="md:hidden mb-10">
        {sections.map((section, index) => (
          <div key={section.title} className="border-b-2 border-[#E5E7EB]">

            <button type="button" onClick={() => toggleSection(index)} className="flex w-full items-center justify-between py-5">
              <span className="text-xl font-semibold">{section.title}</span>
              <span className="text-2xl font-normal">{open === index ? "−" : "+"}</span>
            </button>

            {open === index && (
              <ul className="grid gap-3 pb-5">
                {section.links.map((link) => (
                  <li key={link.label} className="c-nav">
                    {link.external ? (
                      <a href={link.to} target="_blank" rel="noreferrer">{link.label}</a>
                    ) : (
                      <NavLink to={link.to}>{link.label}</NavLink>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default FooterNav;