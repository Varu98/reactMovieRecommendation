import React from "react";
import "./styles.css";
import { useState } from "react";

var moviesDB = {
  SciFi: [
    {
      name: "Ready Player One",
      rating: "4.5/5",
      description:
        "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world."
    },
    {
      name: "Back To The Future",
      rating: "4.5/5",
      description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown."
    },
    {
      name: "Back To The Future 2",
      rating: "4/5",
      description:
        "After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985...without interfering with his first trip."
    },
    {
      name: "X-men Saga",
      rating: "4.5/5",
      description:
        "In the 1960s, superpowered humans Charles Xavier and Erik Lensherr work together to find others like them, but Erik's vengeful pursuit of an ambitious mutant who ruined his life causes a schism to divide them."
    }
  ],
  War: [
    {
      name: "Fury",
      rating: "4.5/5",
      description:
        "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945."
    },
    {
      name: "American Sniper",
      rating: "4/5",
      description:
        "Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home with his family after four tours of duty, however, Chris finds that it is the war he can't leave behind."
    },
    {
      name: "GreyHound",
      rating: "4/5",
      description:
        "Several months after the U.S. entry into World War II, an inexperienced U.S. Navy commander must lead an Allied convoy being stalked by a German submarine wolf pack."
    }
  ],
  Fiction: [
    {
      name: "Twilight Saga",
      rating: "4.5/5",
      description:
        "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire."
    },
    {
      name: "Deadpool",
      rating: "3.5/5",
      description:
        "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks."
    },
    {
      name: "Harry Potter Series",
      rating: "4/5",
      description:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
    },
    {
      name: "Pirates of The Caribbean Series",
      rating: "4/5",
      description:
        "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead."
    }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Fiction");

  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "sans", fontSize: "3rem", color: "#0080ff" }}>
        Movie Recommendation
      </h1>
      <p>Here are some of the movies that I have watched !</p>
      <p> Select a Genre to get Started!</p>
      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            style={{
              fontSize: "2rem",
              color: "#FCD34D",
              backgroundColor: "#5B21B6",
              borderRadius: "10%",
              padding: "1rem",
              marginInlineEnd: "3rem"
            }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ul style={{ listStyleType: "none" }}>
          {moviesDB[selectedGenre].map((movie) => (
            <li key={movie.name}>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#4B5563",
                  fontSize: "2rem",
                  fontFamily: "monospace",
                  fontWeight: "bolder"
                }}
              >
                {movie.name}
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#4B5563",
                  fontFamily: "monospace",
                  fontSize: "1.5rem"
                }}
              >
                {movie.description}
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#6B7280",
                  fontFamily: "monospace"
                }}
              >
                {movie.rating}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
