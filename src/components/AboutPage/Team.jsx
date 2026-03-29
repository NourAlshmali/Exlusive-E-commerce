import React from "react";
import TeamCard from "./TeamCard";
import img1 from "/img/team1.png";
import img2 from "/img/team2.png";
import img3 from "/img/team3.png";

const Team = ({ className }) => {
  const teamData = [
    {
      id: 1,
      image: img1,
      name: "Tom Cruise",
      job: "Founder & Chairman",
      twitter: "https://twitter.com/tomcruise",
      instagram: "https://www.instagram.com/tomcruise",
      linkedin: "https://www.linkedin.com/in/tom-cruise",
    },
    {
      id: 2,
      image: img3,
      name: "Emma Watson",
      job: "Managing Director",
      twitter: "https://twitter.com/emmawatson",
      instagram: "https://www.instagram.com/emmawatson",
      linkedin: "https://www.linkedin.com/in/emma-watson",
    },
    {
      id: 3,
      image: img2,
      name: "Will Smith",
      job: "Product Designer",
      twitter: "https://twitter.com/willsmith",
      instagram: "https://www.instagram.com/willsmith",
      linkedin: "https://www.linkedin.com/in/will-smith",
    },
  ];

  return (
    <section className={`py-16 px-4 max-w-7xl mx-auto ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Professional Team
        </h2>
        <p className="text-gray-500">Meet the people behind our success</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {teamData.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
