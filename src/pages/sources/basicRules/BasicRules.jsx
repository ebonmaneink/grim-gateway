import { Link } from "react-router-dom";

function BasicRules() {
  return (
    <div>
      <h1>Basic Rules</h1>
      <p>Here are the basic rules for your Light Omens RPG.</p>
      <ul>
        <li>
          <Link to="/sources/basic-rules/core">Core Rules</Link>
        </li>
        {/* Add more basic rules as needed */}
      </ul>
    </div>
  );
}

export default BasicRules;
