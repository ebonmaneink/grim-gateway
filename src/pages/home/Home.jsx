import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Grim Gateway</h1>
      <p>This is the online resource for Light Omens</p>
      <Link to="/sources">Browse Sources</Link>
    </div>
  );
}

export default Home;
