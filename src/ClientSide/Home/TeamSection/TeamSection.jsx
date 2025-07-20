import team1 from "/Images/team-1.jpg";
import team2 from "/Images/team-2.jpg";
import team3 from "/Images/team-3.jpg";
import team4 from "/Images/team-4.jpg";
import team5 from "/Images/team-5.jpg";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const teamData = [
  { name: "Kevin Martin", role: "Designer", image: team1 },
  { name: "Jessica Brown", role: "Designer", image: team2 },
  { name: "John Albert", role: "Designer", image: team3 },
  { name: "Rose Ford", role: "Designer", image: team4 },
  { name: "Mike Hardson", role: "Designer", image: team5 },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="  ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Meet the expert team<span className="text-[#ffae00]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamData.map((member, index) => (
            <div key={index} className="team-block group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full grayscale group-hover:grayscale-0 transition duration-500 rounded-lg"
                />
                <ul className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  {[FaFacebookSquare, FaTwitter, FaInstagram, FaPinterestP].map(
                    (Icon, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="w-11 h-11 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#ffae00] transition"
                        >
                          <Icon />
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="text-center pt-6">
                <h5 className="text-xl font-semibold uppercase">
                  <a href="#" className="text-black hover:underline">
                    {member.name}
                  </a>
                </h5>
                <div className="text-sm uppercase tracking-widest text-gray-500 mt-2">
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
