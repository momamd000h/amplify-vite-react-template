import { useEffect } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "./App.css"; // Ensure your styles are applied
import { Link } from "react-router-dom"; // Import Link and useNavigate

const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({});
  }, []);

  return (
    <main>
      <div>
        <header className="header">
          {" "}
          {<img src="/Icon.png" className="logo" alt="Co Tune Logo" />}
          <h1 className="email"> {user?.signInDetails?.loginId}</h1>
          <div className="signout">
            <button onClick={signOut}>Sign out</button>
          </div>
        </header>
      </div>
      <div className="home">
        <h1>Welcome to CoTune</h1>
        <p>Explore, Control, and Innovate with IoT!</p>
        <p>Discover our features and services:</p>
        <ul>
          <li>
            <Link to="/tuning-guides">
              <button className="bt">Tuning Guides</button>
            </Link>
          </li>
          <li>
            <Link to="/Inter">
              <button className="bt">Interactive Lessons</button>
            </Link>
          </li>
          <li>
            <Link to="/experiments">
              <button className="bt">Experiments</button>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
