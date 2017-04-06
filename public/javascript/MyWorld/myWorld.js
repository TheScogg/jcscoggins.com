
$(document).ready(function () {


    class Map {
      constructor(name, size, biome) {
        this.name = name;
        this.size = size;
        this.biome = biome;
      }

      buildMap() {
        var mapArray = [];
        var mapObject = {};
        var tiles = ["water", "forest", "grassland", "mountain"];
        for (var i = 0; i < this.size[0] ; i++) {
            var name = i;
            mapObject[i] = [];
            for (var j = 0; j < this.size[1]; j++) {
                mapObject[i].push({x : j, biome : tiles[j%4]});
            }
        }
        console.log(mapObject);
        var myKey = "BILL";


      }
    }

    forest = new Map("The Woods", [5,5], "forest");
    forest.buildMap();

});
