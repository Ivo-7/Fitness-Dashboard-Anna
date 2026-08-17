// Workouts für Anna – jeweils mit Übungsliste (Sätze × Wiederholungen)
const workouts = [
  {
    id: "ganzkoerper-bbp",
    title: "Ganzkörper - Bauch Beine Po",
    subtitle: "Krafttraining",
    type: "strength",
    exercises: [
      { name: "Goblet Squat", icon: "goblet-squat", img: "images/goblet-squat.webp", sets: "2 × 10-12" },
      { name: "Glute Bridge einbeinig", icon: "glute-bridge", img: "images/glute-bridge.webp", sets: "2 × 12/Seite" },
      { name: "Ausfallschritt (statisch)", icon: "lunge-static", img: "images/lunge-static.webp", sets: "2 × 8-10/Seite" },
      { name: "Rumänisches Kreuzheben (leicht)", icon: "rdl", img: "images/rdl.webp", sets: "2 × 10" },
      { name: "Clamshells", icon: "clamshell", img: "images/clamshell.webp", sets: "2 × 15/Seite" },
      { name: "Side-Lying Leg Raise", icon: "side-leg-raise", img: "images/side-leg-raise.webp", sets: "2 × 12-15/Seite" },
      { name: "Banded Lateral Walk (Monster Walk)", icon: "lateral-walk", img: "images/lateral-walk.webp", sets: "2 × 10 Schritte/Seite" },
      { name: "Plank", icon: "plank", img: "images/plank.webp", sets: "2 × 20-30 Sek." },
      { name: "Side Plank", icon: "side-plank", img: "images/side-plank.webp", sets: "2 × 15-20 Sek./Seite" },
      { name: "Dead Bug", icon: "dead-bug", img: "images/dead-bug.webp", sets: "2 × 10/Seite" },
      { name: "Rudern (Band oder Kurzhantel)", icon: "row-band", img: "images/row-band.webp", sets: "2 × 10-12" },
      { name: "Liegestütz auf Knien", icon: "pushup-knee", img: "images/pushup-knee.webp", sets: "2 × 8-12" }
    ]
  },
  {
    id: "laufeinstieg-woche-1",
    title: "Laufeinstieg Woche 1",
    subtitle: "Laufeinheit",
    type: "run",
    intervalChart: {
      segments: [
        { label: "Warmup", min: 5, mode: "walk" },
        { label: "Lauf", min: 1, mode: "run", repeat: 8, repeatWith: { label: "Gehen", min: 2, mode: "walk" } },
        { label: "Cooldown", min: 5, mode: "walk" }
      ]
    },
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
      { name: "Childs Pose Stretch", icon: "childs-pose" },
      { name: "Cobra Stretch", icon: "cobra" },
      { name: "Static Lunges (Rechts/Links)", icon: "lunge-static" },
      { name: "Static Squats", icon: "squat-hold" },
      { name: "Toe Reaches", icon: "toe-reach" },
      { name: "Bending Stretch", icon: "side-bend" },
      { name: "Ball Roll Backs", icon: "ball-roll-back" },
      { name: "Leg Over Stretch (Rechts/Links)", icon: "leg-over-twist" },
      { name: "Sit and Reach", icon: "sit-reach" },
      { name: "Hip Stretch (Rechts/Links)", icon: "lunge-static" },
      { name: "Lying Quad Stretch (Rechts/Links)", icon: "lying-quad-stretch" },
      { name: "Across Body Stretch (Rechts/Links)", icon: "across-body-stretch" },
      { name: "Cows Face Pose (Rechts/Links)", icon: "cows-face" },
      { name: "Shoulder Stretch", icon: "shoulder-stretch" },
      { name: "Revolved Low Lunge (Rechts/Links)", icon: "revolved-lunge" },
      { name: "Lat Stretch", icon: "side-bend" },
      { name: "Wind Releasing Pose (Rechts/Links)", icon: "wind-release" },
      { name: "Toe Static Squat", icon: "squat-hold" },
      { name: "Side + Forward Neck Stretch (Rechts)", icon: "neck-side" },
      { name: "Side + Forward Neck Stretch (Links)", icon: "neck-forward" }
    ]
  }
];
