const Promise = require('bluebird');
const db = require('./models/_db');
const Station = require('./models/station');

const data = {
	"station": [
		{
			"station_id": 72,
			"name": "W 52 St & 11 Ave",
			"lat": 40.76727216,
			"lon": -73.99392888,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 79,
			"name": "Franklin St & W Broadway",
			"lat": 40.71911552,
			"lon": -74.00666661,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 82,
			"name": "St James Pl & Pearl St",
			"lat": 40.71117416,
			"lon": -74.00016545,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 83,
			"name": "Atlantic Ave & Fort Greene Pl",
			"lat": 40.68382604,
			"lon": -73.97632328,
			"region_id": 71,
			"capacity": 62
		},
		{
			"station_id": 116,
			"name": "W 17 St & 8 Ave",
			"lat": 40.74177603,
			"lon": -74.00149746,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 119,
			"name": "Park Ave & St Edwards St",
			"lat": 40.69608941,
			"lon": -73.97803415,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 120,
			"name": "Lexington Ave & Classon Ave",
			"lat": 40.68676793,
			"lon": -73.95928168,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 127,
			"name": "Barrow St & Hudson St",
			"lat": 40.73172428,
			"lon": -74.00674436,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 128,
			"name": "MacDougal St & Prince St",
			"lat": 40.72710258,
			"lon": -74.00297088,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 137,
			"name": "E 56 St & Madison Ave",
			"lat": 40.761628,
			"lon": -73.972924,
			"region_id": 71,
			"capacity": 46
		},
		{
			"station_id": 143,
			"name": "Clinton St & Joralemon St",
			"lat": 40.69239502,
			"lon": -73.99337909,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 144,
			"name": "Nassau St & Navy St",
			"lat": 40.69839895,
			"lon": -73.98068914,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 146,
			"name": "Hudson St & Reade St",
			"lat": 40.71625008,
			"lon": -74.0091059,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 147,
			"name": "Greenwich St & Warren St",
			"lat": 40.71542197,
			"lon": -74.01121978,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 150,
			"name": "E 2 St & Avenue C",
			"lat": 40.7208736,
			"lon": -73.98085795,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 151,
			"name": "Cleveland Pl & Spring St",
			"lat": 40.722103786686034,
			"lon": -73.99724900722504,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 152,
			"name": "Warren St & Church St",
			"lat": 40.71473993,
			"lon": -74.00910627,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 153,
			"name": "E 40 St & 5 Ave",
			"lat": 40.752062307,
			"lon": -73.9816324043,
			"region_id": 71,
			"capacity": 55
		},
		{
			"station_id": 157,
			"name": "Henry St & Atlantic Ave",
			"lat": 40.69089272,
			"lon": -73.99612349,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 161,
			"name": "LaGuardia Pl & W 3 St",
			"lat": 40.72917025,
			"lon": -73.99810231,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 164,
			"name": "E 47 St & 2 Ave",
			"lat": 40.75323098,
			"lon": -73.97032517,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 167,
			"name": "E 39 St & 3 Ave",
			"lat": 40.7489006,
			"lon": -73.97604882,
			"region_id": 71,
			"capacity": 45
		},
		{
			"station_id": 168,
			"name": "W 18 St & 6 Ave",
			"lat": 40.73971301,
			"lon": -73.99456405,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 173,
			"name": "Broadway & W 49 St",
			"lat": 40.76068327096592,
			"lon": -73.9845272898674,
			"region_id": 71,
			"capacity": 51
		},
		{
			"station_id": 174,
			"name": "E 25 St & 1 Ave",
			"lat": 40.7381765,
			"lon": -73.97738662,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 195,
			"name": "Liberty St & Broadway",
			"lat": 40.70905623,
			"lon": -74.01043382,
			"region_id": 71,
			"capacity": 45
		},
		{
			"station_id": 212,
			"name": "W 16 St & The High Line",
			"lat": 40.74334935,
			"lon": -74.00681753,
			"region_id": 71,
			"capacity": 28
		},
		{
			"station_id": 216,
			"name": "Columbia Heights & Cranberry St",
			"lat": 40.70037867,
			"lon": -73.99548059,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 217,
			"name": "Old Fulton St",
			"lat": 40.70277159,
			"lon": -73.99383605,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 223,
			"name": "W 13 St & 7 Ave",
			"lat": 40.73781509,
			"lon": -73.99994661,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 224,
			"name": "Spruce St & Nassau St",
			"lat": 40.71146364,
			"lon": -74.00552427,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 225,
			"name": "W 14 St & The High Line",
			"lat": 40.74195138,
			"lon": -74.00803013,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 228,
			"name": "E 48 St & 3 Ave",
			"lat": 40.7546011026,
			"lon": -73.971878855,
			"region_id": 71,
			"capacity": 55
		},
		{
			"station_id": 229,
			"name": "Great Jones St",
			"lat": 40.72743423,
			"lon": -73.99379025,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 232,
			"name": "Cadman Plaza E & Tillary St",
			"lat": 40.69597683,
			"lon": -73.99014892,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 236,
			"name": "St Marks Pl & 2 Ave",
			"lat": 40.7284186,
			"lon": -73.98713956,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 237,
			"name": "E 11 St & 2 Ave",
			"lat": 40.73047309,
			"lon": -73.98672378,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 238,
			"name": "Bank St & Washington St",
			"lat": 40.7361967,
			"lon": -74.00859207,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 239,
			"name": "Willoughby St & Fleet St",
			"lat": 40.69196566,
			"lon": -73.9813018,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 241,
			"name": "DeKalb Ave & S Portland Ave",
			"lat": 40.68981035,
			"lon": -73.97493121,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 242,
			"name": "Carlton Ave & Flushing Ave",
			"lat": 40.697787,
			"lon": -73.973736,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 243,
			"name": "Fulton St & Rockwell Pl",
			"lat": 40.688226,
			"lon": -73.979382,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 244,
			"name": "Willoughby Ave & Hall St",
			"lat": 40.69196035,
			"lon": -73.96536851,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 245,
			"name": "Myrtle Ave & St Edwards St",
			"lat": 40.69327018,
			"lon": -73.97703874,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 247,
			"name": "Perry St & Bleecker St",
			"lat": 40.73535398,
			"lon": -74.00483091,
			"region_id": 71,
			"capacity": 20
		},
		{
			"station_id": 248,
			"name": "Laight St & Hudson St",
			"lat": 40.72185379,
			"lon": -74.00771779,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 249,
			"name": "Harrison St & Hudson St",
			"lat": 40.71870987,
			"lon": -74.0090009,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 251,
			"name": "Mott St & Prince St",
			"lat": 40.72317958,
			"lon": -73.99480012,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 252,
			"name": "MacDougal St & Washington Sq",
			"lat": 40.73226398,
			"lon": -73.99852205,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 253,
			"name": "W 13 St & 5 Ave",
			"lat": 40.73543934,
			"lon": -73.99453948,
			"region_id": 71,
			"capacity": 55
		},
		{
			"station_id": 254,
			"name": "W 11 St & 6 Ave",
			"lat": 40.73532427,
			"lon": -73.99800419,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 257,
			"name": "Lispenard St & Broadway",
			"lat": 40.71939226,
			"lon": -74.00247214,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 258,
			"name": "DeKalb Ave & Vanderbilt Ave",
			"lat": 40.68940747,
			"lon": -73.96885458,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 259,
			"name": "South St & Whitehall St",
			"lat": 40.70122128,
			"lon": -74.01234218,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 260,
			"name": "Broad St & Bridge St",
			"lat": 40.70365182,
			"lon": -74.01167797,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 261,
			"name": "Johnson St & Gold St",
			"lat": 40.69474881,
			"lon": -73.98362464,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 262,
			"name": "Washington Park",
			"lat": 40.6917823,
			"lon": -73.9737299,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 263,
			"name": "Grand St & Elizabeth St",
			"lat": 40.718822,
			"lon": -73.995906,
			"region_id": 71,
			"capacity": 45
		},
		{
			"station_id": 264,
			"name": "Maiden Ln & Pearl St",
			"lat": 40.70706456,
			"lon": -74.00731853,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 265,
			"name": "Stanton St & Chrystie St",
			"lat": 40.72229346,
			"lon": -73.99147535,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 266,
			"name": "Avenue D & E 8 St",
			"lat": 40.72368361,
			"lon": -73.97574813,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 267,
			"name": "Broadway & W 36 St",
			"lat": 40.75097711,
			"lon": -73.98765428,
			"region_id": 71,
			"capacity": 57
		},
		{
			"station_id": 268,
			"name": "Howard St & Centre St",
			"lat": 40.71910537,
			"lon": -73.99973337,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 270,
			"name": "Adelphi St & Myrtle Ave",
			"lat": 40.69308257,
			"lon": -73.97178913,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 274,
			"name": "Lafayette Ave & Fort Greene Pl",
			"lat": 40.68691865,
			"lon": -73.976682,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 275,
			"name": "Washington Ave & Greene Ave",
			"lat": 40.68650065,
			"lon": -73.96563307,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 276,
			"name": "Duane St & Greenwich St",
			"lat": 40.71748752,
			"lon": -74.0104554,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 278,
			"name": "Concord St & Bridge St",
			"lat": 40.69766564,
			"lon": -73.98476437,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 279,
			"name": "Peck Slip & Front St",
			"lat": 40.707873,
			"lon": -74.00167,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 280,
			"name": "E 10 St & 5 Ave",
			"lat": 40.73331967,
			"lon": -73.99510132,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 281,
			"name": "Grand Army Plaza & Central Park S",
			"lat": 40.7643971,
			"lon": -73.97371465,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 282,
			"name": "Kent Ave & S 11 St",
			"lat": 40.707644944175705,
			"lon": -73.96841526031494,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 284,
			"name": "Greenwich Ave & 8 Ave",
			"lat": 40.7390169121,
			"lon": -74.0026376103,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 285,
			"name": "Broadway & E 14 St",
			"lat": 40.73454567,
			"lon": -73.99074142,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 289,
			"name": "Monroe St & Classon Ave",
			"lat": 40.6845683,
			"lon": -73.95881081,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 291,
			"name": "Madison St & Montgomery St",
			"lat": 40.713126,
			"lon": -73.984844,
			"region_id": 71,
			"capacity": 20
		},
		{
			"station_id": 295,
			"name": "Pike St & E Broadway",
			"lat": 40.71406667,
			"lon": -73.99293911,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 296,
			"name": "Division St & Bowery",
			"lat": 40.71413089,
			"lon": -73.9970468,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 297,
			"name": "E 15 St & 3 Ave",
			"lat": 40.734232,
			"lon": -73.986923,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 298,
			"name": "3 Ave & Schermerhorn St",
			"lat": 40.68683208,
			"lon": -73.9796772,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 301,
			"name": "E 2 St & Avenue B",
			"lat": 40.72217444,
			"lon": -73.98368779,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 302,
			"name": "Avenue D & E 3 St",
			"lat": 40.72082834,
			"lon": -73.97793172,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 303,
			"name": "Mercer St & Spring St",
			"lat": 40.72362738,
			"lon": -73.99949601,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 304,
			"name": "Broadway & Battery Pl",
			"lat": 40.70463334,
			"lon": -74.01361706,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 305,
			"name": "E 58 St & 3 Ave",
			"lat": 40.76095756,
			"lon": -73.96724467,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 306,
			"name": "Cliff St & Fulton St",
			"lat": 40.70823502,
			"lon": -74.00530063,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 307,
			"name": "Canal St & Rutgers St",
			"lat": 40.71427487,
			"lon": -73.98990025,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 308,
			"name": "St James Pl & Oliver St",
			"lat": 40.71307916,
			"lon": -73.99851193,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 309,
			"name": "Murray St & West St",
			"lat": 40.7149787,
			"lon": -74.013012,
			"region_id": 71,
			"capacity": 41
		},
		{
			"station_id": 310,
			"name": "State St & Smith St",
			"lat": 40.68926942,
			"lon": -73.98912867,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 311,
			"name": "Norfolk St & Broome St",
			"lat": 40.7172274,
			"lon": -73.98802084,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 312,
			"name": "Allen St & Stanton St",
			"lat": 40.722055,
			"lon": -73.989111,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 313,
			"name": "Washington Ave & Park Ave",
			"lat": 40.69610226,
			"lon": -73.96751037,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 315,
			"name": "South St & Gouverneur Ln",
			"lat": 40.70355377,
			"lon": -74.00670227,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 316,
			"name": "Fulton St & William St",
			"lat": 40.70955958,
			"lon": -74.00653609,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 317,
			"name": "E 6 St & Avenue B",
			"lat": 40.72453734,
			"lon": -73.98185424,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 319,
			"name": "Fulton St & Broadway",
			"lat": 40.711066,
			"lon": -74.009447,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 320,
			"name": "Leonard St & Church St",
			"lat": 40.717571,
			"lon": -74.005549,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 321,
			"name": "Cadman Plaza E & Red Cross Pl",
			"lat": 40.69991755,
			"lon": -73.98971773,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 322,
			"name": "Clinton St & Tillary St",
			"lat": 40.696192,
			"lon": -73.991218,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 323,
			"name": "Lawrence St & Willoughby St",
			"lat": 40.69236178,
			"lon": -73.98631746,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 324,
			"name": "DeKalb Ave & Hudson Ave",
			"lat": 40.689888,
			"lon": -73.981013,
			"region_id": 71,
			"capacity": 51
		},
		{
			"station_id": 325,
			"name": "E 19 St & 3 Ave",
			"lat": 40.73624527,
			"lon": -73.98473765,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 326,
			"name": "E 11 St & 1 Ave",
			"lat": 40.72953837,
			"lon": -73.98426726,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 327,
			"name": "Vesey Pl & River Terrace",
			"lat": 40.7153379,
			"lon": -74.01658354,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 328,
			"name": "Watts St & Greenwich St",
			"lat": 40.72405549,
			"lon": -74.00965965,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 329,
			"name": "Greenwich St & Hubert St",
			"lat": 40.721319,
			"lon": -74.010065,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 330,
			"name": "Reade St & Broadway",
			"lat": 40.71450451,
			"lon": -74.00562789,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 331,
			"name": "Pike St & Monroe St",
			"lat": 40.71173107,
			"lon": -73.99193043,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 332,
			"name": "Cherry St",
			"lat": 40.71219906,
			"lon": -73.97948148,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 334,
			"name": "W 20 St & 7 Ave",
			"lat": 40.74238787,
			"lon": -73.99726235,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 335,
			"name": "Washington Pl & Broadway",
			"lat": 40.72903917,
			"lon": -73.99404649,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 336,
			"name": "Sullivan St & Washington Sq",
			"lat": 40.73047747,
			"lon": -73.99906065,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 337,
			"name": "Old Slip & Front St",
			"lat": 40.7037992,
			"lon": -74.00838676,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 339,
			"name": "Avenue D & E 12 St",
			"lat": 40.72580614,
			"lon": -73.97422494,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 340,
			"name": "Madison St & Clinton St",
			"lat": 40.71269042,
			"lon": -73.98776323,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 341,
			"name": "Stanton St & Mangin St",
			"lat": 40.71782143,
			"lon": -73.97628939,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 342,
			"name": "Columbia St & Rivington St",
			"lat": 40.71739973,
			"lon": -73.98016555,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 343,
			"name": "Clinton Ave & Flushing Ave",
			"lat": 40.69794,
			"lon": -73.96986848,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 344,
			"name": "Monroe St & Bedford Ave",
			"lat": 40.6851443,
			"lon": -73.95380904,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 345,
			"name": "W 13 St & 6 Ave",
			"lat": 40.73649403,
			"lon": -73.99704374,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 346,
			"name": "Bank St & Hudson St",
			"lat": 40.73652889,
			"lon": -74.00618026,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 347,
			"name": "Greenwich St & W Houston St",
			"lat": 40.728846,
			"lon": -74.008591,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 348,
			"name": "W Broadway & Spring St",
			"lat": 40.72490985,
			"lon": -74.00154702,
			"region_id": 71,
			"capacity": 42
		},
		{
			"station_id": 349,
			"name": "Rivington St & Ridge St",
			"lat": 40.71850211,
			"lon": -73.98329859,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 350,
			"name": "Clinton St & Grand St",
			"lat": 40.71559509,
			"lon": -73.9870295,
			"region_id": 71,
			"capacity": 28
		},
		{
			"station_id": 351,
			"name": "Front St & Maiden Ln",
			"lat": 40.70530954,
			"lon": -74.00612572,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 352,
			"name": "W 56 St & 6 Ave",
			"lat": 40.76340613,
			"lon": -73.97722479,
			"region_id": 71,
			"capacity": 3
		},
		{
			"station_id": 353,
			"name": "S Portland Ave & Hanson Pl",
			"lat": 40.68539567,
			"lon": -73.97431458,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 354,
			"name": "Emerson Pl & Myrtle Ave",
			"lat": 40.69363137,
			"lon": -73.96223558,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 355,
			"name": "Bayard St & Baxter St",
			"lat": 40.71602118,
			"lon": -73.99974372,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 356,
			"name": "Bialystoker Pl & Delancey St",
			"lat": 40.71622644,
			"lon": -73.98261206,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 357,
			"name": "E 11 St & Broadway",
			"lat": 40.73261787,
			"lon": -73.99158043,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 358,
			"name": "Christopher St & Greenwich St",
			"lat": 40.73291553,
			"lon": -74.00711384,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 359,
			"name": "E 47 St & Park Ave",
			"lat": 40.75510267,
			"lon": -73.97498696,
			"region_id": 71,
			"capacity": 55
		},
		{
			"station_id": 360,
			"name": "William St & Pine St",
			"lat": 40.70717936,
			"lon": -74.00887308,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 361,
			"name": "Allen St & Hester St",
			"lat": 40.71605866,
			"lon": -73.99190759,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 362,
			"name": "Broadway & W 37 St",
			"lat": 40.75172632,
			"lon": -73.98753523,
			"region_id": 71,
			"capacity": 57
		},
		{
			"station_id": 363,
			"name": "West Thames St",
			"lat": 40.70834698,
			"lon": -74.01713445,
			"region_id": 71,
			"capacity": 49
		},
		{
			"station_id": 364,
			"name": "Lafayette Ave & Classon Ave",
			"lat": 40.68900443,
			"lon": -73.96023854,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 365,
			"name": "Fulton St & Grand Ave",
			"lat": 40.68223166,
			"lon": -73.9614583,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 366,
			"name": "Clinton Ave & Myrtle Ave",
			"lat": 40.693261,
			"lon": -73.968896,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 367,
			"name": "E 53 St & Lexington Ave",
			"lat": 40.75828065,
			"lon": -73.97069431,
			"region_id": 71,
			"capacity": 34
		},
		{
			"station_id": 368,
			"name": "Carmine St & 6 Ave",
			"lat": 40.73038599,
			"lon": -74.00214988,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 369,
			"name": "Washington Pl & 6 Ave",
			"lat": 40.73224119,
			"lon": -74.00026394,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 372,
			"name": "Franklin Ave & Myrtle Ave",
			"lat": 40.694528,
			"lon": -73.958089,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 373,
			"name": "Willoughby Ave & Walworth St",
			"lat": 40.69331716,
			"lon": -73.95381995,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 376,
			"name": "John St & William St",
			"lat": 40.70862144,
			"lon": -74.00722156,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 377,
			"name": "6 Ave & Canal St",
			"lat": 40.72243797,
			"lon": -74.00566443,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 379,
			"name": "W 31 St & 7 Ave",
			"lat": 40.749156,
			"lon": -73.9916,
			"region_id": 71,
			"capacity": 42
		},
		{
			"station_id": 380,
			"name": "W 4 St & 7 Ave S",
			"lat": 40.73401143,
			"lon": -74.00293877,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 382,
			"name": "University Pl & E 14 St",
			"lat": 40.73492695,
			"lon": -73.99200509,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 383,
			"name": "Greenwich Ave & Charles St",
			"lat": 40.735238,
			"lon": -74.000271,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 384,
			"name": "Fulton St & Washington Ave",
			"lat": 40.683048,
			"lon": -73.964915,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 385,
			"name": "E 55 St & 2 Ave",
			"lat": 40.75797322,
			"lon": -73.96603308,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 386,
			"name": "Centre St & Worth St",
			"lat": 40.71494807,
			"lon": -74.00234482,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 387,
			"name": "Centre St & Chambers St",
			"lat": 40.71273266,
			"lon": -74.0046073,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 388,
			"name": "W 26 St & 10 Ave",
			"lat": 40.749717753,
			"lon": -74.002950346,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 389,
			"name": "Broadway & Berry St",
			"lat": 40.71044554,
			"lon": -73.96525063,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 390,
			"name": "Duffield St & Willoughby St",
			"lat": 40.69221589,
			"lon": -73.9842844,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 391,
			"name": "Clark St & Henry St",
			"lat": 40.69760127,
			"lon": -73.99344559,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 392,
			"name": "Jay St & Tech Pl",
			"lat": 40.695065,
			"lon": -73.987167,
			"region_id": 71,
			"capacity": 32
		},
		{
			"station_id": 393,
			"name": "E 5 St & Avenue C",
			"lat": 40.72299208,
			"lon": -73.97995466,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 394,
			"name": "E 9 St & Avenue C",
			"lat": 40.72521311,
			"lon": -73.97768752,
			"region_id": 71,
			"capacity": 32
		},
		{
			"station_id": 395,
			"name": "Bond St & Schermerhorn St",
			"lat": 40.68807003,
			"lon": -73.98410637,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 396,
			"name": "Lefferts Pl & Franklin Ave",
			"lat": 40.680342423,
			"lon": -73.9557689392,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 397,
			"name": "Fulton St & Clermont Ave",
			"lat": 40.68415748,
			"lon": -73.96922273,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 398,
			"name": "Atlantic Ave & Furman St",
			"lat": 40.69165183,
			"lon": -73.9999786,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 399,
			"name": "Lafayette Ave & St James Pl",
			"lat": 40.68851534,
			"lon": -73.9647628,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 400,
			"name": "Pitt St & Stanton St",
			"lat": 40.71926081,
			"lon": -73.98178024,
			"region_id": 71,
			"capacity": 15
		},
		{
			"station_id": 401,
			"name": "Allen St & Rivington St",
			"lat": 40.72019576,
			"lon": -73.98997825,
			"region_id": 71,
			"capacity": 42
		},
		{
			"station_id": 402,
			"name": "Broadway & E 22 St",
			"lat": 40.7403432,
			"lon": -73.98955109,
			"region_id": 71,
			"capacity": 41
		},
		{
			"station_id": 405,
			"name": "Washington St & Gansevoort St",
			"lat": 40.739323,
			"lon": -74.008119,
			"region_id": 71,
			"capacity": 40
		},
		{
			"station_id": 406,
			"name": "Hicks St & Montague St",
			"lat": 40.69512845,
			"lon": -73.99595065,
			"region_id": 71,
			"capacity": 34
		},
		{
			"station_id": 407,
			"name": "Henry St & Poplar St",
			"lat": 40.700469,
			"lon": -73.991454,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 408,
			"name": "Market St & Cherry St",
			"lat": 40.71076228,
			"lon": -73.99400398,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 409,
			"name": "DeKalb Ave & Skillman St",
			"lat": 40.6906495,
			"lon": -73.95643107,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 410,
			"name": "Suffolk St & Stanton St",
			"lat": 40.72066442,
			"lon": -73.98517977,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 411,
			"name": "E 6 St & Avenue D",
			"lat": 40.72228087,
			"lon": -73.97668709,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 412,
			"name": "Forsyth St & Canal St",
			"lat": 40.7158155,
			"lon": -73.99422366,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 414,
			"name": "Pearl St & Anchorage Pl",
			"lat": 40.70281858,
			"lon": -73.98765762,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 415,
			"name": "Pearl St & Hanover Square",
			"lat": 40.7047177,
			"lon": -74.00926027,
			"region_id": 71,
			"capacity": 42
		},
		{
			"station_id": 416,
			"name": "Cumberland St & Lafayette Ave",
			"lat": 40.68753406,
			"lon": -73.97265183,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 417,
			"name": "Barclay St & Church St",
			"lat": 40.71291224,
			"lon": -74.01020234,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 418,
			"name": "Front St & Gold St",
			"lat": 40.70224,
			"lon": -73.982578,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 419,
			"name": "Carlton Ave & Park Ave",
			"lat": 40.69580705,
			"lon": -73.97355569,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 420,
			"name": "Clermont Ave & Lafayette Ave",
			"lat": 40.68764484,
			"lon": -73.96968902,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 421,
			"name": "Clermont Ave & Park Ave",
			"lat": 40.69573398,
			"lon": -73.97129668,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 422,
			"name": "W 59 St & 10 Ave",
			"lat": 40.770513,
			"lon": -73.988038,
			"region_id": 71,
			"capacity": 55
		},
		{
			"station_id": 423,
			"name": "W 54 St & 9 Ave",
			"lat": 40.76584941,
			"lon": -73.98690506,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 426,
			"name": "West St & Chambers St",
			"lat": 40.71754834,
			"lon": -74.01322069,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 427,
			"name": "Bus Slip & State St",
			"lat": 40.701907,
			"lon": -74.013942,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 428,
			"name": "E 3 St & 1 Ave",
			"lat": 40.72467721,
			"lon": -73.98783413,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 430,
			"name": "York St & Jay St",
			"lat": 40.7014851,
			"lon": -73.98656928,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 432,
			"name": "E 7 St & Avenue A",
			"lat": 40.72621788,
			"lon": -73.98379855,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 433,
			"name": "E 13 St & Avenue A",
			"lat": 40.72955361,
			"lon": -73.98057249,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 434,
			"name": "9 Ave & W 18 St",
			"lat": 40.74317449,
			"lon": -74.00366443,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 435,
			"name": "W 21 St & 6 Ave",
			"lat": 40.74173969,
			"lon": -73.99415556,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 436,
			"name": "Hancock St & Bedford Ave",
			"lat": 40.68216564,
			"lon": -73.95399026,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 437,
			"name": "Macon St & Nostrand Ave",
			"lat": 40.6809833854,
			"lon": -73.9500479759,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 438,
			"name": "St Marks Pl & 1 Ave",
			"lat": 40.72779126,
			"lon": -73.98564945,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 439,
			"name": "E 4 St & 2 Ave",
			"lat": 40.7262807,
			"lon": -73.98978041,
			"region_id": 71,
			"capacity": 15
		},
		{
			"station_id": 440,
			"name": "E 45 St & 3 Ave",
			"lat": 40.75255434,
			"lon": -73.97282625,
			"region_id": 71,
			"capacity": 32
		},
		{
			"station_id": 441,
			"name": "E 52 St & 2 Ave",
			"lat": 40.756014,
			"lon": -73.967416,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 442,
			"name": "W 27 St & 7 Ave",
			"lat": 40.746647,
			"lon": -73.993915,
			"region_id": 71,
			"capacity": 51
		},
		{
			"station_id": 443,
			"name": "Bedford Ave & S 9 St",
			"lat": 40.70853074,
			"lon": -73.96408963,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 444,
			"name": "Broadway & W 24 St",
			"lat": 40.7423543,
			"lon": -73.98915076,
			"region_id": 71,
			"capacity": 52
		},
		{
			"station_id": 445,
			"name": "E 10 St & Avenue A",
			"lat": 40.72740794,
			"lon": -73.98142006,
			"region_id": 71,
			"capacity": 42
		},
		{
			"station_id": 446,
			"name": "W 24 St & 7 Ave",
			"lat": 40.74487634,
			"lon": -73.99529885,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 447,
			"name": "8 Ave & W 52 St",
			"lat": 40.76370739,
			"lon": -73.9851615,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 448,
			"name": "W 37 St & 10 Ave",
			"lat": 40.75660359,
			"lon": -73.9979009,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 449,
			"name": "W 52 St & 9 Ave",
			"lat": 40.76461837,
			"lon": -73.98789473,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 450,
			"name": "W 49 St & 8 Ave",
			"lat": 40.76227205,
			"lon": -73.98788205,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 453,
			"name": "W 22 St & 8 Ave",
			"lat": 40.74475148,
			"lon": -73.99915362,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 454,
			"name": "E 51 St & 1 Ave",
			"lat": 40.75455731,
			"lon": -73.96592976,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 455,
			"name": "1 Ave & E 44 St",
			"lat": 40.75001986,
			"lon": -73.96905301,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 456,
			"name": "E 53 St & Madison Ave",
			"lat": 40.7597108,
			"lon": -73.97402311,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 457,
			"name": "Broadway & W 58 St",
			"lat": 40.76695317,
			"lon": -73.98169333,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 458,
			"name": "11 Ave & W 27 St",
			"lat": 40.751396,
			"lon": -74.005226,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 459,
			"name": "W 20 St & 11 Ave",
			"lat": 40.746745,
			"lon": -74.007756,
			"region_id": 71,
			"capacity": 49
		},
		{
			"station_id": 460,
			"name": "S 4 St & Wythe Ave",
			"lat": 40.71285887,
			"lon": -73.96590294,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 461,
			"name": "E 20 St & 2 Ave",
			"lat": 40.73587678,
			"lon": -73.98205027,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 462,
			"name": "W 22 St & 10 Ave",
			"lat": 40.74691959,
			"lon": -74.00451887,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 463,
			"name": "9 Ave & W 28 St",
			"lat": 40.74206539,
			"lon": -74.00443172,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 465,
			"name": "Broadway & W 41 St",
			"lat": 40.75513557,
			"lon": -73.98658032,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 466,
			"name": "W 25 St & 6 Ave",
			"lat": 40.74395411,
			"lon": -73.99144871,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 467,
			"name": "Dean St & 4 Ave",
			"lat": 40.68312489,
			"lon": -73.97895137,
			"region_id": 71,
			"capacity": 34
		},
		{
			"station_id": 468,
			"name": "Broadway & W 55 St",
			"lat": 40.7652654,
			"lon": -73.98192338,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 469,
			"name": "Broadway & W 53 St",
			"lat": 40.76344058,
			"lon": -73.98268129,
			"region_id": 71,
			"capacity": 57
		},
		{
			"station_id": 470,
			"name": "W 20 St & 8 Ave",
			"lat": 40.74345335,
			"lon": -74.00004031,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 471,
			"name": "Grand St & Havemeyer St",
			"lat": 40.71286844,
			"lon": -73.95698119,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 472,
			"name": "E 32 St & Park Ave",
			"lat": 40.7457121,
			"lon": -73.98194829,
			"region_id": 71,
			"capacity": 41
		},
		{
			"station_id": 473,
			"name": "Rivington St & Chrystie St",
			"lat": 40.72110063,
			"lon": -73.9919254,
			"region_id": 71,
			"capacity": 38
		},
		{
			"station_id": 474,
			"name": "5 Ave & E 29 St",
			"lat": 40.7451677,
			"lon": -73.98683077,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 475,
			"name": "E 16 St & Irving Pl",
			"lat": 40.73524276,
			"lon": -73.98758561,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 476,
			"name": "E 31 St & 3 Ave",
			"lat": 40.74394314,
			"lon": -73.97966069,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 477,
			"name": "W 41 St & 8 Ave",
			"lat": 40.75640548,
			"lon": -73.9900262,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 478,
			"name": "11 Ave & W 41 St",
			"lat": 40.76030096,
			"lon": -73.99884222,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 479,
			"name": "9 Ave & W 45 St",
			"lat": 40.76019252,
			"lon": -73.9912551,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 480,
			"name": "W 53 St & 10 Ave",
			"lat": 40.76669671,
			"lon": -73.99061728,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 481,
			"name": "S 3 St & Bedford Ave",
			"lat": 40.71260486,
			"lon": -73.96264403,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 482,
			"name": "W 15 St & 7 Ave",
			"lat": 40.73935542,
			"lon": -73.99931783,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 483,
			"name": "E 12 St & 3 Ave",
			"lat": 40.73223272,
			"lon": -73.98889957,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 484,
			"name": "W 44 St & 5 Ave",
			"lat": 40.75500254,
			"lon": -73.98014437,
			"region_id": 71,
			"capacity": 44
		},
		{
			"station_id": 485,
			"name": "W 37 St & 5 Ave",
			"lat": 40.75038009,
			"lon": -73.98338988,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 486,
			"name": "Broadway & W 29 St",
			"lat": 40.7462009,
			"lon": -73.98855723,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 487,
			"name": "E 20 St & FDR Drive",
			"lat": 40.73314259,
			"lon": -73.97573881,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 488,
			"name": "W 39 St & 9 Ave",
			"lat": 40.75645824,
			"lon": -73.99372222,
			"region_id": 71,
			"capacity": 41
		},
		{
			"station_id": 490,
			"name": "8 Ave & W 33 St",
			"lat": 40.751551,
			"lon": -73.993934,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 491,
			"name": "E 24 St & Park Ave S",
			"lat": 40.74096374,
			"lon": -73.98602213,
			"region_id": 71,
			"capacity": 53
		},
		{
			"station_id": 492,
			"name": "W 33 St & 7 Ave",
			"lat": 40.75019995,
			"lon": -73.99093085,
			"region_id": 71,
			"capacity": 49
		},
		{
			"station_id": 493,
			"name": "W 45 St & 6 Ave",
			"lat": 40.7568001,
			"lon": -73.98291153,
			"region_id": 71,
			"capacity": 34
		},
		{
			"station_id": 494,
			"name": "W 26 St & 8 Ave",
			"lat": 40.74734825,
			"lon": -73.99723551,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 495,
			"name": "W 47 St & 10 Ave",
			"lat": 40.76269882,
			"lon": -73.99301222,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 496,
			"name": "E 16 St & 5 Ave",
			"lat": 40.73726186,
			"lon": -73.99238967,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 497,
			"name": "E 17 St & Broadway",
			"lat": 40.73704984,
			"lon": -73.99009296,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 498,
			"name": "Broadway & W 32 St",
			"lat": 40.74854862,
			"lon": -73.98808416,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 499,
			"name": "Broadway & W 60 St",
			"lat": 40.76915505,
			"lon": -73.98191841,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 500,
			"name": "Broadway & W 51 St",
			"lat": 40.76228826,
			"lon": -73.98336183,
			"region_id": 71,
			"capacity": 52
		},
		{
			"station_id": 501,
			"name": "FDR Drive & E 35 St",
			"lat": 40.744219,
			"lon": -73.97121214,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 502,
			"name": "Henry St & Grand St",
			"lat": 40.714215,
			"lon": -73.981346,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 503,
			"name": "E 20 St & Park Ave",
			"lat": 40.73827428,
			"lon": -73.98751968,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 504,
			"name": "1 Ave & E 15 St",
			"lat": 40.73221853,
			"lon": -73.98165557,
			"region_id": 71,
			"capacity": 4
		},
		{
			"station_id": 505,
			"name": "6 Ave & W 33 St",
			"lat": 40.74901271,
			"lon": -73.98848395,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 507,
			"name": "E 25 St & 2 Ave",
			"lat": 40.73912601,
			"lon": -73.97973776,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 508,
			"name": "W 46 St & 11 Ave",
			"lat": 40.76341379,
			"lon": -73.99667444,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 509,
			"name": "9 Ave & W 22 St",
			"lat": 40.7454973,
			"lon": -74.00197139,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 510,
			"name": "W 51 St & 6 Ave",
			"lat": 40.7606597,
			"lon": -73.98042047,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 511,
			"name": "E 14 St & Avenue B",
			"lat": 40.72938685,
			"lon": -73.97772429,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 513,
			"name": "W 56 St & 10 Ave",
			"lat": 40.768254,
			"lon": -73.988639,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 514,
			"name": "12 Ave & W 40 St",
			"lat": 40.76087502,
			"lon": -74.00277668,
			"region_id": 71,
			"capacity": 53
		},
		{
			"station_id": 515,
			"name": "W 43 St & 10 Ave",
			"lat": 40.76009437,
			"lon": -73.99461843,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 516,
			"name": "E 47 St & 1 Ave",
			"lat": 40.75206862,
			"lon": -73.96784384,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 517,
			"name": "Pershing Square South",
			"lat": 40.751581,
			"lon": -73.97791,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 518,
			"name": "E 39 St & 2 Ave",
			"lat": 40.74780373,
			"lon": -73.9734419,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 519,
			"name": "Pershing Square North",
			"lat": 40.751873,
			"lon": -73.977706,
			"region_id": 71,
			"capacity": 61
		},
		{
			"station_id": 520,
			"name": "W 52 St & 5 Ave",
			"lat": 40.75992262,
			"lon": -73.97648516,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 522,
			"name": "E 51 St & Lexington Ave",
			"lat": 40.75714758,
			"lon": -73.97207836,
			"region_id": 71,
			"capacity": 51
		},
		{
			"station_id": 523,
			"name": "W 38 St & 8 Ave",
			"lat": 40.75466591,
			"lon": -73.99138152,
			"region_id": 71,
			"capacity": 51
		},
		{
			"station_id": 524,
			"name": "W 43 St & 6 Ave",
			"lat": 40.75527307,
			"lon": -73.98316936,
			"region_id": 71,
			"capacity": 57
		},
		{
			"station_id": 525,
			"name": "W 34 St & 11 Ave",
			"lat": 40.75594159,
			"lon": -74.0021163,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 526,
			"name": "E 33 St & 5 Ave",
			"lat": 40.74765947,
			"lon": -73.98490707,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 527,
			"name": "E 33 St & 2 Ave",
			"lat": 40.744023,
			"lon": -73.976056,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 528,
			"name": "2 Ave & E 31 St",
			"lat": 40.74290902,
			"lon": -73.97706058,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 529,
			"name": "W 42 St & 8 Ave",
			"lat": 40.7575699,
			"lon": -73.99098507,
			"region_id": 71,
			"capacity": 41
		},
		{
			"station_id": 530,
			"name": "11 Ave & W 59 St",
			"lat": 40.771522,
			"lon": -73.990541,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 531,
			"name": "Forsyth St & Broome St",
			"lat": 40.71893904,
			"lon": -73.99266288,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 532,
			"name": "S 5 Pl & S 4 St",
			"lat": 40.710451,
			"lon": -73.960876,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 533,
			"name": "Broadway & W 39 St",
			"lat": 40.75299641,
			"lon": -73.98721619,
			"region_id": 71,
			"capacity": 50
		},
		{
			"station_id": 534,
			"name": "Water - Whitehall Plaza",
			"lat": 40.70255065,
			"lon": -74.0127234,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 536,
			"name": "1 Ave & E 30 St",
			"lat": 40.74144387,
			"lon": -73.97536082,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 537,
			"name": "Lexington Ave & E 24 St",
			"lat": 40.74025878,
			"lon": -73.98409214,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 539,
			"name": "Metropolitan Ave & Bedford Ave",
			"lat": 40.71534825,
			"lon": -73.96024116,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 540,
			"name": "Lexington Ave & E 29 St",
			"lat": 40.74311555376486,
			"lon": -73.98215353488922,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 545,
			"name": "E 23 St & 1 Ave",
			"lat": 40.736502,
			"lon": -73.97809472,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 546,
			"name": "E 30 St & Park Ave S",
			"lat": 40.74444921,
			"lon": -73.98303529,
			"region_id": 71,
			"capacity": 38
		},
		{
			"station_id": 2000,
			"name": "Front St & Washington St",
			"lat": 40.70255088,
			"lon": -73.98940236,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 2001,
			"name": "Sands St & Navy St",
			"lat": 40.699773,
			"lon": -73.979927,
			"region_id": 71,
			"capacity": 15
		},
		{
			"station_id": 2002,
			"name": "Wythe Ave & Metropolitan Ave",
			"lat": 40.716887,
			"lon": -73.963198,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 2003,
			"name": "1 Ave & E 18 St",
			"lat": 40.733812191966315,
			"lon": -73.98054420948029,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 2004,
			"name": "6 Ave & Broome St",
			"lat": 40.724399,
			"lon": -74.004704,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 2005,
			"name": "Railroad Ave & Kay Ave",
			"lat": 40.70531194,
			"lon": -73.97100056,
			"region_id": 71,
			"capacity": 12
		},
		{
			"station_id": 2006,
			"name": "Central Park S & 6 Ave",
			"lat": 40.76590936,
			"lon": -73.97634151,
			"region_id": 71,
			"capacity": 49
		},
		{
			"station_id": 2008,
			"name": "Little West St & 1 Pl",
			"lat": 40.70569254,
			"lon": -74.01677685,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 2009,
			"name": "Catherine St & Monroe St",
			"lat": 40.71117444,
			"lon": -73.99682619,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 2010,
			"name": "Grand St & Greene St",
			"lat": 40.72165481,
			"lon": -74.00234737,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 2012,
			"name": "E 27 St & 1 Ave",
			"lat": 40.739445,
			"lon": -73.976806,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 2017,
			"name": "E 43 St & 2 Ave",
			"lat": 40.75022392,
			"lon": -73.97121414,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 2021,
			"name": "W 45 St & 8 Ave",
			"lat": 40.75929124,
			"lon": -73.98859651,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 2022,
			"name": "E 60 St & York Ave",
			"lat": 40.759107,
			"lon": -73.959223,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 2023,
			"name": "E 55 St & Lexington Ave",
			"lat": 40.75968085,
			"lon": -73.97031366,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 3002,
			"name": "South End Ave & Liberty St",
			"lat": 40.711512,
			"lon": -74.015756,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3016,
			"name": "Kent Ave & N 7 St",
			"lat": 40.72036775298455,
			"lon": -73.96165072917938,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 3041,
			"name": "Kingston Ave & Herkimer St",
			"lat": 40.67890679,
			"lon": -73.94142771,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3042,
			"name": "Fulton St & Utica Ave",
			"lat": 40.6794268,
			"lon": -73.9298911,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3043,
			"name": "Lewis Ave & Decatur St",
			"lat": 40.6814598,
			"lon": -73.934903,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3044,
			"name": "Albany Ave & Fulton St",
			"lat": 40.6800105,
			"lon": -73.938475,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3046,
			"name": "Marcus Garvey Blvd & Macon St",
			"lat": 40.682601,
			"lon": -73.938037,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3047,
			"name": "Halsey St & Tompkins Ave",
			"lat": 40.6823687,
			"lon": -73.944118,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3048,
			"name": "Putnam Ave & Nostrand Ave",
			"lat": 40.68402,
			"lon": -73.94977,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3049,
			"name": "Cambridge Pl & Gates Ave",
			"lat": 40.68488,
			"lon": -73.96304,
			"region_id": 71,
			"capacity": 18
		},
		{
			"station_id": 3050,
			"name": "Putnam Ave & Throop Ave",
			"lat": 40.6851532,
			"lon": -73.94111,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3052,
			"name": "Lewis Ave & Madison St",
			"lat": 40.686312,
			"lon": -73.935775,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3053,
			"name": "Marcy Ave & Lafayette Ave",
			"lat": 40.6900815,
			"lon": -73.947915,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3054,
			"name": "Greene Ave & Throop Ave",
			"lat": 40.6894932,
			"lon": -73.942061,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3055,
			"name": "Greene Ave & Nostrand Ave",
			"lat": 40.6883337,
			"lon": -73.950916,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3056,
			"name": "Kosciuszko St & Nostrand Ave",
			"lat": 40.69072549,
			"lon": -73.95133465,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3057,
			"name": "Kosciuszko St & Tompkins Ave",
			"lat": 40.69128258,
			"lon": -73.9452416,
			"region_id": 71,
			"capacity": 18
		},
		{
			"station_id": 3058,
			"name": "Lewis Ave & Kosciuszko St",
			"lat": 40.69237074,
			"lon": -73.93705428,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3059,
			"name": "Pulaski St & Marcus Garvey Blvd",
			"lat": 40.6933982,
			"lon": -73.939877,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3060,
			"name": "Willoughby Ave & Tompkins Ave",
			"lat": 40.69425403,
			"lon": -73.94626915,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3061,
			"name": "Throop Ave & Myrtle Ave",
			"lat": 40.69622937,
			"lon": -73.94371094,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3062,
			"name": "Myrtle Ave & Marcy Ave",
			"lat": 40.69539817,
			"lon": -73.94954908,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3063,
			"name": "Nostrand Ave & Myrtle Ave",
			"lat": 40.69527008,
			"lon": -73.95238108,
			"region_id": 71,
			"capacity": 20
		},
		{
			"station_id": 3064,
			"name": "Myrtle Ave & Lewis Ave",
			"lat": 40.69681963,
			"lon": -73.93756926,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3065,
			"name": "Union Ave & Wallabout St",
			"lat": 40.70029511,
			"lon": -73.95032283,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3066,
			"name": "Tompkins Ave & Hopkins St",
			"lat": 40.69957608,
			"lon": -73.94708417,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3067,
			"name": "Broadway & Whipple St",
			"lat": 40.7016657,
			"lon": -73.9437303,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3068,
			"name": "Humboldt St & Varet St",
			"lat": 40.7031724,
			"lon": -73.940636,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3069,
			"name": "Lorimer St & Broadway",
			"lat": 40.70411791,
			"lon": -73.94818595,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3070,
			"name": "McKibbin St & Manhattan Ave",
			"lat": 40.70510918,
			"lon": -73.94407279,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3071,
			"name": "Boerum St & Broadway",
			"lat": 40.70538077,
			"lon": -73.94976519,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3072,
			"name": "Leonard St & Boerum St",
			"lat": 40.70583339,
			"lon": -73.94644578,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3073,
			"name": "Division Ave & Hooper St",
			"lat": 40.70691254,
			"lon": -73.95441667,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3074,
			"name": "Montrose Ave & Bushwick Ave",
			"lat": 40.70767788,
			"lon": -73.94016171,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3075,
			"name": "Division Ave & Marcy Ave",
			"lat": 40.70708701,
			"lon": -73.95796783,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 3076,
			"name": "Scholes St & Manhattan Ave",
			"lat": 40.70870368,
			"lon": -73.9448625,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3077,
			"name": "Stagg St & Union Ave",
			"lat": 40.70877084,
			"lon": -73.95095259,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 3078,
			"name": "Broadway & Roebling St",
			"lat": 40.70925562,
			"lon": -73.95982218,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3079,
			"name": "Leonard St & Grand St",
			"lat": 40.71103537,
			"lon": -73.94714303,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3080,
			"name": "S 4 St & Rodney St",
			"lat": 40.70934,
			"lon": -73.95608,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3081,
			"name": "Graham Ave & Grand St",
			"lat": 40.711863,
			"lon": -73.944024,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3082,
			"name": "Hope St & Union Ave",
			"lat": 40.71167351,
			"lon": -73.95141312,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3083,
			"name": "Bushwick Ave & Powers St",
			"lat": 40.71247661,
			"lon": -73.94100005,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 3084,
			"name": "Devoe St & Leonard St",
			"lat": 40.71348658,
			"lon": -73.94792458,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3085,
			"name": "Roebling St & N 4 St",
			"lat": 40.71469,
			"lon": -73.95739,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3086,
			"name": "Graham Ave & Conselyea St",
			"lat": 40.715143,
			"lon": -73.944507,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3087,
			"name": "Metropolitan Ave & Meeker Ave",
			"lat": 40.71413311,
			"lon": -73.95234386,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 3088,
			"name": "Union Ave & Jackson St",
			"lat": 40.7160751,
			"lon": -73.952029,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3089,
			"name": "Leonard St & Meeker Ave",
			"lat": 40.717318403855785,
			"lon": -73.94820213317871,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3090,
			"name": "N 8 St & Driggs Ave",
			"lat": 40.71774592,
			"lon": -73.95600096,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3091,
			"name": "Frost St & Meeker St",
			"lat": 40.71764,
			"lon": -73.94882,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3092,
			"name": "Berry St & N 8 St",
			"lat": 40.7190095,
			"lon": -73.95852515,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3093,
			"name": "N 6 St & Bedford Ave",
			"lat": 40.71745169,
			"lon": -73.95850939,
			"region_id": 71,
			"capacity": 28
		},
		{
			"station_id": 3094,
			"name": "Graham Ave & Withers St",
			"lat": 40.7169811,
			"lon": -73.94485918,
			"region_id": 71,
			"capacity": 18
		},
		{
			"station_id": 3095,
			"name": "Graham Ave & Herbert St",
			"lat": 40.71929301,
			"lon": -73.94500379,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3096,
			"name": "Union Ave & N 12 St",
			"lat": 40.71924,
			"lon": -73.95242,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3098,
			"name": "Leonard St & Bayard St",
			"lat": 40.71928,
			"lon": -73.94861,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 3099,
			"name": "Leonard St & Manhattan Ave",
			"lat": 40.72152240339303,
			"lon": -73.94898265600203,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3100,
			"name": "Nassau Ave & Newell St",
			"lat": 40.724812564400175,
			"lon": -73.94752621650696,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3101,
			"name": "N 12 St & Bedford Ave",
			"lat": 40.72079821,
			"lon": -73.95484712,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3102,
			"name": "Driggs Ave & Lorimer St",
			"lat": 40.72179134,
			"lon": -73.9504154,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3103,
			"name": "N 11 St & Wythe Ave",
			"lat": 40.72153267,
			"lon": -73.95782357,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3105,
			"name": "N 15 St & Wythe Ave",
			"lat": 40.724055,
			"lon": -73.955736,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3106,
			"name": "Driggs Ave & N Henry St",
			"lat": 40.72325,
			"lon": -73.94308,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3107,
			"name": "Bedford Ave & Nassau Ave",
			"lat": 40.72311651,
			"lon": -73.95212324,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3108,
			"name": "Nassau Ave & Russell St",
			"lat": 40.72557,
			"lon": -73.94434,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3109,
			"name": "Banker St & Meserole Ave",
			"lat": 40.72606,
			"lon": -73.95621,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3110,
			"name": "Meserole Ave & Manhattan Ave",
			"lat": 40.72708584,
			"lon": -73.95299117,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3111,
			"name": "Norman Ave & Leonard St",
			"lat": 40.7258483,
			"lon": -73.95064893,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3112,
			"name": "Milton St & Franklin St",
			"lat": 40.72906,
			"lon": -73.95779,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 3113,
			"name": "Greenpoint Ave & Manhattan Ave",
			"lat": 40.73026,
			"lon": -73.95394,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3114,
			"name": "India St & East River",
			"lat": 40.73165141,
			"lon": -73.96161892,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3115,
			"name": "India St & Manhattan Ave",
			"lat": 40.73232194,
			"lon": -73.9550858,
			"region_id": 71,
			"capacity": 34
		},
		{
			"station_id": 3116,
			"name": "Huron St & Franklin St",
			"lat": 40.73266,
			"lon": -73.95826,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3117,
			"name": "Franklin St & Dupont St",
			"lat": 40.73564,
			"lon": -73.95866,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3118,
			"name": "McGuinness Blvd & Eagle St",
			"lat": 40.73555,
			"lon": -73.95284,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 3119,
			"name": "Vernon Blvd & 50 Ave",
			"lat": 40.74232744,
			"lon": -73.95411749,
			"region_id": 71,
			"capacity": 45
		},
		{
			"station_id": 3120,
			"name": "Center Blvd & Borden Ave",
			"lat": 40.74161,
			"lon": -73.96044,
			"region_id": 71,
			"capacity": 20
		},
		{
			"station_id": 3121,
			"name": "Jackson Ave & 46 Rd",
			"lat": 40.74524768,
			"lon": -73.94733276,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3122,
			"name": "48 Ave & 5 St",
			"lat": 40.744363287066875,
			"lon": -73.9558732509613,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3123,
			"name": "31 St & Thomson Ave",
			"lat": 40.74469738,
			"lon": -73.93540375,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3124,
			"name": "46 Ave & 5 St",
			"lat": 40.74731,
			"lon": -73.95451,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3125,
			"name": "45 Rd & 11 St",
			"lat": 40.74708586,
			"lon": -73.94977234,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3126,
			"name": "44 Dr & Jackson Ave",
			"lat": 40.74718234,
			"lon": -73.9432635,
			"region_id": 71,
			"capacity": 34
		},
		{
			"station_id": 3127,
			"name": "9 St & 44 Rd",
			"lat": 40.74966,
			"lon": -73.9521,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3128,
			"name": "21 St & 43 Ave",
			"lat": 40.75052534,
			"lon": -73.94594845,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3129,
			"name": "Queens Plaza North & Crescent St",
			"lat": 40.75110165,
			"lon": -73.94073717,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3131,
			"name": "E 68 St & 3 Ave",
			"lat": 40.76712840349542,
			"lon": -73.96224617958069,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3132,
			"name": "E 59 St & Madison Ave",
			"lat": 40.76350532,
			"lon": -73.97109243,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3134,
			"name": "3 Ave & E 62 St",
			"lat": 40.76312584,
			"lon": -73.96526895,
			"region_id": 71,
			"capacity": 51
		},
		{
			"station_id": 3135,
			"name": "E 75 St & 3 Ave",
			"lat": 40.77112927,
			"lon": -73.95772297,
			"region_id": 71,
			"capacity": 41
		},
		{
			"station_id": 3137,
			"name": "5 Ave & E 73 St",
			"lat": 40.77282817,
			"lon": -73.96685276,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3138,
			"name": "E 77 St & Park Ave",
			"lat": 40.774405455003,
			"lon": -73.96175265312193,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 3139,
			"name": "E 72 St & Park Ave",
			"lat": 40.77118287540658,
			"lon": -73.96409422159195,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3140,
			"name": "1 Ave & E 78 St",
			"lat": 40.77140426,
			"lon": -73.9535166,
			"region_id": 71,
			"capacity": 55
		},
		{
			"station_id": 3141,
			"name": "1 Ave & E 68 St",
			"lat": 40.76500525,
			"lon": -73.95818491,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3142,
			"name": "1 Ave & E 62 St",
			"lat": 40.7612274,
			"lon": -73.96094022,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3143,
			"name": "5 Ave & E 78 St",
			"lat": 40.77682863439968,
			"lon": -73.96388769149779,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 3144,
			"name": "E 81 St & Park Ave",
			"lat": 40.77677702,
			"lon": -73.9590097,
			"region_id": 71,
			"capacity": 46
		},
		{
			"station_id": 3145,
			"name": "E 84 St & Park Ave",
			"lat": 40.77862688,
			"lon": -73.95772073,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3146,
			"name": "E 81 St & 3 Ave",
			"lat": 40.77573034,
			"lon": -73.9567526,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 3147,
			"name": "E 85 St & 3 Ave",
			"lat": 40.77801203,
			"lon": -73.95407149,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3148,
			"name": "E 84 St & 1 Ave",
			"lat": 40.77565541,
			"lon": -73.95068615,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3150,
			"name": "E 85 St & York Ave",
			"lat": 40.77536905,
			"lon": -73.94803392,
			"region_id": 71,
			"capacity": 55
		},
		{
			"station_id": 3151,
			"name": "E 81 St & York Ave",
			"lat": 40.7728384,
			"lon": -73.94989233,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 3152,
			"name": "3 Ave & E 71 St",
			"lat": 40.76873687,
			"lon": -73.96119945,
			"region_id": 71,
			"capacity": 42
		},
		{
			"station_id": 3153,
			"name": "E 71 St & 2 Ave",
			"lat": 40.76817546742245,
			"lon": -73.95910263061523,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 3154,
			"name": "E 77 St & 3 Ave",
			"lat": 40.77314236,
			"lon": -73.95856158,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3155,
			"name": "Lexington Ave & E 63 St",
			"lat": 40.76440023,
			"lon": -73.96648977,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3156,
			"name": "E 72 St & York Ave",
			"lat": 40.76663814,
			"lon": -73.95348296,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3157,
			"name": "East End Ave & E 86 St",
			"lat": 40.77518615,
			"lon": -73.94446054,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 3158,
			"name": "W 63 St & Broadway",
			"lat": 40.77163851,
			"lon": -73.98261428,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3159,
			"name": "W 67 St & Broadway",
			"lat": 40.77492513,
			"lon": -73.98266566,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3160,
			"name": "Central Park West & W 76 St",
			"lat": 40.77896784,
			"lon": -73.97374737,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3161,
			"name": "W 76 St & Columbus Ave",
			"lat": 40.7801839724239,
			"lon": -73.97728532552719,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3162,
			"name": "W 78 St & Broadway",
			"lat": 40.78339981,
			"lon": -73.98093133,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3163,
			"name": "Central Park West & W 68 St",
			"lat": 40.7734066,
			"lon": -73.97782542,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 3164,
			"name": "Columbus Ave & W 72 St",
			"lat": 40.7770575,
			"lon": -73.97898475,
			"region_id": 71,
			"capacity": 67
		},
		{
			"station_id": 3165,
			"name": "Central Park West & W 72 St",
			"lat": 40.77579376683666,
			"lon": -73.9762057363987,
			"region_id": 71,
			"capacity": 51
		},
		{
			"station_id": 3166,
			"name": "Riverside Dr & W 72 St",
			"lat": 40.78057799010334,
			"lon": -73.98562431335449,
			"region_id": 71,
			"capacity": 41
		},
		{
			"station_id": 3167,
			"name": "Amsterdam Ave & W 73 St",
			"lat": 40.77966809007312,
			"lon": -73.98093044757842,
			"region_id": 71,
			"capacity": 55
		},
		{
			"station_id": 3168,
			"name": "Central Park West & W 85 St",
			"lat": 40.78472675,
			"lon": -73.96961715,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3169,
			"name": "Riverside Dr & W 82 St",
			"lat": 40.78720869,
			"lon": -73.98128127,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3170,
			"name": "W 84 St & Columbus Ave",
			"lat": 40.78499979,
			"lon": -73.97283406,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3171,
			"name": "Amsterdam Ave & W 82 St",
			"lat": 40.78524672,
			"lon": -73.97667321,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3172,
			"name": "W 74 St & Columbus Ave",
			"lat": 40.7785669,
			"lon": -73.97754961,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3173,
			"name": "Riverside Blvd & W 67 St",
			"lat": 40.777507027547976,
			"lon": -73.98888587951659,
			"region_id": 71,
			"capacity": 63
		},
		{
			"station_id": 3175,
			"name": "W 70 St & Amsterdam Ave",
			"lat": 40.77748046,
			"lon": -73.98288594,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3176,
			"name": "W 64 St & West End Ave",
			"lat": 40.77452835,
			"lon": -73.98753759,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 3177,
			"name": "W 84 St & Broadway",
			"lat": 40.7867947,
			"lon": -73.977112,
			"region_id": 71,
			"capacity": 63
		},
		{
			"station_id": 3178,
			"name": "Riverside Dr & W 78 St",
			"lat": 40.78414472,
			"lon": -73.98362492,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3179,
			"name": "Park Ave & Marcus Garvey Blvd",
			"lat": 40.698617,
			"lon": -73.941342,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3180,
			"name": "Brooklyn Bridge Park - Pier 2",
			"lat": 40.69878,
			"lon": -73.99712,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3182,
			"name": "Yankee Ferry Terminal",
			"lat": 40.686931,
			"lon": -74.016966,
			"region_id": 71,
			"capacity": 42
		},
		{
			"station_id": 3183,
			"name": "Exchange Place",
			"lat": 40.7162469,
			"lon": -74.0334588,
			"region_id": 70,
			"capacity": 30
		},
		{
			"station_id": 3184,
			"name": "Paulus Hook",
			"lat": 40.7141454,
			"lon": -74.0335519,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3185,
			"name": "City Hall",
			"lat": 40.7177325,
			"lon": -74.043845,
			"region_id": 70,
			"capacity": 22
		},
		{
			"station_id": 3186,
			"name": "Grove St PATH",
			"lat": 40.71946109443547,
			"lon": -74.04294312000275,
			"region_id": 70,
			"capacity": 42
		},
		{
			"station_id": 3187,
			"name": "Warren St",
			"lat": 40.7211236,
			"lon": -74.03805095,
			"region_id": 70,
			"capacity": 22
		},
		{
			"station_id": 3188,
			"name": "NJCU",
			"lat": 40.7101087,
			"lon": -74.0858489,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3189,
			"name": "West Side Light Rail",
			"lat": 40.714402,
			"lon": -74.0887723,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3190,
			"name": "Garfield Ave Light Rail",
			"lat": 40.7108044,
			"lon": -74.0714882,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3191,
			"name": "Union St",
			"lat": 40.7182113,
			"lon": -74.0836394,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3192,
			"name": "Liberty Light Rail",
			"lat": 40.7112423,
			"lon": -74.0557013,
			"region_id": 70,
			"capacity": 22
		},
		{
			"station_id": 3193,
			"name": "Lincoln Park",
			"lat": 40.7246050998869,
			"lon": -74.07840594649315,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3194,
			"name": "McGinley Square",
			"lat": 40.7256033,
			"lon": -74.06763,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3195,
			"name": "Sip Ave",
			"lat": 40.7309459,
			"lon": -74.0638906,
			"region_id": 70,
			"capacity": 34
		},
		{
			"station_id": 3196,
			"name": "Riverview Park",
			"lat": 40.7443187,
			"lon": -74.0439909,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3197,
			"name": "North St",
			"lat": 40.752559,
			"lon": -74.044725,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3198,
			"name": "Heights Elevator",
			"lat": 40.748715945380226,
			"lon": -74.04044330120087,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3199,
			"name": "Newport Pkwy",
			"lat": 40.7287448,
			"lon": -74.0321082,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3200,
			"name": "MLK Light Rail",
			"lat": 40.7111305,
			"lon": -74.0788855,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3201,
			"name": "Dey St",
			"lat": 40.737711,
			"lon": -74.066921,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3202,
			"name": "Newport PATH",
			"lat": 40.7272235,
			"lon": -74.0337589,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3203,
			"name": "Hamilton Park",
			"lat": 40.727595966,
			"lon": -74.044247311,
			"region_id": 70,
			"capacity": 26
		},
		{
			"station_id": 3205,
			"name": "JC Medical Center",
			"lat": 40.71653978099194,
			"lon": -74.0496379137039,
			"region_id": 70,
			"capacity": 22
		},
		{
			"station_id": 3206,
			"name": "Hilltop",
			"lat": 40.7311689,
			"lon": -74.0575736,
			"region_id": 70,
			"capacity": 26
		},
		{
			"station_id": 3207,
			"name": "Oakland Ave",
			"lat": 40.7376037,
			"lon": -74.0524783,
			"region_id": 70,
			"capacity": 26
		},
		{
			"station_id": 3209,
			"name": "Brunswick St",
			"lat": 40.7241765,
			"lon": -74.0506564,
			"region_id": 70,
			"capacity": 22
		},
		{
			"station_id": 3210,
			"name": "Pershing Field",
			"lat": 40.742677141,
			"lon": -74.051788633,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3211,
			"name": "Newark Ave",
			"lat": 40.72152515,
			"lon": -74.046304543,
			"region_id": 70,
			"capacity": 22
		},
		{
			"station_id": 3212,
			"name": "Christ Hospital",
			"lat": 40.734785818,
			"lon": -74.050443636,
			"region_id": 70,
			"capacity": 22
		},
		{
			"station_id": 3213,
			"name": "Van Vorst Park",
			"lat": 40.71848892,
			"lon": -74.047726625,
			"region_id": 70,
			"capacity": 21
		},
		{
			"station_id": 3214,
			"name": "Essex Light Rail",
			"lat": 40.7127742,
			"lon": -74.0364857,
			"region_id": 70,
			"capacity": 22
		},
		{
			"station_id": 3215,
			"name": "Central Ave",
			"lat": 40.7467299,
			"lon": -74.0492509,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3216,
			"name": "Columbia Park",
			"lat": 40.6970299,
			"lon": -74.0969366,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3217,
			"name": "Bayside Park",
			"lat": 40.698650544,
			"lon": -74.082079678,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3220,
			"name": "5 Corners Library",
			"lat": 40.734961020009514,
			"lon": -74.0595030784607,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3221,
			"name": "47 Ave & 31 St",
			"lat": 40.743,
			"lon": -73.93561,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3222,
			"name": "Hanson Pl & St Felix St",
			"lat": 40.685159599891776,
			"lon": -73.97711366415024,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3223,
			"name": "E 55 St & 3 Ave",
			"lat": 40.758996559605116,
			"lon": -73.96865397691727,
			"region_id": 71,
			"capacity": 55
		},
		{
			"station_id": 3224,
			"name": "W 13 St & Hudson St",
			"lat": 40.73997354103409,
			"lon": -74.00513872504234,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3225,
			"name": "Baldwin at Montgomery",
			"lat": 40.7236589,
			"lon": -74.0641943,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3226,
			"name": "W 82 St & Central Park West",
			"lat": 40.78275,
			"lon": -73.97137,
			"region_id": 71,
			"capacity": 45
		},
		{
			"station_id": 3230,
			"name": "Penn Station Valet",
			"lat": 40.751283596962296,
			"lon": -73.99692445993422,
			"region_id": 71,
			"capacity": 7
		},
		{
			"station_id": 3231,
			"name": "E 67 St & Park Ave",
			"lat": 40.76780080148132,
			"lon": -73.96592080593109,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3232,
			"name": "Bond St & Fulton St",
			"lat": 40.68962188790333,
			"lon": -73.98304268717766,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3233,
			"name": "E 48 St & 5 Ave",
			"lat": 40.75724567911726,
			"lon": -73.97805914282799,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3235,
			"name": "E 41 St & Madison Ave",
			"lat": 40.752165280621966,
			"lon": -73.97992193698882,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3236,
			"name": "W 42 St & Dyer Ave",
			"lat": 40.75898481399634,
			"lon": -73.99379968643188,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 3237,
			"name": "21 St & 41 Ave",
			"lat": 40.75383343437622,
			"lon": -73.94267678260802,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3238,
			"name": "E 80 St & 2 Ave",
			"lat": 40.77391390238118,
			"lon": -73.9543953537941,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 3241,
			"name": "Monroe St & Tompkins Ave",
			"lat": 40.686203,
			"lon": -73.944694,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3242,
			"name": "Schermerhorn St & Court St",
			"lat": 40.69102925677968,
			"lon": -73.99183362722397,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3243,
			"name": "E 58 St & 1 Ave",
			"lat": 40.75892386377695,
			"lon": -73.96226227283478,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 3244,
			"name": "University Pl & E 8 St",
			"lat": 40.73143724085228,
			"lon": -73.99490341544151,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3246,
			"name": "Montague St & Clinton St",
			"lat": 40.694281141397326,
			"lon": -73.99230033159256,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3249,
			"name": "Verona Pl & Fulton St",
			"lat": 40.6803560840434,
			"lon": -73.9476791024208,
			"region_id": 71,
			"capacity": 15
		},
		{
			"station_id": 3254,
			"name": "Soissons Landing",
			"lat": 40.69231660719192,
			"lon": -74.01486575603485,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 3255,
			"name": "8 Ave & W 31 St",
			"lat": 40.7505853470215,
			"lon": -73.9946848154068,
			"region_id": 71,
			"capacity": 67
		},
		{
			"station_id": 3256,
			"name": "Pier 40 - Hudson River Park",
			"lat": 40.7277140777778,
			"lon": -74.01129573583603,
			"region_id": 71,
			"capacity": 22
		},
		{
			"station_id": 3258,
			"name": "W 27 St & 10 Ave",
			"lat": 40.75018156325683,
			"lon": -74.00218427181244,
			"region_id": 71,
			"capacity": 37
		},
		{
			"station_id": 3259,
			"name": "8th Ave & W 28 St",
			"lat": 40.74937024193277,
			"lon": -73.99923384189606,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3260,
			"name": "Mercer St & Bleecker St",
			"lat": 40.72706363348306,
			"lon": -73.99662137031554,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3263,
			"name": "Cooper Square\t& E 7 St",
			"lat": 40.728994621404155,
			"lon": -73.99098336696625,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3264,
			"name": "E 61 St & Park Ave",
			"lat": 40.764210071690634,
			"lon": -73.96910458803177,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 3265,
			"name": "E 2 St & 2 Ave",
			"lat": 40.7245634290432,
			"lon": -73.9894437789917,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3267,
			"name": "Morris Canal",
			"lat": 40.7124188237569,
			"lon": -74.03852552175522,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3268,
			"name": "Lafayette Park",
			"lat": 40.71346382669195,
			"lon": -74.06285852193832,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3269,
			"name": "Coming Soon - Brunswick & 7th",
			"lat": 40.72661848200456,
			"lon": -74.05057400465012,
			"region_id": 70,
			"capacity": 0
		},
		{
			"station_id": 3270,
			"name": "Jersey & 6th St",
			"lat": 40.72545782190946,
			"lon": -74.04552608728409,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3271,
			"name": "Danforth Light Rail",
			"lat": 40.6926094606851,
			"lon": -74.08809006214142,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3272,
			"name": "Jersey & 3rd",
			"lat": 40.72340070034806,
			"lon": -74.04575407505035,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3273,
			"name": "Manila & 1st",
			"lat": 40.721650724879986,
			"lon": -74.04288411140442,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3274,
			"name": "Bethune Center",
			"lat": 40.704957516728605,
			"lon": -74.08593088388443,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3275,
			"name": "Columbus Drive",
			"lat": 40.71835519823214,
			"lon": -74.03891444206238,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3276,
			"name": "Marin Light Rail",
			"lat": 40.714824504192755,
			"lon": -74.04298067092896,
			"region_id": 70,
			"capacity": 26
		},
		{
			"station_id": 3277,
			"name": "Coming Soon - Communipaw & Berry Lane",
			"lat": 40.7143644678131,
			"lon": -74.06655997037888,
			"region_id": 70,
			"capacity": 0
		},
		{
			"station_id": 3278,
			"name": "Monmouth and 6th",
			"lat": 40.72568548362901,
			"lon": -74.04879033565521,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3279,
			"name": "Dixon Mills",
			"lat": 40.721630142638354,
			"lon": -74.04996782541275,
			"region_id": 70,
			"capacity": 18
		},
		{
			"station_id": 3280,
			"name": "Coming Soon - Astor Place",
			"lat": 40.718025865297854,
			"lon": -74.06837582588196,
			"region_id": 70,
			"capacity": 0
		},
		{
			"station_id": 3281,
			"name": "Leonard Gordon Park",
			"lat": 40.74590996631558,
			"lon": -74.0572714805603,
			"region_id": 70,
			"capacity": 14
		},
		{
			"station_id": 3282,
			"name": "5 Ave & E 88 St",
			"lat": 40.78307,
			"lon": -73.95939,
			"region_id": 71,
			"capacity": 38
		},
		{
			"station_id": 3283,
			"name": "Coming Soon: W 89 St & Columbus Ave",
			"lat": 40.7882213,
			"lon": -73.97041561,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3284,
			"name": "E 88 St & Park Ave",
			"lat": 40.781410700190015,
			"lon": -73.95595908164978,
			"region_id": 71,
			"capacity": 41
		},
		{
			"station_id": 3285,
			"name": "W 87 St  & Amsterdam Ave",
			"lat": 40.78839,
			"lon": -73.9747,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 3286,
			"name": "E 89 St & 3 Ave",
			"lat": 40.7806284,
			"lon": -73.9521667,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3287,
			"name": "W 87 St  & West End Ave",
			"lat": 40.7896927,
			"lon": -73.9777842,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 3288,
			"name": "E 88 St & 1 Ave",
			"lat": 40.778301,
			"lon": -73.9488134,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3289,
			"name": "W 90 St & Amsterdam Ave",
			"lat": 40.79017948095081,
			"lon": -73.97288918495178,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3290,
			"name": "E 89 St & York Ave",
			"lat": 40.7779453,
			"lon": -73.946041,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3291,
			"name": "Riverside Dr & W 91 St",
			"lat": 40.7933718,
			"lon": -73.97685115,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3292,
			"name": "5 Ave & E 93 St",
			"lat": 40.7857851,
			"lon": -73.957481,
			"region_id": 71,
			"capacity": 43
		},
		{
			"station_id": 3293,
			"name": "W 92 St & Broadway",
			"lat": 40.7921,
			"lon": -73.9739,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3294,
			"name": "E 91 St & Park Ave",
			"lat": 40.7835016,
			"lon": -73.955327,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3295,
			"name": "Central Park W & W 96 St",
			"lat": 40.79127,
			"lon": -73.964839,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3296,
			"name": "Coming Soon: E 93 St & 2 Ave",
			"lat": 40.78250564729024,
			"lon": -73.94887804985046,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3297,
			"name": "6 St & 7 Ave",
			"lat": 40.6686627,
			"lon": -73.97988067,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3298,
			"name": "Warren St & Court St",
			"lat": 40.686371,
			"lon": -73.99383324,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3299,
			"name": "Coming Soon: E 98 St & Park Ave",
			"lat": 40.78803545094403,
			"lon": -73.95186334848403,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3300,
			"name": "Prospect Park West & 8 St",
			"lat": 40.66514681533792,
			"lon": -73.97637605667114,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3301,
			"name": "Columbus Ave & W 95 St",
			"lat": 40.7919557,
			"lon": -73.968087,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3302,
			"name": "Columbus Ave & W 103 St",
			"lat": 40.7969347,
			"lon": -73.9643412291,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3303,
			"name": "Butler St & Court St",
			"lat": 40.6849894,
			"lon": -73.99440329,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3304,
			"name": "6 Ave & 9 St",
			"lat": 40.668127,
			"lon": -73.98377641,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3305,
			"name": "E 91 St & 2 Ave",
			"lat": 40.78112229934166,
			"lon": -73.94965589046478,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3306,
			"name": "10 St & 7 Ave",
			"lat": 40.6662078,
			"lon": -73.98199886,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3307,
			"name": "West End Ave & W 94 St",
			"lat": 40.7941654,
			"lon": -73.974124,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3308,
			"name": "Kane St & Clinton St",
			"lat": 40.6861758,
			"lon": -73.99645295,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3309,
			"name": "E 97 St & 3 Ave",
			"lat": 40.7859201,
			"lon": -73.94860294,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 3310,
			"name": "14 St & 7 Ave",
			"lat": 40.663779,
			"lon": -73.98396846,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3311,
			"name": "Columbia St & Kane St",
			"lat": 40.68763155,
			"lon": -74.0016256,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3312,
			"name": "1 Ave & E 94 St",
			"lat": 40.7817212,
			"lon": -73.94594,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3313,
			"name": "6 Ave & 12 St",
			"lat": 40.6663181,
			"lon": -73.9854617,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3314,
			"name": "W 95 St & Broadway",
			"lat": 40.7937704,
			"lon": -73.971888,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3315,
			"name": "Henry St & Degraw St",
			"lat": 40.6847514,
			"lon": -73.99917254,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3316,
			"name": "W 104 St & Amsterdam Ave",
			"lat": 40.7989937,
			"lon": -73.9662173778,
			"region_id": 71,
			"capacity": 47
		},
		{
			"station_id": 3317,
			"name": "10 St & 5 Ave",
			"lat": 40.6686273,
			"lon": -73.98700053,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3318,
			"name": "Coming Soon: 2 Ave & E 96 St",
			"lat": 40.7839636,
			"lon": -73.9471673,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3319,
			"name": "14 St & 5 Ave",
			"lat": 40.666287,
			"lon": -73.98895053,
			"region_id": 71,
			"capacity": 18
		},
		{
			"station_id": 3320,
			"name": "Central Park West & W 100 St",
			"lat": 40.793393,
			"lon": -73.9635556,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3321,
			"name": "Clinton St & Union St",
			"lat": 40.6831164,
			"lon": -73.99785267,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3322,
			"name": "12 St & 4 Ave",
			"lat": 40.668603,
			"lon": -73.9904394,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3323,
			"name": "W 106 St & Central Park West",
			"lat": 40.7981856,
			"lon": -73.9605909006,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3324,
			"name": "3 Ave & 14 St",
			"lat": 40.6685455,
			"lon": -73.99333264,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3325,
			"name": "E 95 St & 3 Ave",
			"lat": 40.7849032,
			"lon": -73.950503,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3326,
			"name": "Clinton St & Centre St",
			"lat": 40.67434,
			"lon": -74.00194698,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3327,
			"name": "3 Ave & E 100 St",
			"lat": 40.7877214,
			"lon": -73.94728331,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3328,
			"name": "Coming Soon: W 100 St & Manhattan Ave",
			"lat": 40.795,
			"lon": -73.9645,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3329,
			"name": "Degraw St & Smith St",
			"lat": 40.6829151,
			"lon": -73.99318208,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3330,
			"name": "Henry St & Bay St",
			"lat": 40.6725058,
			"lon": -74.00494695,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3331,
			"name": "Riverside Dr & W 104 St",
			"lat": 40.8013434,
			"lon": -73.9711457439,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3332,
			"name": "Coming Soon: Degraw St & Hoyt St",
			"lat": 40.681990442707026,
			"lon": -73.99079024791718,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3333,
			"name": "Columbia St & Lorraine St",
			"lat": 40.6747055,
			"lon": -74.0075572,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3335,
			"name": "Union St & 4 Ave",
			"lat": 40.6772744,
			"lon": -73.98282002,
			"region_id": 71,
			"capacity": 28
		},
		{
			"station_id": 3336,
			"name": "E 97 St & Madison Ave",
			"lat": 40.787801,
			"lon": -73.953559,
			"region_id": 71,
			"capacity": 41
		},
		{
			"station_id": 3337,
			"name": "Coming Soon: Beard St & Otsego St",
			"lat": 40.672415,
			"lon": -74.011802,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3338,
			"name": "Coming Soon: 2 Ave & E 99 St",
			"lat": 40.7862586,
			"lon": -73.94552579,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3339,
			"name": "Berkeley Pl & 6 Ave",
			"lat": 40.6765304,
			"lon": -73.97846879,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3340,
			"name": "Wolcott St & Dwight St",
			"lat": 40.6753274,
			"lon": -74.0100698,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3341,
			"name": "Central Park West & W 102 St",
			"lat": 40.795346,
			"lon": -73.96186,
			"region_id": 71,
			"capacity": 59
		},
		{
			"station_id": 3342,
			"name": "Pioneer St & Richards St",
			"lat": 40.6777748,
			"lon": -74.0094613,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3343,
			"name": "W 107 St & Columbus Ave",
			"lat": 40.7997568,
			"lon": -73.9621128676,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3344,
			"name": "Pioneer St & Van Brunt St",
			"lat": 40.679043,
			"lon": -74.011169,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3345,
			"name": "Madison Ave & E 99 St",
			"lat": 40.78948541553215,
			"lon": -73.95242929458618,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3346,
			"name": "Coming Soon: Berkeley Pl & 7 Ave",
			"lat": 40.675146838709786,
			"lon": -73.97523209452629,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3347,
			"name": "Van Brunt St & Wolcott St",
			"lat": 40.6773429,
			"lon": -74.01275056,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3348,
			"name": "Coming Soon: Coffey St & Conover St",
			"lat": 40.677236,
			"lon": -74.015665,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3349,
			"name": "Coming Soon: Grand Army Plaza & Plaza St West",
			"lat": 40.6729679,
			"lon": -73.97087984,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3350,
			"name": "W 100 St & Broadway",
			"lat": 40.7973721,
			"lon": -73.97041192,
			"region_id": 71,
			"capacity": 39
		},
		{
			"station_id": 3351,
			"name": "E 102 St & 1 Ave",
			"lat": 40.7869946,
			"lon": -73.94164802,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3352,
			"name": "Coming Soon: Richards St & Coffey St",
			"lat": 40.6753522,
			"lon": -74.01263583,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3353,
			"name": "Reed St & Van Brunt St",
			"lat": 40.6747844,
			"lon": -74.01612847,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3354,
			"name": "Coming Soon: 3 St & Prospect Park West",
			"lat": 40.668132,
			"lon": -73.97363831,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3355,
			"name": "Coming Soon: E 66 St & Madison Ave",
			"lat": 40.76800889305947,
			"lon": -73.96845281124115,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3356,
			"name": "Coming Soon: Amsterdam Ave & W 66 St",
			"lat": 40.7746671,
			"lon": -73.98470567,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3357,
			"name": "W 106 St & Amsterdam Ave",
			"lat": 40.8008363,
			"lon": -73.9664492472,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3358,
			"name": "Coming Soon: Garfield Pl & 8 Ave",
			"lat": 40.6711978,
			"lon": -73.97484126,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3359,
			"name": "Coming Soon: E 68 St & Madison Ave",
			"lat": 40.7691572,
			"lon": -73.96703464,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3360,
			"name": "Coming Soon: Amsterdam Ave & W 79 St",
			"lat": 40.7829391,
			"lon": -73.9786517,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3361,
			"name": "Carroll St & 6 Ave",
			"lat": 40.6740886,
			"lon": -73.9787282,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3362,
			"name": "Coming Soon: Madison Ave & E 82 St",
			"lat": 40.7781314,
			"lon": -73.96069399,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3363,
			"name": "E 102 St & Park Ave",
			"lat": 40.7904828,
			"lon": -73.95033068,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 3364,
			"name": "Carroll St & 5 Ave",
			"lat": 40.6751622,
			"lon": -73.9814832,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3365,
			"name": "3 St & 7 Ave",
			"lat": 40.6703837,
			"lon": -73.97839676,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3366,
			"name": "West End Ave & W 107 St",
			"lat": 40.8021174,
			"lon": -73.9681805305,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3367,
			"name": "5 Ave & E 103 St",
			"lat": 40.7922553,
			"lon": -73.95249933,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3368,
			"name": "5 Ave & 3 St",
			"lat": 40.6728155,
			"lon": -73.98352355,
			"region_id": 71,
			"capacity": 30
		},
		{
			"station_id": 3369,
			"name": "Coming Soon: 83 St & East End Ave",
			"lat": 40.7730159,
			"lon": -73.94637823,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3370,
			"name": "Coming Soon: 78 St & 2 Ave",
			"lat": 40.7727966,
			"lon": -73.95577801,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3371,
			"name": "Coming Soon: 3 Ave & Carroll St",
			"lat": 40.6771849,
			"lon": -73.98630629,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3372,
			"name": "Coming Soon: E 74 St & 1 Ave",
			"lat": 40.7689738,
			"lon": -73.95482273,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3373,
			"name": "3 St & 3 Ave",
			"lat": 40.6750705,
			"lon": -73.98775226,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3374,
			"name": "Central Park North & Adam Clayton Powell Blvd",
			"lat": 40.799484,
			"lon": -73.955613,
			"region_id": 71,
			"capacity": 36
		},
		{
			"station_id": 3375,
			"name": "Coming Soon: 3 Ave & E 72 St",
			"lat": 40.7699426,
			"lon": -73.96060712,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3376,
			"name": "Coming Soon: E 65 St & 3 Ave",
			"lat": 40.7651165,
			"lon": -73.9631636,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3377,
			"name": "Carroll St & Bond St",
			"lat": 40.6786115,
			"lon": -73.99037292,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3379,
			"name": "E 103 St & Lexington Ave",
			"lat": 40.7903051,
			"lon": -73.94755757,
			"region_id": 71,
			"capacity": 35
		},
		{
			"station_id": 3381,
			"name": "3 St & Hoyt St",
			"lat": 40.6777287,
			"lon": -73.99364123,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3382,
			"name": "Carroll St & Smith St",
			"lat": 40.680611,
			"lon": -73.99475825,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3383,
			"name": "Cathedral Pkwy & Broadway",
			"lat": 40.804213,
			"lon": -73.96699104,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3384,
			"name": "Smith St & 3 St",
			"lat": 40.6787242,
			"lon": -73.99599099,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3386,
			"name": "1 Pl & Clinton St",
			"lat": 40.6809591,
			"lon": -73.99905709,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3387,
			"name": "E 106 St & Madison Ave",
			"lat": 40.7934337,
			"lon": -73.94945003,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3388,
			"name": "President St & Henry St",
			"lat": 40.6828003,
			"lon": -73.99990419,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3389,
			"name": "Carroll St & Columbia St",
			"lat": 40.6830456,
			"lon": -74.00348559,
			"region_id": 71,
			"capacity": 28
		},
		{
			"station_id": 3390,
			"name": "E 109 St & 3 Ave",
			"lat": 40.79329668,
			"lon": -73.9432083,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3391,
			"name": "E 106 St & 1 Ave",
			"lat": 40.7892529,
			"lon": -73.93956237,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3392,
			"name": "Commerce St & Van Brunt St",
			"lat": 40.6812117,
			"lon": -74.00860912,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3393,
			"name": "Richards St & Delavan St",
			"lat": 40.6794327,
			"lon": -74.00785041,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3394,
			"name": "Columbia St & W 9 St",
			"lat": 40.6769993,
			"lon": -74.00647134,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3395,
			"name": "Henry St & W 9 St",
			"lat": 40.6763744,
			"lon": -74.00324957,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3396,
			"name": "Clinton St & 4 Place",
			"lat": 40.6783563,
			"lon": -74.00014502,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3397,
			"name": "Court St & Nelson St",
			"lat": 40.6763947,
			"lon": -73.99869893,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3398,
			"name": "Smith St & 9 St",
			"lat": 40.6746957,
			"lon": -73.99785768,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3399,
			"name": "Coming Soon: 7 St & 3 Ave",
			"lat": 40.67260298150126,
			"lon": -73.98983001708984,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3400,
			"name": "E 110 St & Madison Ave",
			"lat": 40.7961535,
			"lon": -73.94782145,
			"region_id": 71,
			"capacity": 24
		},
		{
			"station_id": 3401,
			"name": "2 Ave & 9 St",
			"lat": 40.6724811,
			"lon": -73.99331394,
			"region_id": 71,
			"capacity": 19
		},
		{
			"station_id": 3402,
			"name": "Court St & State St",
			"lat": 40.6902375,
			"lon": -73.99203074,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3403,
			"name": "4 Ave & 9 St",
			"lat": 40.6705135,
			"lon": -73.98876585,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3404,
			"name": "7 St & 5 Ave",
			"lat": 40.6704922,
			"lon": -73.98541675,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3405,
			"name": "5 St & 6 Ave",
			"lat": 40.6704836,
			"lon": -73.98208968,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3407,
			"name": "Coming Soon: Union St & Nevins St",
			"lat": 40.67909799721684,
			"lon": -73.98765474557877,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3408,
			"name": "Congress St & Clinton St",
			"lat": 40.6881529,
			"lon": -73.99520919,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3409,
			"name": "Coming Soon: Bergen St & Smith St",
			"lat": 40.6867443,
			"lon": -73.99063168,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3410,
			"name": "Dean St & Hoyt St",
			"lat": 40.6864442,
			"lon": -73.98759104,
			"region_id": 71,
			"capacity": 31
		},
		{
			"station_id": 3411,
			"name": "Bond St & Bergen St",
			"lat": 40.6849668,
			"lon": -73.98620772,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3412,
			"name": "Coming Soon: Pacific St & Nevins St",
			"lat": 40.6853761,
			"lon": -73.98302136,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3413,
			"name": "Wyckoff St & 3 Ave",
			"lat": 40.6827549,
			"lon": -73.98258555,
			"region_id": 71,
			"capacity": 22
		},
		{
			"station_id": 3414,
			"name": "Coming Soon: Bergen St & Flatbush Ave",
			"lat": 40.680944723477296,
			"lon": -73.97567331790923,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3415,
			"name": "Prospect Pl & 6 Ave",
			"lat": 40.6793307,
			"lon": -73.97519523,
			"region_id": 71,
			"capacity": 25
		},
		{
			"station_id": 3416,
			"name": "7 Ave & Park Pl",
			"lat": 40.6776147,
			"lon": -73.97324283,
			"region_id": 71,
			"capacity": 17
		},
		{
			"station_id": 3417,
			"name": "Baltic St & 5 Ave",
			"lat": 40.6795766,
			"lon": -73.97854971,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3418,
			"name": "Plaza St West & Flatbush Ave",
			"lat": 40.6750207,
			"lon": -73.97111473,
			"region_id": 71,
			"capacity": 33
		},
		{
			"station_id": 3419,
			"name": "Douglass St & 4 Ave",
			"lat": 40.6792788,
			"lon": -73.98154004,
			"region_id": 71,
			"capacity": 27
		},
		{
			"station_id": 3420,
			"name": "Douglass St & 3 Ave",
			"lat": 40.6802133,
			"lon": -73.98432695,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3421,
			"name": "Hoyt St & Warren St",
			"lat": 40.6843549,
			"lon": -73.98901629,
			"region_id": 71,
			"capacity": 23
		},
		{
			"station_id": 3422,
			"name": "Columbia St & Degraw St",
			"lat": 40.6859296,
			"lon": -74.00242364,
			"region_id": 71,
			"capacity": 21
		},
		{
			"station_id": 3423,
			"name": "West Drive & Prospect Park West",
			"lat": 40.6610633719006,
			"lon": -73.97945255041122,
			"region_id": 71,
			"capacity": 29
		},
		{
			"station_id": 3424,
			"name": "Coming Soon: E 106 St & Lexington Ave",
			"lat": 40.791976,
			"lon": -73.945993,
			"region_id": 71,
			"capacity": 0
		},
		{
			"station_id": 3425,
			"name": "2 Ave  & E 104 St",
			"lat": 40.7892105,
			"lon": -73.94370784,
			"capacity": 33
		},
		{
			"station_id": 3427,
			"name": "Lafayette St & Jersey St",
			"lat": 40.72430527250332,
			"lon": -73.99600982666016,
			"region_id": 71,
			"capacity": 40
		},
		{
			"station_id": 3428,
			"name": "8 Ave & W 16 St",
			"lat": 40.740983,
			"lon": -74.001702,
			"capacity": 25
		}
	]
};

db.sync({force: true})
	.then(()=> {
		return Promise.map(Object.keys(data), name=> {
			return Promise.map(data[name], item=> {
				return db.model(name).create(item);
			});
		});
	})
	.then(response=> {
		console.log('seeded')
	})
	.catch(error=> {
		console.log('ERROR ', error, error.stack);
	})
	.finally(()=> {
		db.close();
		console.log('db closed');
		return null;
	});