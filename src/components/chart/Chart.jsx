import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush, ReferenceLine } from 'recharts';

const data = [
  {
    name: 'December 30,2019',
    ConfirmedCase: 3,
    WeeklyCase: 0,
    Death: 0,
  },
  {
    name: 'January 6,2020',
    ConfirmedCase: 47,
    WeeklyCase: 44,
    Death: 1,
  },
  {
    name: 'January 13, 2020',
    ConfirmedCase: 89,
    WeeklyCase: 42,
    Death: 2,
  },
  {
    name: 'January 20, 2020',
    ConfirmedCase: 1896,
    WeeklyCase: 1807,
    Death: 53,
  },
  {
    name: 'January 27, 2020',
    ConfirmedCase: 12542,
    WeeklyCase: 10646,
    Death: 306,
  },

  {
    name: 'Febuary 3, 2020',
    ConfirmedCase: 23040,
    WeeklyCase: 10498,
    Death: 544,
  },
  {
    name: 'Febuary 10, 2020',
    ConfirmedCase: 31730,
    WeeklyCase: 8690,
    Death: 865,
  },
  {
    name: 'Febuary 17, 2020',
    ConfirmedCase: 9598,
    WeeklyCase: -22132,
    Death: 692,
  },
  {
    name: 'Febuary 24, 2020',
    ConfirmedCase: 8246,
    WeeklyCase: -1352,
    Death: 519,
  },

  {
    name: 'March 2, 2020',
    ConfirmedCase: 20543,
    WeeklyCase: 12297,
    Death: 687,
  },
  {
    name: 'March 9, 2020',
    ConfirmedCase: 58622,
    WeeklyCase: 38079,
    Death: 2473,
  },
  {
    name: 'March 16, 2020',
    ConfirmedCase: 172866,
    WeeklyCase: 114244,
    Death: 8411,
  },
  {
    name: 'March 23, 2020',
    ConfirmedCase: 369791,
    WeeklyCase: 196925,
    Death: 20767,
  },

  {
    name: 'Aril 6, 2020',
    ConfirmedCase: 553701,
    WeeklyCase: 53624,
    Death: 48736,
  },
  {
    name: 'April 13, 2020',
    ConfirmedCase: 529825,
    WeeklyCase: -23876,
    Death: 50342,
  },
  {
    name: 'April 20, 2020',
    ConfirmedCase: 556156,
    WeeklyCase: 26331,
    Death: 43571,
  },
  {
    name: 'April 27, 2020',
    ConfirmedCase: 556610,
    WeeklyCase: 454,
    Death: 40492,
  },
  {
    name: 'May 4, 2020',
    ConfirmedCase: 592883,
    WeeklyCase: 36273,
    Death: 38535,
  },
  {
    name: 'May 11, 2020',
    ConfirmedCase: 615164,
    WeeklyCase: 22281,
    Death: 36060,
  },
  {
    name: 'May 18, 2020',
    ConfirmedCase: 697359,
    WeeklyCase: 82195,
    Death: 34251,
  },
  {
    name: 'May 25, 2020',
    ConfirmedCase: 731012,
    WeeklyCase: 33653,
    Death: 33007,
  },


   {
    name: 'June 1, 2020',
    ConfirmedCase: 848691,
    WeeklyCase: 117679,
    Death: 34615,
  },
  {
    name: 'June 8, 2020',
    ConfirmedCase: 906485,
    WeeklyCase: 57794,
    Death: 35036,
  },
  {
    name: 'June 15, 2020',
    ConfirmedCase: 1032799,
    WeeklyCase: 126314,
    Death: 37412,
  },
  {
    name: 'June 22, 2020',
    ConfirmedCase: 1161152,
    WeeklyCase: 128353,
    Death: 36616,
  },
  {
    name: 'June 29, 2020',
    ConfirmedCase: 1335320,
    WeeklyCase: 173168,
    Death: 36341,
  },

  {
    name: 'July 6, 2020',
    ConfirmedCase: 1438808,
    WeeklyCase: 103488,
    Death: 38797,
  },
  {
    name: 'July 13, 2020',
    ConfirmedCase: 1586670,
    WeeklyCase: 147862,
    Death: 42953,
  },
  {
    name: 'July 20, 2020',
    ConfirmedCase: 1754901,
    WeeklyCase: 168231,
    Death: 44914,
  },
  {
    name: 'July 27, 2020',
    ConfirmedCase: 1847675,
    WeeklyCase: 92774,
    Death: 44839,
  },

  {
    name: 'August 3, 2020',
    ConfirmedCase: 1848290,
    WeeklyCase: 615,
    Death: 45715,
  },
  {
    name: 'August 10, 2020',
    ConfirmedCase: 1894810,
    WeeklyCase: 46520,
    Death: 44656,
  },
  {
    name: 'August 17, 2020',
    ConfirmedCase: 1831852,
    WeeklyCase: -62958,
    Death: 42726,
  },
  {
    name: 'August 24, 2020',
    ConfirmedCase: 1891573,
    WeeklyCase: 49721,
    Death: 41510,
  },
  {
    name: 'August 31, 2020',
    ConfirmedCase: 1989408,
    WeeklyCase: 107835,
    Death: 40131,
  },

  {
    name: 'September 7, 2020',
    ConfirmedCase: 1960103,
    WeeklyCase: -29305,
    Death: 43324,
  },
  {
    name: 'September 14, 2020',
    ConfirmedCase: 2102208,
    WeeklyCase: 142105,
    Death: 39009,
  },
  {
    name: 'September 21, 2020',
    ConfirmedCase: 2107848,
    WeeklyCase: 5640,
    Death: 37716,
  },
  {
    name: 'September 28, 2020',
    ConfirmedCase: 2150380,
    WeeklyCase: 42532,
    Death: 37625,
  },

  {
    name: 'October 5, 2020',
    ConfirmedCase: 2376307,
    WeeklyCase: 225927,
    Death: 37893,
  },
  {
    name: 'October 12, 2020',
    ConfirmedCase: 2614872,
    WeeklyCase: 238565,
    Death: 37863,
  },
  {
    name: 'October 19, 2020',
    ConfirmedCase: 3119609,
    WeeklyCase: 504737,
    Death: 42658,
  },
  {
    name: 'October 26, 2020',
    ConfirmedCase: 3533368,
    WeeklyCase: 413759,
    Death: 48000,
  },

  {
    name: 'November 2, 2020',
    ConfirmedCase: 3807939,
    WeeklyCase: 274571,
    Death: 57327,
  },
  {
    name: 'November 9, 2020',
    ConfirmedCase: 4037217,
    WeeklyCase: 229278,
    Death: 63712,
  },
  {
    name: 'November 16, 2020',
    ConfirmedCase: 4101619,
    WeeklyCase: 64402,
    Death: 72133,
  },
  {
    name: 'November 23, 2020',
    ConfirmedCase: 4029770,
    WeeklyCase: -71849,
    Death: 74802,
  },
  {
    name: 'November 30, 2020',
    ConfirmedCase: 4205742,
    WeeklyCase: 175972,
    Death: 78088,
  },

  {
    name: 'December 7, 2020',
    ConfirmedCase: 4398645,
    WeeklyCase: 192903,
    Death: 81081,
  },
  {
    name: 'December 14, 2020',
    ConfirmedCase: 4550648,
    WeeklyCase: 152003,
    Death: 84499,
  },
  {
    name: 'December 21, 2020',
    ConfirmedCase: 4140095,
    WeeklyCase: -410553,
    Death: 80547,
  },
  {
    name: 'December 28, 2020',
    ConfirmedCase: 4247064,
    WeeklyCase: 106969,
    Death: 84956,
  },

  {
    name: 'January 4, 2021',
    ConfirmedCase: 4985724,
    WeeklyCase: 738660,
    Death: 91362,
  },
  {
    name: 'January 11, 2021',
    ConfirmedCase: 4842059,
    WeeklyCase: -143665,
    Death: 99358,
  },
  {
    name: 'January 18, 2021',
    ConfirmedCase: 4234926,
    WeeklyCase: -607133,
    Death: 102094,
  },
  {
    name: 'January 25, 2021',
    ConfirmedCase: 3753747,
    WeeklyCase: -481179,
    Death: 99952,
  },

  {
    name: 'Febuary 1, 2021',
    ConfirmedCase: 3185301,
    WeeklyCase: -568446,
    Death: 88864,
  },
  {
    name: 'Febuary 8, 2021',
    ConfirmedCase: 2727915,
    WeeklyCase: 457386,
    Death: 81165,
  },
  {
    name: 'Febuary 15, 2021',
    ConfirmedCase: 2478978,
    WeeklyCase: -248937,
    Death: 67998,
  },
  {
    name: 'Febuary 22, 2021',
    ConfirmedCase: 2657898,
    WeeklyCase: 178920,
    Death: 63572,
  },

  {
    name: 'March 1, 2021',
    ConfirmedCase: 2736080,
    WeeklyCase: 78182,
    Death: 60045,
  },
  {
    name: 'March 8, 2021',
    ConfirmedCase: 2968164,
    WeeklyCase: 232084,
    Death: 60466,
  },
  {
    name: 'March 15, 2021',
    ConfirmedCase: 3339449,
    WeeklyCase: 371285,
    Death: 62930,
  },  
  {
    name: 'March 22, 2021',
    ConfirmedCase: 3829376,
    WeeklyCase: 489927,
    Death: 69233,
  },
  {
    name: 'March 29, 2021',
    ConfirmedCase: 4069365,
    WeeklyCase: 239989,
    Death: 75173,
  },

  {
    name: 'April 5, 2021',
    ConfirmedCase: 4588265,
    WeeklyCase: 518900,
    Death: 80222,
  },
  {
    name: 'April 12, 2021',
    ConfirmedCase: 5226666,
    WeeklyCase: 638401,
    Death: 85838,
  },
  {
    name: 'April 19, 2021',
    ConfirmedCase: 5693574,
    WeeklyCase: 466908,
    Death: 91537,
  },
  {
    name: 'April 26, 2021',
    ConfirmedCase: 5680384,
    WeeklyCase: -13190,
    Death: 95824,
  },

  {
    name: 'May 3, 2021',
    ConfirmedCase: 5467689,
    WeeklyCase: -212695,
    Death: 92160,
  },
  {
    name: 'May 10, 2021',
    ConfirmedCase: 4852692,
    WeeklyCase: -641997,
    Death: 87966,
  },
  {
    name: 'May 17, 2021',
    ConfirmedCase: 4227555,
    WeeklyCase: -598137,
    Death: 86501,
  },
  {
    name: 'May 24, 2021',
    ConfirmedCase: 3549237,
    WeeklyCase: -678318,
    Death: 78752,
  },
  {
    name: 'May 31, 2021',
    ConfirmedCase: 3014563,
    WeeklyCase: -534674,
    Death: 68672,
  },

  {
    name: 'June 7, 2021',
    ConfirmedCase: 2654771,
    WeeklyCase: -359792,
    Death: 71291,
  },
  {
    name: 'June 14, 2021',
    ConfirmedCase: 2544082,
    WeeklyCase: -110689,
    Death: 63131,
  },
  {
    name: 'June 21, 2021',
    ConfirmedCase: 2627076,
    WeeklyCase: 82994,
    Death: 56059,
  },
  {
    name: 'June 28, 2021',
    ConfirmedCase: 2743768,
    WeeklyCase: 116692,
    Death: 53725,
  },

  {
    name: 'July 5, 2021',
    ConfirmedCase: 3248608,
    WeeklyCase: 504841,
    Death: 54486,
  },
  {
    name: 'July 12, 2021',
    ConfirmedCase: 3587109,
    WeeklyCase: 338501,
    Death: 56203,
  },
  {
    name: 'July 19, 2021',
    ConfirmedCase: 3762611,
    WeeklyCase: 175502,
    Death: 69605,
  },
  {
    name: 'July 26, 2021',
    ConfirmedCase: 4139602,
    WeeklyCase: 376991,
    Death: 64975,
  },

  {
    name: 'August 2, 2021',
    ConfirmedCase: 4417396,
    WeeklyCase: 277794,
    Death: 68304,
  },
  {
    name: 'August 9, 2021',
    ConfirmedCase: 4513387,
    WeeklyCase: 95991,
    Death: 69499,
  },
  {
    name: 'August 16, 2021',
    ConfirmedCase: 4590334,
    WeeklyCase: 76947,
    Death: 70920,
  },
  {
    name: 'August 23, 2021',
    ConfirmedCase: 4577060,
    WeeklyCase: -13264,
    Death: 71326,
  },
  {
    name: 'August 30, 2021',
    ConfirmedCase: 4368617,
    WeeklyCase: -208443,
    Death: 67771,
  },

  {
    name: 'September 6, 2021',
    ConfirmedCase: 3941258,
    WeeklyCase: -427359,
    Death: 62623,
  },
  {
    name: 'September 13, 2021',
    ConfirmedCase: 3692575,
    WeeklyCase: -248683,
    Death: 60637,
  },
  {
    name: 'September 20, 2021',
    ConfirmedCase: 3514130,
    WeeklyCase: -178445,
    Death: 55708,
  },
  {
    name: 'September 27, 2021',
    ConfirmedCase: 3127634,
    WeeklyCase: -386496,
    Death: 52419,
  },

  {
    name: 'October 4, 2021',
    ConfirmedCase: 2956518,
    WeeklyCase: -171116,
    Death: 48265,
  },
  {
    name: 'October 11, 2021',
    ConfirmedCase: 2886306,
    WeeklyCase: -70212,
    Death: 46024,
  },
  {
    name: 'October 18, 2021',
    ConfirmedCase: 2993534,
    WeeklyCase: 107228,
    Death: 48923,
  },
  {
    name: 'October 25, 2021',
    ConfirmedCase: 3121531,
    WeeklyCase: 127997,
    Death: 50695,
  },

  {
    name: 'November 1, 2021',
    ConfirmedCase: 3171897,
    WeeklyCase: 50366,
    Death: 48941,
  },
  {
    name: 'November 8, 2021',
    ConfirmedCase: 3450802,
    WeeklyCase: 278905,
    Death: 50238,
  },
  {
    name: 'November 15, 2021',
    ConfirmedCase: 3836372,
    WeeklyCase: 385570,
    Death: 54610,
  },
  {
    name: 'November 22, 2021',
    ConfirmedCase: 4035487,
    WeeklyCase: 199115,
    Death: 50037,
  },
  {
    name: 'November 29, 2021',
    ConfirmedCase: 4261431,
    WeeklyCase: 225944,
    Death: 53754,
  },

  {
    name: 'December 6, 2021',
    ConfirmedCase: 4313642,
    WeeklyCase: 52211,
    Death: 49687,
  },
  {
    name: 'December 13, 2021',
    ConfirmedCase: 4648651,
    WeeklyCase: 335009,
    Death: 47365,
  },
  {
    name: 'December 20, 2021',
    ConfirmedCase: 5923324,
    WeeklyCase: 1274673,
    Death: 46438,
  },
  {
    name: 'December 27, 2021',
    ConfirmedCase: 10117445,
    WeeklyCase: 4194121,
    Death: 42829,
  },
  
  {
    name: 'January 3, 2022',
    ConfirmedCase: 16138109,
    WeeklyCase: 6020664,
    Death: 45422,
  },
  {
    name: 'January 10, 2022',
    ConfirmedCase: 20678033,
    WeeklyCase: 4548924,
    Death: 52245,
  },
  {
    name: 'January 17, 2022',
    ConfirmedCase: 23289114,
    WeeklyCase: 2602081,
    Death: 59558,
  },
  {
    name: 'January 24, 2022',
    ConfirmedCase: 23205292,
    WeeklyCase: -83822,
    Death: 67861,
  },
  {
    name: 'January 31, 2022',
    ConfirmedCase: 20157008,
    WeeklyCase: -3048284,
    Death: 75646,
  },

  {
    name: 'Febuary 7, 2022',
    ConfirmedCase: 16295830,
    WeeklyCase: -3861178,
    Death: 77223,
  },
  {
    name: 'Febuary 14, 2022',
    ConfirmedCase: 12889997,
    WeeklyCase: -3405833,
    Death: 69601,
  },
  {
    name: 'Febuary 21, 2022',
    ConfirmedCase: 10948103,
    WeeklyCase: -1941894,
    Death: 59821,
  },
  {
    name: 'Febuary 28, 2022',
    ConfirmedCase: 10553442,
    WeeklyCase: -394661,
    Death: 51840,
  },

  {
    name: 'March 7, 2022',
    ConfirmedCase: 11674734,
    WeeklyCase: 1121292,
    Death: 43687,
  },
  {
    name: 'March 14, 2022',
    ConfirmedCase: 12762784,
    WeeklyCase: 1088050,
    Death: 33853,
  },
  {
    name: 'March 21, 2022',
    ConfirmedCase: 11128443,
    WeeklyCase: -1634341,
    Death: 46863,
  },
  {
    name: 'March 28, 2022',
    ConfirmedCase: 9489236,
    WeeklyCase: -1639207,
    Death: 27778,
  },

  {
    name: 'April 4, 2022',
    ConfirmedCase: 7486637,
    WeeklyCase: -2002599,
    Death: 23353,
  },
  {
    name: 'April 11, 2022',
    ConfirmedCase: 5815703,
    WeeklyCase: -1670934,
    Death: 20019,
  },
  {
    name: 'April 18, 2022',
    ConfirmedCase: 4746869,
    WeeklyCase: -1068834,
    Death: 17260,
  },
  {
    name: 'April 25, 2022',
    ConfirmedCase: 4031002,
    WeeklyCase: -715867,
    Death: 16736,
  },

  {
    name: 'May 2, 2022',
    ConfirmedCase: 3706365,
    WeeklyCase: -324637,
    Death: 13205,
  },
  {
    name: 'May 9, 2022',
    ConfirmedCase: 3928429,
    WeeklyCase: 222064,
    Death: 11268,
  },
  {
    name: 'May 16, 2022',
    ConfirmedCase: 3844355,
    WeeklyCase: -84074,
    Death: 10524,
  },
  {
    name: 'May 23, 2022',
    ConfirmedCase: 3463417,
    WeeklyCase: -380938,
    Death: 10298,
  },
  {
    name: 'May 30, 2022',
    ConfirmedCase: 3279382,
    WeeklyCase: -184035,
    Death: 8884,
  },

  {
    name: 'June 6, 2022',
    ConfirmedCase: 3499794,
    WeeklyCase: 220412,
    Death: 9296,
  },
  {
    name: 'June 13, 2022',
    ConfirmedCase: 3718618,
    WeeklyCase: 218824,
    Death: 9389,
  },
  {
    name: 'June 20, 2022',
    ConfirmedCase: 4580421,
    WeeklyCase: 861803,
    Death: 10265,
  },
  {
    name: 'June 27, 2022',
    ConfirmedCase: 5544026,
    WeeklyCase: 963605,
    Death: 10994,
  },

  {
    name: 'July 4, 2022',
    ConfirmedCase: 6361353,
    WeeklyCase: 817327,
    Death: 12113,
  },
  {
    name: 'July 11, 2022',
    ConfirmedCase: 6849282,
    WeeklyCase: 487929,
    Death: 13924,
  },
  {
    name: 'July 18, 2022',
    ConfirmedCase: 7291722,
    WeeklyCase: 442440,
    Death: 15886,
  },
  {
    name: 'July 25, 2022',
    ConfirmedCase: 6842333,
    WeeklyCase: -449389,
    Death: 17339,
  },

  {
    name: 'August 1, 2022',
    ConfirmedCase: 7175250,
    WeeklyCase: 332917,
    Death: 17178,
  },
  {
    name: 'August 8, 2022',
    ConfirmedCase: 5863147,
    WeeklyCase: -1312103,
    Death: 17883,
  },
  {
    name: 'August 15, 2022',
    ConfirmedCase: 5472281,
    WeeklyCase: -390866,
    Death: 16482,
  },
  {
    name: 'August 22, 2022',
    ConfirmedCase: 4798358,
    WeeklyCase: -673923,
    Death: 15339,
  },
  {
    name: 'August 29, 2022',
    ConfirmedCase: 4338945,
    WeeklyCase: -459413,
    Death: 14487,
  },

  {
    name: 'September 5, 2022',
    ConfirmedCase: 3266191,
    WeeklyCase: -1072754,
    Death: 12255,
  },
  {
    name: 'September 12, 2022',
    ConfirmedCase: 3394383,
    WeeklyCase: 128192,
    Death: 11137,
  },
  {
    name: 'September 19, 2022',
    ConfirmedCase: 3171559,
    WeeklyCase: -222824,
    Death: 9890,
  },
  {
    name: 'September 26, 2022',
    ConfirmedCase: 3251538,
    WeeklyCase: 79979,
    Death: 9388,
  },

  {
    name: 'October 3, 2022',
    ConfirmedCase: 3060199,
    WeeklyCase: -191339,
    Death: 8882,
  },
  {
    name: 'October 10, 2022',
    ConfirmedCase: 3125680,
    WeeklyCase: 65481,
    Death: 8629,
  },
  {
    name: 'October 17, 2022',
    ConfirmedCase: 1041500,
    WeeklyCase: -2023417,
    Death: 2274,
  },

];

