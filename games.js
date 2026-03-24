// ============================================================
//  GAMES LIST — add your games here!
//
//  To add a game, copy one of the lines below and fill it in:
//  { title: "Game Name", tag: "io", icon: "🎮", bg: "#e3f2fd", url: "https://..." },
//
//  Tags:  io | puzzle | action | sports | survival | building
//
//  Background colors (pick any):
//  Blue:   #e3f2fd
//  Green:  #e8f5e9
//  Purple: #f3e5f5
//  Orange: #fff3e0
//  Pink:   #fce4ec
//  Teal:   #e0f2f1
//  Yellow: #fff8e1
// ============================================================

const GAMES = [
  // .IO GAMES (confirmed working)
  { title: "Survev.io",         tag: "io",       icon: "🏕️", bg: "#fce4ec", url: "https://www.miniplay.com/embed/survev-io" },
  { title: "Bloxd.io",          tag: "io",       icon: "🧱", bg: "#e3f2fd", url: "https://www.miniplay.com/embed/bloxd-io" },
  { title: "Vortex.io",         tag: "io",       icon: "🌀", bg: "#f3e5f5", url: "https://www.miniplay.com/embed/vortex-io" },
  { title: "2v2.io",            tag: "io",       icon: "⚔️", bg: "#fce4ec", url: "https://www.miniplay.com/embed/2v2-io" },
  { title: "Mk48.io",           tag: "io",       icon: "🚢", bg: "#e3f2fd", url: "https://www.miniplay.com/embed/mk48-io" },
  { title: "Narrow One",        tag: "io",       icon: "🏹", bg: "#e8f5e9", url: "https://www.miniplay.com/embed/narrow-one" },
  { title: "Deadshot.io",       tag: "io",       icon: "🎯", bg: "#fce4ec", url: "https://www.miniplay.com/embed/deadshot-io" },
  { title: "Ev.io",             tag: "io",       icon: "🔫", bg: "#fff3e0", url: "https://www.miniplay.com/embed/ev-io" },
  { title: "Warbrokers.io",     tag: "io",       icon: "💂", bg: "#e8f5e9", url: "https://www.miniplay.com/embed/warbrokers-io" },
  { title: "Taming.io",         tag: "io",       icon: "🐉", bg: "#e0f2f1", url: "https://www.miniplay.com/embed/taming-io" },
  { title: "Snowball.io",       tag: "io",       icon: "❄️", bg: "#e3f2fd", url: "https://www.miniplay.com/embed/snowball-io" },
  { title: "Kirka.io",          tag: "io",       icon: "🪖", bg: "#fff8e1", url: "https://www.miniplay.com/embed/kirka-io" },

  // ACTION
  { title: "Bullet Force",      tag: "action",   icon: "💣", bg: "#e8f5e9", url: "https://www.miniplay.com/embed/bullet-force-multiplayer" },
  { title: "Forward Assault",   tag: "action",   icon: "🔫", bg: "#fff3e0", url: "https://www.miniplay.com/embed/forward-assault-remix" },
  { title: "Smash Karts",       tag: "action",   icon: "🏎️", bg: "#fce4ec", url: "https://www.miniplay.com/embed/smash-karts" },

  // SURVIVAL
  { title: "Tsunamis.io",       tag: "survival", icon: "🌊", bg: "#e3f2fd", url: "https://www.miniplay.com/embed/tsunamis-io" },
  { title: "Meeland.io",        tag: "survival", icon: "🐾", bg: "#e8f5e9", url: "https://www.miniplay.com/embed/meeland-io" },
  { title: "Minicraft",         tag: "survival", icon: "🌲", bg: "#e0f2f1", url: "https://www.miniplay.com/embed/minicraft" },

  // BUILDING
  { title: "Minecraft Classic", tag: "building", icon: "⛏️", bg: "#e0f2f1", url: "https://classic.minecraft.net" },

  // PUZZLE
  { title: "Chess",             tag: "puzzle",   icon: "♟️", bg: "#e0f2f1", url: "https://playpager.com/embed/chess/index.html" },
  { title: "Sudoku",            tag: "puzzle",   icon: "🔢", bg: "#e8f5e9", url: "https://playpager.com/embed/sudoku/index.html" },
  { title: "Solitaire",         tag: "puzzle",   icon: "🃏", bg: "#fce4ec", url: "https://playpager.com/embed/solitaire/index.html" },
  { title: "Checkers",          tag: "puzzle",   icon: "🔴", bg: "#fff8e1", url: "https://playpager.com/embed/checkers/index.html" },
  { title: "Minesweeper",       tag: "puzzle",   icon: "💣", bg: "#f3e5f5", url: "https://playpager.com/embed/minesweeper/index.html" },

  // SPORTS
  { title: "Basketball Stars",  tag: "sports",   icon: "🏀", bg: "#fff3e0", url: "https://www.miniplay.com/embed/basketball-stars" },
  { title: "Soccer Skills",     tag: "sports",   icon: "⚽", bg: "#e8f5e9", url: "https://www.miniplay.com/embed/soccer-skills-world-cup" },
  { title: "Penalty Shootout",  tag: "sports",   icon: "🥅", bg: "#fce4ec", url: "https://www.miniplay.com/embed/penalty-shooters-2" },

  // RACING / SLOPE
  { title: "Snow Rider 3D",     tag: "action",   icon: "🛷", bg: "#e3f2fd", url: "https://www.miniplay.com/embed/snow-rider-3d" },
  { title: "Slope 3D",          tag: "action",   icon: "🎿", bg: "#f3e5f5", url: "https://www.miniplay.com/embed/slope-3d" },
  { title: "Slope 3",           tag: "action",   icon: "🔵", bg: "#e8f5e9", url: "https://www.miniplay.com/embed/slope-3" },
];
