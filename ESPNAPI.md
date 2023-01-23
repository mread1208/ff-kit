# Parsing the ESPN API

There are no official docs with the ESPN API, here's some research I've done to reverse engineer the data, endpoints and filters

## Players filters

### Player by ID

```json
x-fantasy-filter: {
    players: {
        filterIds: {
            value:[playerId] // Player ID, 4239996 = Etienne, 3917792 = Daniel Jones, 4262921 = J. Jefferson
        },
        // Not sure what this does yet
        // filterRanksForSlotIds: {
        //     value: [0,2,4,6,17,16]
        // },
        // Not sure what this does yet
        filterStatsForTopScoringPeriodIds: {
            value:17,
            // Adds additional applied stats... not sure what need for this yet
            additionalValue:["002022","102022","002021","11202218","022022"]
        }
    }
}
```

Players by position

QB

```json
x-fantasy-filter: {
    "players":{
        "filterSlotIds":{"value":[0]},
        "filterRanksForScoringPeriodIds":{"value":[19]},
        "limit":50,
        "offset":0,
        "sortPercOwned":{"sortAsc":false,"sortPriority":1},
        "sortDraftRanks":{"sortPriority":100,"sortAsc":true,"value":"STANDARD"},
        "filterRanksForRankTypes":{"value":["PPR"]},
        "filterRanksForSlotIds":{"value":[0,2,4,6,17,16]},
        "filterStatsForTopScoringPeriodIds":{
            "value":2,
            "additionalValue":["002022","102022","002021","11202219","022022"]
        }
    }
}
```

RB

```json
x-fantasy-filter: {
    "players":{
        "filterSlotIds":{"value":[2]},
        "filterRanksForScoringPeriodIds":{"value":[19]},
        "limit":50,
        "offset":0,
        "sortPercOwned":{"sortAsc":false,"sortPriority":1},
        "sortDraftRanks":{"sortPriority":100,"sortAsc":true,"value":"STANDARD"},
        "filterRanksForRankTypes":{"value":["PPR"]},
        "filterRanksForSlotIds":{"value":[0,2,4,6,17,16]},
        "filterStatsForTopScoringPeriodIds":{
            "value":2,
            "additionalValue":["002022","102022","002021","11202219","022022"]
        }
    }
}
```
