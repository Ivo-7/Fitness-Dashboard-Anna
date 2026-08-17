// Workouts für Anna – jeweils mit Übungsliste (Sätze × Wiederholungen)
const workouts = [
  {
    id: "ganzkoerper-bbp",
    title: "Ganzkörper - Bauch Beine Po",
    subtitle: "Krafttraining",
    type: "strength",
    exercises: [
      { name: "Goblet Squat", sets: "2 × 10-12" },
      { name: "Glute Bridge einbeinig", sets: "2 × 12/Seite" },
      { name: "Ausfallschritt (statisch)", sets: "2 × 8-10/Seite" },
      { name: "Rumänisches Kreuzheben (leicht)", sets: "2 × 10" },
      { name: "Clamshells", sets: "2 × 15/Seite" },
      { name: "Side-Lying Leg Raise", sets: "2 × 12-15/Seite" },
      { name: "Banded Lateral Walk (Monster Walk)", sets: "2 × 10 Schritte/Seite" },
      { name: "Plank", sets: "2 × 20-30 Sek." },
      { name: "Side Plank", sets: "2 × 15-20 Sek./Seite" },
      { name: "Dead Bug", sets: "2 × 10/Seite" },
      { name: "Rudern (Band oder Kurzhantel)", sets: "2 × 10-12" },
      { name: "Liegestütz auf Knien", sets: "2 × 8-12" }
    ]
  },
  {
    id: "laufeinstieg-woche-1",
    title: "Laufeinstieg Woche 1",
    subtitle: "Laufeinheit",
    type: "run",
    sections: [
      { label: "Warmup", content: "5 Min gehen" },
      { label: "Hauptteil", content: "8× (1 Min laufen / 2 Min gehen)" },
      { label: "Cooldown", content: "5 Min gehen" },
      { label: "Zielbereich", content: "HF-Zone 2-3, lockeres Tempo" }
    ]
  },
  {
    id: "mobility-workout",
    title: "Mobility Workout",
    subtitle: "Mobility",
    type: "mobility",
    list: [
      "Childs Pose Stretch",
      "Cobra Stretch",
      "Static Lunges (Rechts/Links)",
      "Static Squats",
      "Toe Reaches",
      "Bending Stretch",
      "Ball Roll Backs",
      "Leg Over Stretch (Rechts/Links)",
      "Sit and Reach",
      "Hip Stretch (Rechts/Links)",
      "Lying Quad Stretch (Rechts/Links)",
      "Across Body Stretch (Rechts/Links)",
      "Cows Face Pose (Rechts/Links)",
      "Shoulder Stretch",
      "Revolved Low Lunge (Rechts/Links)",
      "Lat Stretch",
      "Wind Releasing Pose (Rechts/Links)",
      "Toe Static Squat",
      "Side + Forward Neck Stretch (Rechts)",
      "Side + Forward Neck Stretch (Links)"
    ]
  }
];
