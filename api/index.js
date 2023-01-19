// ES6
// import { ... } from 'espn-fantasy-football-api'; // web
// import { Client } from 'espn-fantasy-football-api/node'; // node
// import { ... } from 'espn-fantasy-football-api/web-dev'; // web development build
// import { Client } from 'espn-fantasy-football-api/node-dev'; // node development build

// ES5
// const { ... } = require('espn-fantasy-football-api'); // web
// const { Client } = require('espn-fantasy-football-api/node'); // node
// const { ... } = require('espn-fantasy-football-api/web-dev'); // web development build
const { Client, Team } = require('espn-fantasy-football-api/node-dev'); // node development build
const express = require("express");
const axios = require('axios');
require('dotenv').config();

const app = express();
  
const espnLeagueId = process.env.espnLeagueId;
const espnS2Cookie = process.env.espnS2Cookie;
const espnSWIDCookie = process.env.espnSWIDCookie;

const myClient = new Client({ leagueId: espnLeagueId });

myClient.setCookies({ 
    espnS2: espnS2Cookie, 
    SWID: espnSWIDCookie
});

// http://localhost:3000/boxscores?seasonId=2022&matchupPeriodId=17&scoringPeriodId=17
app.get("/boxscores", async (req, res) => {
    const { seasonId, scoringPeriodId } = req.query;
    const boxScores = await myClient.getBoxscoreForWeek({
        seasonId: parseInt(seasonId, 10),
        matchupPeriodId: parseInt(scoringPeriodId, 10),
        scoringPeriodId: parseInt(scoringPeriodId, 10)
    });
    res.send(boxScores);
});

// http://localhost:3000/team?teamId=1&seasonId=2022&scoringPeriodId=17
app.get("/team", async (req, res) => {
    const { teamId, seasonId, scoringPeriodId } = req.query;
    const getTeamsAtWeek = await myClient.getTeamsAtWeek({
        seasonId: parseInt(seasonId, 10),
        scoringPeriodId: parseInt(scoringPeriodId, 10)
    });
    const teamById = getTeamsAtWeek.find(team => team.id === parseInt(teamId, 10));
    res.send(teamById);
});

app.get("/player/:playerId", async (req, res) => {
    const filterByPlayerObj = {
        players: {
            filterIds: {
                value:[3917792]
            },
            filterRanksForSlotIds: {
                value: [0,2,4,6,17,16]
            },
            filterStatsForTopScoringPeriodIds: {
                value:17,
                additionalValue:["002022","102022","002021","11202218","022022"]
            }
        }
    };
    // const filterByPlayerObj = {"players":{"filterIds":{"value":[3917792]},"filterRanksForSlotIds":{"value":[0,2,4,6,17,16]},"filterStatsForTopScoringPeriodIds":{"value":17,"additionalValue":["002022","102022","002021","11202219","022022"]}}}
    
    // https://fantasy.espn.com/apis/v3/games/ffl/seasons/2022/segments/0/leagues/${espnLeagueId}?scoringPeriodId=18&view=kona_playercard'
    const httpCookie = `espnS2=${espnS2Cookie}; SWID=${espnSWIDCookie}; espnAuth=${JSON.stringify({"swid":`{${espnSWIDCookie}}`})}`;

    const httpOptions = {
        headers: {
            Accept: 'application/json',
            'x-fantasy-filter': JSON.stringify(filterByPlayerObj),
            // Cookie: httpCookie
        },
    }

    let data = ""
    axios.get(
        `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2022/segments/0/leagues/${espnLeagueId}?scoringPeriodId=19&view=kona_playercard`,
        httpOptions)
        .then(response => data = response.data)
        .catch(error => {
            console.log(error.response);
        });

    res.send(data);
});

app.listen(3000, () => {  
    console.log("Server running on 3000");
});
