// Eigene Silhouetten-Illustrationen je Übung/Pose: gedämpfte, graue
// Körperkontur + ein Akzent-Kreis auf der primär trainierten/gedehnten
// Muskelgruppe. Farbschema bewusst an den Foto-Stil der Kraftübungen
// angelehnt (Graustufen-Körper + orange-rote Muskel-Markierung), damit
// beide Workouts optisch zueinander passen.
// Ein Icon-Key wird von mehreren Übungen geteilt, wenn Ausgangsposition
// und Zielregion sehr ähnlich sind (z.B. Rechts/Links-Varianten).

function buildIcon(bodyPaths, highlightCx, highlightCy, highlightR) {
  return `<svg viewBox="0 0 60 60" fill="none">
    <g stroke="#b09a97" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8">
      ${bodyPaths.replace(/fill="currentColor"/g, 'fill="#b09a97"')}
    </g>
    <circle cx="${highlightCx}" cy="${highlightCy}" r="${highlightR}" fill="#d1567a" opacity="0.88"/>
  </svg>`;
}

const exerciseIcons = {
  "goblet-squat": buildIcon(
    '<circle cx="30" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M30 15v13"/><path d="M30 28l-12 14"/><path d="M30 28l12 14"/><path d="M18 42l2 12"/><path d="M42 42l-2 12"/>',
    30, 36, 10
  ),

  "glute-bridge": buildIcon(
    '<circle cx="10" cy="40" r="5" fill="currentColor" stroke="none"/><path d="M14 40l16-6"/><path d="M30 34l12 12v10"/><path d="M30 34l4 18h12"/>',
    31, 33, 8
  ),

  "lunge-static": buildIcon(
    '<circle cx="24" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M24 15v15"/><path d="M24 30l-8 14v12"/><path d="M24 30l14 10-4 14"/>',
    19, 37, 9
  ),

  "rdl": buildIcon(
    '<circle cx="18" cy="15" r="5" fill="currentColor" stroke="none"/><path d="M18 20l16 10v26"/><path d="M18 20l-4 20"/>',
    34, 42, 9
  ),

  "clamshell": buildIcon(
    '<circle cx="14" cy="19" r="5" fill="currentColor" stroke="none"/><path d="M18 21l16 9"/><path d="M34 30l-4 14"/><path d="M34 30l12-4"/>',
    33, 32, 8
  ),

  "side-leg-raise": buildIcon(
    '<circle cx="14" cy="19" r="5" fill="currentColor" stroke="none"/><path d="M18 21l16 9"/><path d="M34 30l-4 20"/><path d="M34 30l16-6"/>',
    34, 29, 8
  ),

  "lateral-walk": buildIcon(
    '<circle cx="30" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M30 15v13"/><path d="M30 28l-12 14v12"/><path d="M30 28l12 12v14"/>',
    30, 30, 9
  ),

  "plank": buildIcon(
    '<circle cx="12" cy="34" r="5" fill="currentColor" stroke="none"/><path d="M16 34h30"/><path d="M16 34v12"/><path d="M46 34v18"/>',
    30, 34, 9
  ),

  "side-plank": buildIcon(
    '<circle cx="12" cy="25" r="5" fill="currentColor" stroke="none"/><path d="M16 27l30 12"/><path d="M20 29v16"/>',
    30, 33, 8
  ),

  "dead-bug": buildIcon(
    '<circle cx="14" cy="34" r="5" fill="currentColor" stroke="none"/><path d="M18 34h16"/><path d="M34 34v16"/><path d="M34 34l12-10"/><path d="M18 34l-8 10"/><path d="M34 34l12 10"/>',
    26, 34, 8
  ),

  "row-band": buildIcon(
    '<circle cx="18" cy="15" r="5" fill="currentColor" stroke="none"/><path d="M18 20l16 10v26"/><path d="M18 20l-8 6"/><path d="M18 20l-8-6"/>',
    25, 24, 8
  ),

  "pushup-knee": buildIcon(
    '<circle cx="10" cy="29" r="5" fill="currentColor" stroke="none"/><path d="M14 31l26 6"/><path d="M14 31v13"/><path d="M40 37v15"/>',
    27, 34, 9
  ),

  "childs-pose": buildIcon(
    '<circle cx="46" cy="44" r="5" fill="currentColor" stroke="none"/><path d="M42 44l-12-14-20-4"/><path d="M42 44v12"/>',
    36, 37, 8
  ),

  "cobra": buildIcon(
    '<circle cx="42" cy="25" r="5" fill="currentColor" stroke="none"/><path d="M38 27l-20 12h-8"/><path d="M34 29v13"/>',
    26, 34, 8
  ),

  "squat-hold": buildIcon(
    '<circle cx="30" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M30 15v15"/><path d="M30 30l-12 14v12"/><path d="M30 30l12 14v12"/>',
    30, 37, 10
  ),

  "toe-reach": buildIcon(
    '<circle cx="30" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M30 15l-10 19-4 16"/><path d="M30 15l12 35"/>',
    36, 32, 9
  ),

  "side-bend": buildIcon(
    '<circle cx="34" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M32 15l-6 19v22"/><path d="M32 15l12-6"/>',
    29, 24, 8
  ),

  "ball-roll-back": buildIcon(
    '<circle cx="34" cy="25" r="5" fill="currentColor" stroke="none"/><path d="M32 30l-8 8v-10"/><path d="M32 30l-12 14"/>',
    28, 33, 8
  ),

  "leg-over-twist": buildIcon(
    '<circle cx="14" cy="19" r="5" fill="currentColor" stroke="none"/><path d="M18 19h20"/><path d="M38 19l-8 20"/><path d="M18 19l-4 14"/>',
    26, 20, 8
  ),

  "sit-reach": buildIcon(
    '<circle cx="14" cy="19" r="5" fill="currentColor" stroke="none"/><path d="M16 23l14 16h20"/><path d="M16 23l26 6"/>',
    29, 26, 8
  ),

  "lying-quad-stretch": buildIcon(
    '<circle cx="14" cy="23" r="5" fill="currentColor" stroke="none"/><path d="M18 25l18 6"/><path d="M36 31l-6 14"/><path d="M36 31l10-12"/>',
    33, 31, 8
  ),

  "across-body-stretch": buildIcon(
    '<circle cx="30" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M30 15v25"/><path d="M30 17l16 5-26 4"/><path d="M30 40l-6 16"/><path d="M30 40l6 16"/>',
    30, 18, 7
  ),

  "cows-face": buildIcon(
    '<circle cx="30" cy="13" r="5" fill="currentColor" stroke="none"/><path d="M30 18v22"/><path d="M30 19l10-10-6 20"/><path d="M30 23l-8 10 12-4"/>',
    34, 19, 7
  ),

  "shoulder-stretch": buildIcon(
    '<circle cx="30" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M30 15v25"/><path d="M30 17l6-10-6 16"/>',
    33, 11, 7
  ),

  "revolved-lunge": buildIcon(
    '<circle cx="24" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M24 15v13"/><path d="M24 28l-8 14v14"/><path d="M24 28l14 10"/><path d="M24 17l16-11"/>',
    24, 24, 8
  ),

  "wind-release": buildIcon(
    '<circle cx="14" cy="34" r="5" fill="currentColor" stroke="none"/><path d="M18 34h16"/><path d="M34 34l-8-12-8 8"/>',
    26, 30, 8
  ),

  "neck-side": buildIcon(
    '<circle cx="33" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M30 14v42"/><path d="M30 17l-9 6"/>',
    31, 15, 7
  ),

  "neck-forward": buildIcon(
    '<circle cx="30" cy="11" r="5" fill="currentColor" stroke="none"/><path d="M30 15v41"/><path d="M25 17h9"/>',
    30, 16, 7
  )
};
