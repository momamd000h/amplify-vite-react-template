import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "./App.css"; // Ensure your styles are applied

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  const { user, signOut } = useAuthenticator();
  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  return (
    <main>
      <div>
        <header className="header">
          {" "}
          <h1 className="email"> {user?.signInDetails?.loginId}</h1>
          <div className="logo-container">
            {/*             <img src="/Logo.png" className="logo" alt="Co Tune Logo" />
             */}
          </div>
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
          <li>Tuning Guides</li>
          <li>Interactive Lessons</li>
          <li>Community Support</li>
        </ul>
      </div>
    </main>
  );
}

export default App;
