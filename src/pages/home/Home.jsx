import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="content-container">
        <h1>Welcome to Grim Gateway</h1>
        <p>
          Your ultimate online resource for <strong>Light Omens RPG</strong> - a
          dark fantasy tabletop roleplaying game where hope burns bright against
          the encroaching darkness.
        </p>

        <p>
          Explore our comprehensive collection of rules, character options, and
          lore to enhance your gaming experience.
        </p>

        <Link to="/sources" className="btn">
          Browse Sources
        </Link>
      </div>

      <div className="content-container">
        <h2>What is Light Omens?</h2>
        <p>
          Light Omens is a tabletop RPG built on the BASE6 system, featuring:
        </p>
        <ul>
          <li>
            <strong>Hope-driven mechanics</strong> - Your inner light fuels
            extraordinary actions
          </li>
          <li>
            <strong>Dynamic storytelling</strong> - Momentum and Chaos shape
            every scene
          </li>
          <li>
            <strong>Dark fantasy setting</strong> - Fight against the Light
            Eaters in a world on the brink
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
