import { useState } from "react";
import "./styles.css";

const foodss = {
  pizza: [
    {
      Name: "Domino's",
      Rate: "5/5"
    },
    {
      Name: "Pzza Hut",
      Rate: "4.5/5"
    }
  ],
  Momos: [
    {
      Name: "Wow momos",
      Rate: "5/5"
    },
    {
      Name: "Momose Hill",
      Rate: "3.6/5"
    }
  ],
  Vadapav: [
    {
      Name: "Bhau cha Vadapav",
      Rate: "5/5"
    },
    {
      Name: "Ashok Vada Pav",
      Rate: "4.5/5"
    }
  ],
  Shawarma: [
    {
      Name: "Shwarma'ji",
      Rate: "5/5"
    },
    {
      Name: "Afzal Shawarma",
      Rate: "4.5/5"
    }
  ]
};

export default function App() {
  const [detail, setdetail] = useState("pizza");

  function Clickhandler(food) {
    setdetail(food);
  }
  return (
    <div className="App">
      <h1>FoodDude</h1>
      <h4>Select your item to see which brand holds more raiting</h4>
      {Object.keys(foodss).map((food) => (
        <button
          onClick={() => Clickhandler(food)}
          style={{ padding: "0.5rem", margin: "1rem", cursor: "pointer" }}
        >
          {food}
        </button>
      ))}

      <hr />

      <div style={{ textAlign: "left", width: "80%" }}>
        <ul>
          {foodss[detail].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                backgroundColor: "#cbd5e1",
                border: "1px solid #334155",
                borderRadius: "10px",
                padding: "1rem",
                margin: "1rem"
              }}
            >
              {""}
              <div
                style={{
                  padding: "0.5rem"
                }}
              >
                {place.Name}
              </div>

              <div style={{ padding: "0.5rem" }}>{place.Rate}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
