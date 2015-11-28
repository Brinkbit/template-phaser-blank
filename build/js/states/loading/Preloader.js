/* global BasicGame */

'use strict';

BasicGame.Preloader = function preloader() {
    this.background = null;
    this.preloadBar = null;

    this.ready = false;
};

BasicGame.Preloader.prototype = {

    preload: function preload() {
        // setup the loader image that was loaded in Boot.js
        this.background = this.add.sprite( 0, 0, 'preloader', 'preloader_background.jpg' );
        this.preloadBar = this.add.sprite( 0, 0, 'preloader', 'preloader_bar.png' );
        this.preloadBar.x = this.game.width * 0.5 - ( this.preloadBar.width * 0.5 );
        this.preloadBar.y = this.game.height * 0.5 - ( this.preloadBar.height * 0.5 );
        this.load.setPreloadSprite( this.preloadBar );

        // This sets the preloadBar sprite as a loader sprite.
        // What that does is automatically crop the sprite from 0 to full-width
        // as the files below are loaded in.
        this.load.setPreloadSprite( this.preloadBar );

        this.load.atlas( 'ta0', 'assets/images/atlases/ta0.png', 'assets/json/atlases/ta0.json' );
    },

    create: function create() {
        this.state.start( 'MainMenu' );
    }

};