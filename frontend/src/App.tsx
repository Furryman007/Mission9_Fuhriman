import "./App.css";

// Import the raw data from the JSON file
import rawData from "./CollegeBasketballTeams.json";

type RawTeam = {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
};

type Team = {
  schoolName: string;
  mascotName: string;
  location: string;
};

// Heading Section
function Heading() {
  return (
    <header>
      <h1>College Basketball Teams</h1>
      <p>Listed below are all the college basketball teams.</p>
    </header>
  );
}

//Team Card
function TeamCard({ schoolName, mascotName, location }: Team) {
  return (
    <div className="team-card">
      <h2>{schoolName}</h2>
      <p><strong>Mascot:</strong> {mascotName}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

//Team Card List
function TeamCardList({ teams }: { teams: Team[] }) {
  return (
    <section className="team-list">
      {teams.map((team) => (
        <TeamCard key={team.schoolName} {...team} />
      ))}
    </section>
  );
}

// Create a team array 
export default function App() {
  const teamsArray = (rawData as { teams: RawTeam[] }).teams;

  const formattedTeams: Team[] = teamsArray.map((team) => ({
    schoolName: team.school,
    mascotName: team.name,
    location: `${team.city}, ${team.state}`,
  }));

  return (
    <>
      <Heading />
      <TeamCardList teams={formattedTeams} />
    </>
  );
}