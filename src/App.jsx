import { useState } from "react";
import "./App.css";

const App = () => {
  // Store fighters in a constant so we can use them in state
  const fightersList = [
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ];

  // State
  const [money, setMoney] = useState(50); // starting money
  const [team, setTeam] = useState([]);
  const [zombieFighters, setZombieFighters] = useState(fightersList);

  // Functions
  function getTotalStrength(team) {
    return team.reduce((sum, member) => sum + member.strength, 0);
  }

  function getTotalAgility(team) {
    return team.reduce((sum, member) => sum + member.agility, 0);
  }

  function handleAddFighter(zombieFighter) {
    if (money < zombieFighter.price) return;

    setMoney(money - zombieFighter.price);
    setTeam([...team, zombieFighter]);
    setZombieFighters(zombieFighters.filter((f) => f !== zombieFighter));
  }

  function handleRemoveFighter(zombieFighter) {
    setMoney(money + zombieFighter.price);
    setZombieFighters(
      [...zombieFighters, zombieFighter].sort((a, b) => a.id - b.id)
    );
    setTeam(team.filter((f) => f !== zombieFighter));
  }

  // JSX
  return (
    <>
      <h1>zombie something fighter game!! 😈</h1>
      <h2>current money: {money}</h2>
      <h2>total strength: {getTotalStrength(team)}</h2>
      <h2>total agility: {getTotalAgility(team)}</h2>

      {team.length === 0 ? (
        <h2>Pick some team members!</h2>
      ) : (
        <ul>
          {team.map((zombieFighter) => (
            <li key={zombieFighter.id}>
              <img src={zombieFighter.img} alt={zombieFighter.id} />
              <h3>name: {zombieFighter.name}</h3>
              <p>price: {zombieFighter.price}</p>
              <p>strength: {zombieFighter.strength}</p>
              <p>agility: {zombieFighter.agility}</p>
              <button onClick={() => handleRemoveFighter(zombieFighter)}>
                Remove Character
              </button>
            </li>
          ))}
        </ul>
      )}

      <hr />

      <ul>
        {zombieFighters.map((zombieFighter) => (
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img} alt={zombieFighter.id} />
            <h3>name: {zombieFighter.name}</h3>
            <p>price: {zombieFighter.price}</p>
            <p>strength: {zombieFighter.strength}</p>
            <p>agility: {zombieFighter.agility}</p>
            <button onClick={() => handleAddFighter(zombieFighter)}>
              Add Character
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
