// Einfache, selbst gezeichnete Strichmännchen-Illustrationen je Übung/Pose.
// Ein Icon-Key wird von mehreren Übungen geteilt, wenn die Ausgangsposition
// sehr ähnlich ist (z.B. Rechts/Links-Varianten oder verwandte Dehnungen).
const exerciseIcons = {
  "goblet-squat": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="10" r="4"/><line x1="30" y1="14" x2="30" y2="28"/><line x1="30" y1="18" x2="24" y2="24"/><line x1="30" y1="18" x2="36" y2="24"/><rect x="25" y="22" width="10" height="6" rx="1"/><line x1="30" y1="28" x2="18" y2="42"/><line x1="30" y1="28" x2="42" y2="42"/><line x1="18" y1="42" x2="20" y2="54"/><line x1="42" y1="42" x2="40" y2="54"/></svg>',

  "glute-bridge": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="40" r="4"/><line x1="14" y1="40" x2="30" y2="34"/><line x1="30" y1="34" x2="42" y2="46"/><line x1="42" y1="46" x2="42" y2="56"/><line x1="30" y1="34" x2="34" y2="52"/><line x1="34" y1="52" x2="46" y2="52"/></svg>',

  "lunge-static": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="10" r="4"/><line x1="24" y1="14" x2="24" y2="30"/><line x1="24" y1="30" x2="16" y2="44"/><line x1="16" y1="44" x2="16" y2="56"/><line x1="24" y1="30" x2="38" y2="40"/><line x1="38" y1="40" x2="34" y2="54"/></svg>',

  "rdl": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="16" r="4"/><line x1="18" y1="20" x2="34" y2="30"/><line x1="34" y1="30" x2="34" y2="56"/><line x1="18" y1="20" x2="14" y2="40"/><rect x="9" y="38" width="9" height="6" rx="1"/></svg>',

  "clamshell": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="20" r="4"/><line x1="18" y1="22" x2="34" y2="30"/><line x1="34" y1="30" x2="30" y2="44"/><line x1="30" y1="44" x2="42" y2="40"/></svg>',

  "side-leg-raise": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="20" r="4"/><line x1="18" y1="22" x2="34" y2="30"/><line x1="34" y1="30" x2="30" y2="50"/><line x1="34" y1="30" x2="50" y2="24"/></svg>',

  "lateral-walk": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="10" r="4"/><line x1="30" y1="14" x2="30" y2="28"/><line x1="30" y1="28" x2="18" y2="42"/><line x1="30" y1="28" x2="42" y2="40"/><line x1="18" y1="42" x2="14" y2="54"/><line x1="42" y1="40" x2="48" y2="54"/><line x1="18" y1="47" x2="42" y2="45" stroke-dasharray="2 3"/></svg>',

  "plank": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="34" r="4"/><line x1="16" y1="34" x2="46" y2="34"/><line x1="16" y1="34" x2="16" y2="46"/><line x1="46" y1="34" x2="46" y2="52"/></svg>',

  "side-plank": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="26" r="4"/><line x1="16" y1="28" x2="46" y2="40"/><line x1="20" y1="30" x2="20" y2="46"/></svg>',

  "dead-bug": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="34" r="4"/><line x1="18" y1="34" x2="34" y2="34"/><line x1="34" y1="34" x2="34" y2="50"/><line x1="34" y1="34" x2="46" y2="24"/><line x1="18" y1="34" x2="10" y2="44"/><line x1="34" y1="34" x2="46" y2="44"/></svg>',

  "row-band": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="16" r="4"/><line x1="18" y1="20" x2="34" y2="30"/><line x1="34" y1="30" x2="34" y2="56"/><line x1="18" y1="20" x2="10" y2="26"/><line x1="18" y1="20" x2="10" y2="14"/></svg>',

  "pushup-knee": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="30" r="4"/><line x1="14" y1="32" x2="40" y2="38"/><line x1="14" y1="32" x2="16" y2="44"/><line x1="40" y1="38" x2="40" y2="52"/></svg>',

  "childs-pose": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="46" cy="44" r="4"/><line x1="42" y1="44" x2="30" y2="30"/><line x1="30" y1="30" x2="10" y2="26"/><line x1="42" y1="44" x2="42" y2="56"/></svg>',

  "cobra": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="42" cy="26" r="4"/><line x1="38" y1="28" x2="18" y2="40"/><line x1="18" y1="40" x2="10" y2="40"/><line x1="34" y1="30" x2="34" y2="42"/></svg>',

  "squat-hold": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="10" r="4"/><line x1="30" y1="14" x2="30" y2="30"/><line x1="30" y1="30" x2="18" y2="44"/><line x1="30" y1="30" x2="42" y2="44"/><line x1="18" y1="44" x2="20" y2="56"/><line x1="42" y1="44" x2="40" y2="56"/></svg>',

  "toe-reach": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="10" r="4"/><line x1="30" y1="14" x2="20" y2="34"/><line x1="20" y1="34" x2="16" y2="50"/><line x1="30" y1="14" x2="42" y2="50"/></svg>',

  "side-bend": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="34" cy="10" r="4"/><line x1="32" y1="14" x2="26" y2="34"/><line x1="26" y1="34" x2="26" y2="56"/><line x1="32" y1="14" x2="44" y2="8"/></svg>',

  "ball-roll-back": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="34" cy="26" r="4"/><line x1="32" y1="30" x2="24" y2="38"/><line x1="24" y1="38" x2="24" y2="28"/><line x1="32" y1="30" x2="20" y2="44"/></svg>',

  "leg-over-twist": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="20" r="4"/><line x1="18" y1="20" x2="38" y2="20"/><line x1="38" y1="20" x2="30" y2="40"/><line x1="18" y1="20" x2="14" y2="34"/></svg>',

  "sit-reach": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="20" r="4"/><line x1="16" y1="24" x2="30" y2="40"/><line x1="30" y1="40" x2="50" y2="40"/><line x1="16" y1="24" x2="42" y2="30"/></svg>',

  "lying-quad-stretch": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="24" r="4"/><line x1="18" y1="26" x2="36" y2="32"/><line x1="36" y1="32" x2="30" y2="46"/><line x1="30" y1="46" x2="40" y2="34"/></svg>',

  "across-body-stretch": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="10" r="4"/><line x1="30" y1="14" x2="30" y2="40"/><line x1="30" y1="18" x2="46" y2="22"/><line x1="46" y1="22" x2="20" y2="26"/><line x1="30" y1="40" x2="24" y2="56"/><line x1="30" y1="40" x2="36" y2="56"/></svg>',

  "cows-face": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="14" r="4"/><line x1="30" y1="18" x2="30" y2="40"/><line x1="30" y1="20" x2="40" y2="10"/><line x1="40" y1="10" x2="34" y2="30"/><line x1="30" y1="24" x2="22" y2="34"/><line x1="22" y1="34" x2="34" y2="30"/></svg>',

  "shoulder-stretch": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="10" r="4"/><line x1="30" y1="14" x2="30" y2="40"/><line x1="30" y1="16" x2="36" y2="6"/><line x1="36" y1="6" x2="30" y2="22"/></svg>',

  "revolved-lunge": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="10" r="4"/><line x1="24" y1="14" x2="24" y2="28"/><line x1="24" y1="28" x2="16" y2="42"/><line x1="16" y1="42" x2="16" y2="56"/><line x1="24" y1="28" x2="38" y2="38"/><line x1="24" y1="18" x2="40" y2="6"/></svg>',

  "wind-release": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="34" r="4"/><line x1="18" y1="34" x2="34" y2="34"/><line x1="34" y1="34" x2="26" y2="22"/><line x1="26" y1="22" x2="18" y2="30"/></svg>',

  "neck-side": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="34" cy="10" r="4"/><line x1="30" y1="14" x2="30" y2="56"/><line x1="30" y1="18" x2="20" y2="24"/></svg>',

  "neck-forward": '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="12" r="4"/><line x1="30" y1="16" x2="30" y2="56"/><line x1="26" y1="18" x2="34" y2="18"/></svg>'
};
