bgCols = [
  "#FFF5EE", //seashell
  "#fbf6e3", //canvas
  "#E6E0D4", //white coffee
  "#FDDEBD", //butter white
  "#F6FCFA", //white rose
  "#ECECEE", //christmas white
  "#1F201F", //retro black
  "#212122", //ink black
  "#1B1B1B", //eerie black
  "#242124", //raisin black
];

bgNames = [
  "SeaShell",
  "Canvas",
  "White Coffee",
  "Butter White",
  "White Rose",
  "Christmas White",
  "Retro Black",
  "Ink Black",
  "Eerie Black",
  "Raisin Black",
];
//Background color parameters
bgNum = randomInt(0, 9);
bgc = '#ECECEE'//bgCols[bgNum];
bgName = bgNames[bgNum];

//Make a color that always contrasts bgc
calcBgLum = chroma(bgc).luminance();
if (calcBgLum > 0.5) {
  frameCol = 'black'; //black
} else if( calcBgLum < 0.5) {
  frameCol = 'white'; //white
}

//Palettes
//Always include frameCol instead of black or white so our colors don't blend into bgc
const source = [
  "#A6C8CA",
  "#097857",
  //"#F1E8D9",
  "#E3CE61",
  "#E35A7E",
  //frameCol,
  "#EE692A",
  //"#BFCCD4",
  "#217F96",
  //"#EBD5D7",
];

const shepard = [
  "#3D5A80", 
"#98C1D9", 
// "#E0FBFC", 
"#FF4D21", 
"#293241", 
frameCol
];

const mcWoot = ["#ED6A5A", "#636CCE", "#DFB2F4", "#50B386", "#55D6C2", frameCol];

const soft = [
  "#F94144",
  "#F3722C",
  "#F8961E",
  "#F9844A",
  "#F9C74F",
  "#90BE6D",
  "#43AA8B",
  "#4D908E",
  "#577590",
  "#277DA1",
  // frameCol,
  // "white",
];

 const seaFoam = [
 "#22577a", "#38a3a5", "#57cc99", "#80ed99", //"#c7f9cc", "#f2f9e8", "#f9f9f9"
] //credit Wouter Missler

const bau = [
  "#1267b7",
  "#ec3e2b",
  "#f6b81a",
  // "#E4D6C2",
  "#1D1F22",
]

const elliot = [
  "#E73542",
  "#F6A026",
  "#2CA8C4",
  "#EE7140",
  "#289C5B",
  // "#F5E2CC",
  // "#161117"
]

const wildberry = [
  '#62A8E5',
  '#BB76CF',
  '#407060',
  '#FF6C2F',
]

const burn = ["#00b4e2","#fd4f92","#ff7b89","#ffa070","#ffd403"]

const overlook = ["#3d4d20","#ad0b08","#1d5473","#798b97","#b76439","#d2955f"]

const retroBaby = [
  '#8fb886', 
"#e7b763", 
"#46abc7", 
"#9a0603", 
"#fc5207"]

comboA = ["#142e70", "#f74d13"]
comboE = ['#F57103', '#00598D', '#214C25']
comboF = ['#de3be1', "#e9a32b"]


const pals = [shepard, source, soft, mcWoot, comboE, comboA, comboF, burn, retroBaby, wildberry];

const palNames = [
  "Commander Shepard",
  "Source",
  "Soft",
  "McWoot",
  "Terra",
  "Spice",
  "Royal",
  "Burn",
  "Retro Baby",
  "Wildberry"
];

//Palette parameters
palNum = randomInt(0, pals.length-1);
pal = pals[palNum];
palName = palNames[palNum];

//Shuffle that full palette
truePal = shuff(pal);

//Pass our palette back to the CSS spinner
let root = document.documentElement;
root.style.setProperty("--c1", truePal[0]);
root.style.setProperty("--c2", truePal[1]);
root.style.setProperty("--c3", truePal[2]);
root.style.setProperty("--c4", truePal[3]);
