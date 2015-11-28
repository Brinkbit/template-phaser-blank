/* global BasicGame, Phaser */

'use strict';

var BasicGame = {};

BasicGame.Boot = function boot() {

};

BasicGame.Boot.prototype = {

    init: function init() {
        // Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        // Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        // this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setShowAll();
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize( true );
        this.scale.refresh();
        this.game.stage.backgroundColor = '#000000';
    },

    preload: function preload() {
        // Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.atlas( 'preloader', 'assets/images/atlases/preloader.png', 'assets/json/atlases/preloader.json' );
    },

    create: function create() {
        // By this point the preloader assets have loaded to the cache, we've set the game settings
        // So now let's start the real preloader going
        this.state.start( 'Preloader' );
    }

};
