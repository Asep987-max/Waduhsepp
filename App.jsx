import React, { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
      <p className="text-muted-foreground mb-4">{profile.bio}</p>
      <a href={`mailto:${profile.email}`} className="bg-blue-500 text-white px-4 py-2 rounded">Contact</a>

      <h2 className="text-2xl font-semibold mt-6">Projects</h2>
      {profile.projects.map((project, i) => (
        <div key={i} className="mt-4 p-4 border rounded">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
