import { Link } from "react-router-dom";

function Sources() {
  return (
    <div>
      <h1>Sources</h1>
      <p>Browse all available TTRPG sources and materials for Light Omens.</p>
      <ul>
        <li>
          <Link to="/sources/basic-rules">Basic Rules</Link>
        </li>
        {/* Add more sources as needed */}
      </ul>
    </div>
  );
}

export default Sources;
