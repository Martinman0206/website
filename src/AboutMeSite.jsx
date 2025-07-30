
import { useState } from "react";

export default function AboutMeSite() {
  const [name, setName] = useState("Your Name");
  const [bio, setBio] = useState("Write a short bio about yourself here.");
  const [editing, setEditing] = useState(false);
  const [achievements, setAchievements] = useState([
    "Graduated from university",
    "Completed a marathon",
    "Built a personal website",
  ]);
  const [newAchievement, setNewAchievement] = useState("");

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setAchievements([...achievements, newAchievement.trim()]);
      setNewAchievement("");
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        {editing ? (
          <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            <button onClick={() => setEditing(false)}>Save</button>
          </div>
        ) : (
          <div>
            <h1>{name}</h1>
            <p>{bio}</p>
            <button onClick={() => setEditing(true)}>Edit</button>
          </div>
        )}
      </div>

      <div>
        <h2>Achievements & Activities</h2>
        <ul>
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input
          value={newAchievement}
          onChange={(e) => setNewAchievement(e.target.value)}
          placeholder="Add a new achievement"
        />
        <button onClick={addAchievement}>Add</button>
      </div>
    </div>
  );
}
