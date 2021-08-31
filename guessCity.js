"use strict";

function guessCity(capital, coastal, famous, ancient) {
    // your code goes here
    const cities = {
        "Jerusalem": {"capital": true, "coastal":false, "famous": true, "ancient": true},
        "Tel Aviv": {"capital": false, "coastal":true, "famous": true, "ancient": false},
        "Acre": {"capital": false, "coastal":true, "famous": false, "ancient": true},
        "Katzrin": {"capital": false, "coastal":false, "famous": false, "ancient": true},
        "Zikim": {"capital": false, "coastal":true, "famous": false, "ancient": false},
        "Musmus": {"capital": false, "coastal":false, "famous": false, "ancient": false},
    };
    for (const city in cities) {
        if(cities[city].capital == capital && cities[city].coastal == coastal && cities[city].famous == famous && cities[city].ancient === ancient){
            return city;
        }
    }
    return "No other cities are recognized."
}
console.log(guessCity(true, false, true, true));