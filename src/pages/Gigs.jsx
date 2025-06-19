
import React from 'react';

const Gigs = () => {
  const dummyGigs = [
    {
      id: 1,
      title: "Gaming Chair Brand Collaboration",
      company: "ComfortGaming Co.",
      budget: "$500 - $1,000",
      description: "Looking for cosplayers to showcase our new gaming chair line. Must have gaming character costumes.",
      requirements: "10k+ followers, gaming content focus",
      deadline: "March 15, 2024"
    },
    {
      id: 2,
      title: "Anime Convention Booth Staff",
      company: "Otaku Merchandise",
      budget: "$300 - $500",
      description: "Need cosplayers to work at our booth during AnimeExpo. Costume provided.",
      requirements: "Experience at conventions, outgoing personality",
      deadline: "February 28, 2024"
    },
    {
      id: 3,
      title: "Cosplay Makeup Brand Ambassador",
      company: "CosmeticCos",
      budget: "$200 - $800",
      description: "Long-term partnership for makeup tutorials and product reviews.",
      requirements: "Makeup skills, regular content creation",
      deadline: "Ongoing"
    },
    {
      id: 4,
      title: "Photo Shoot for Costume Store",
      company: "Epic Costumes",
      budget: "$400 - $600",
      description: "Professional photo shoot wearing our latest costume designs.",
      requirements: "Professional portfolio, various costume sizes",
      deadline: "March 1, 2024"
    },
    {
      id: 5,
      title: "Streaming Platform Promotion",
      company: "StreamFlix",
      budget: "$1,000 - $2,000",
      description: "Create content promoting our new anime series launch.",
      requirements: "Active streaming presence, anime knowledge",
      deadline: "February 20, 2024"
    },
    {
      id: 6,
      title: "Comic Book Store Opening",
      company: "Hero's Haven Comics",
      budget: "$150 - $300",
      description: "Grand opening event appearance in superhero costumes.",
      requirements: "Local to Austin area, superhero costumes",
      deadline: "March 10, 2024"
    }
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Available Gigs</h1>
        <p className="page-subtitle">Find your next cosplay collaboration opportunity</p>
      </div>

      <div className="cards-grid">
        {dummyGigs.map(gig => (
          <div key={gig.id} className="card">
            <h3 className="card-title">{gig.title}</h3>
            <div className="card-content">
              <p><strong>Company:</strong> {gig.company}</p>
              <p><strong>Budget:</strong> {gig.budget}</p>
              <p><strong>Description:</strong> {gig.description}</p>
              <p><strong>Requirements:</strong> {gig.requirements}</p>
              <p><strong>Deadline:</strong> {gig.deadline}</p>
              <div style={{ marginTop: '1.5rem' }}>
                <button className="btn" style={{ width: '100%' }}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gigs;
