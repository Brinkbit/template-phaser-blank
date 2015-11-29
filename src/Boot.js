/* global BasicGame, Phaser */

'use strict';

var BasicGame = {};

BasicGame.Boot = function boot() {

};

BasicGame.Boot.prototype = {

    init: function init() {
        // Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        // Phaser will automatically pause if the browser tab the game is in loses focus.
        // You can disable that here:
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.setShowAll();
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.stage.backgroundColor = '#000000';
        this.scale.refresh();
    },

    preload: function preload() {
        //  Here we load the assets required for the preloader
        this.load.image( 'assets1_preload_bar.png', 'assets1_preload_bar.png' );
    },

    create: function create() {
        // Start the preloader state since we've loaded the loader bar asset it requires
        this.state.start( 'Preloader' );
    }

};
