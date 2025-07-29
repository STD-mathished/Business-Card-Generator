// src/App.jsx
import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/card";

export default function App() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [profiles, setProfiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !avatar || !bio) return;

    const newProfile = {
      id: Date.now(),
      name,
      avatar,
      bio,
    };

    setProfiles([...profiles, newProfile]);

    // Réinitialiser les champs
    setName("");
    setAvatar("");
    setBio("");
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">🧩 Profile Card Generator</h2>

      <Form
        name={name}
        setName={setName}
        avatar={avatar}
        setAvatar={setAvatar}
        bio={bio}
        setBio={setBio}
        onSubmit={handleSubmit}
        className='mb-3'
      />

      <div className="flex flex-wrap gap-6 justify-center">
        {profiles.map((profile) => (
          <Card
            key={profile.id}
            name={profile.name}
            avatar={profile.avatar}
            bio={profile.bio}
            onDelete={() => handleDelete(profile.id)}
          />
        ))}
      </div>
    </div>
  );
}
