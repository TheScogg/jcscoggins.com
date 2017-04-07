
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

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {

        game.load.image('logo', '/javascript/MyWorld/img/phaser.png');

    }

    function create () {

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

    }

});
