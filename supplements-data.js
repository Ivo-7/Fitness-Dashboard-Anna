// Supplement-Routine für Anna, gruppiert nach Einnahme-Zeitfenster.
// Kreatin (Timing eigentlich egal) wurde zusammen mit dem Protein-Shake
// in den Nachmittag gelegt, da beides oft gemeinsam eingenommen wird.
// Omega-3 steht am Abend, da im Ursprungstext "abends oft angenehmer" genannt wurde.
const supplementGroups = [
  {
    time: "Morgen",
    items: [
      {
        title: "Vitamin D3 + K2",
        details: [
          "Zu einer fetthaltigen Mahlzeit – fettlöslich, wird so besser aufgenommen",
          "Wichtig für Knochen und Immunsystem – in CH oft niedrig"
        ]
      }
    ]
  },
  {
    time: "Mittag",
    items: []
  },
  {
    time: "Nachmittag",
    items: [
      {
        title: "Protein",
        details: [
          "Nach dem Krafttraining, ggf. über den Tag verteilt",
          "Muskelaufbau/-erhalt, besonders wichtig nach Muskelverlust in der Stillzeit"
        ]
      },
      {
        title: "Kreatin",
        details: [
          "Timing egal, Hauptsache täglich",
          "Muskelaufbau, Kraft, unterstützt Regeneration"
        ]
      }
    ]
  },
  {
    time: "Abend",
    items: [
      {
        title: "Omega-3 (EPA/DHA)",
        details: [
          "Zu einer Mahlzeit, abends oft angenehmer (weniger Nachgeschmack)",
          "Unterstützt Regeneration, zusätzlich die Gehirnentwicklung des Babys über die Muttermilch"
        ]
      },
      {
        title: "Magnesium Bisglycinate",
        details: [
          "30-60 Min vor dem Schlafen",
          "Entspannung, hilft gegen Wadenkrämpfe vom Laufen"
        ]
      }
    ]
  }
];
