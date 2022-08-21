function gameObject() {
	return {
		home: {
			teamName: "Brooklyn Nets",
			colors: ["Black", "White"],
			players: {
				"Alan Anderson": {
					number: 0,
					shoe: 16,
					points: 22,
					rebounds: 12,
					assists: 12,
					steals: 3,
					blocks: 1,
					slamDunks: 1,
				},
				"Reggie Evans": {
					number: 30,
					shoe: 14,
					points: 12,
					rebounds: 12,
					assists: 12,
					steals: 12,
					blocks: 12,
					slamDunks: 7,
				},
				"Brook Lopez": {
					number: 11,
					shoe: 17,
					points: 17,
					rebounds: 19,
					assists: 10,
					steals: 3,
					blocks: 1,
					slamDunks: 15,
				},
				"Mason Plumlee": {
					number: 1,
					shoe: 19,
					points: 26,
					rebounds: 12,
					assists: 6,
					steals: 3,
					blocks: 8,
					slamDunks: 5,
				},
				"Jason Terry": {
					number: 31,
					shoe: 15,
					points: 19,
					rebounds: 2,
					assists: 2,
					steals: 4,
					blocks: 11,
					slamDunks: 1,
				},
			},
		},
		away: {
			teamName: "Charlotte Hornets",
			colors: ["Turquoise", "Purple"],
			players: {
				"Jeff Adrien": {
					number: 4,
					shoe: 18,
					points: 10,
					rebounds: 1,
					assists: 1,
					steals: 2,
					blocks: 7,
					slamDunks: 2,
				},
				"Bismak Biyombo": {
					number: 0,
					shoe: 16,
					points: 12,
					rebounds: 4,
					assists: 7,
					steals: 7,
					blocks: 15,
					slamDunks: 10,
				},
				"DeSagna Diop": {
					number: 2,
					shoe: 14,
					points: 24,
					rebounds: 12,
					assists: 12,
					steals: 4,
					blocks: 5,
					slamDunks: 5,
				},
				"Ben Gordon": {
					number: 8,
					shoe: 15,
					points: 33,
					rebounds: 3,
					assists: 2,
					steals: 1,
					blocks: 1,
					slamDunks: 0,
				},
				"Brendan Haywood": {
					number: 33,
					shoe: 15,
					points: 6,
					rebounds: 12,
					assists: 12,
					steals: 22,
					blocks: 5,
					slamDunks: 12,
				},
			},
		},
	};
}
// console.log(gameObject())

// debugger;

// function homeTeamName() {
//     let object = gameObject();
//     return object['home']['teamName']
// }
// console.log(homeTeamName());

// let x=99;
// let y=42;

// debugger;
// console.log('x: ', x);

// let oo={foo: 42, bar: 83, 'key w/ spaces': true};

// console.log(oo['foo']);
// console.log(oo['key w/ spaces']);
// function numPointsScored(){
//     let namesScored= gameObject();
//     return namesScored['players']['points']
// }
// console.log(numPointsScored("Brendan Haywood"))
// console.log(gameObject());

function numPointsScored(playerName) {
	// get game object
	const game = gameObject();
	//iterate through game keys home and away
	for (let key in game) {
		//iterate through game[key] players
		for (let player in game[key].players) {
			//if player name matches player name passed in
			if (player === playerName) {
				//return player points
				return game[key].players[player].points;
			}
			return "Sorry, that player is not on the team.";
		}
	}
}

// console.log(numPointsScored("Alan"));
// console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
	// get game object
	const game = gameObject();
	//iterate through game keys home and away
	for (let key in game) {
		//iterate through game[key] players
		for (let player in game[key].players) {
			//if player name matches player name passed in
			if (player === playerName) {
				//return player points
				return game[key].players[player].shoe;
			}
			return "Sorry, that player is not on the team.";
		}
	}
}

// console.log(shoeSize("Alan Anderson"));
// console.log(gameObject()["home"].players["Alan Anderson"])

function teamColors() {
	const game = gameObject();
	//create an array to hold the colors
	let colors = [];
	//iterate through game keys home and away
	for (let key in game) {
		//add colors to array
		colors.push(game[key].colors);
	}
	//return array
	return colors;
}

console.log(teamColors());