const Chart = () => {
  return (
   
    <div className="chart">
      <h3>Global confirmed cases timeline</h3>
       <ResponsiveContainer width={1000} height={500}>
       <AreaChart width={800} height={500} data={data}
  margin={{ top: 5, right:0, left: 20, bottom: 10 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0047AB" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#0047AB" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FFA701" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#FFA701" stopOpacity={0}/>
    </linearGradient>

    <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#D22B2B" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#D22B2B" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <ReferenceLine x="January 17, 2022" stroke="blue" label="" />
  <ReferenceLine y={23289114} label="Highest confirmed cases" stroke="blue" />

  <ReferenceLine x="January 3, 2022" stroke="gold" label="" />
  <ReferenceLine y={6020664} label="Highest increase rate" stroke="gold" />

  <ReferenceLine x="January 18, 2021" stroke="red" label=""   />
  <ReferenceLine y={102093} label="Highest death rate" stroke="red" />

  <Area type="monotone" dataKey="ConfirmedCase" stroke="#0047AB" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="WeeklyCase" stroke="#FFA701" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey="Death" stroke="#D22B2B" fillOpacity={1} fill="url(#colorAmt)" />
 
 
 <Brush/>
 
</AreaChart>
      </ResponsiveContainer>
    </div>

    
  )
}

export default Chart