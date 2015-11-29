/* Brinkbit - Blank Game Template (Phaser) */

'use strict';

BasicGame.Preloader = function preloader() {
    this.background = null;
    this.preloadBar = null;

    this.ready = false;
};

BasicGame.Preloader.prototype = {

    preload: function preload() {
        // Crop the sprite from 0 to full-width as the files below are loaded in.
        this.preloadBar = this.add.sprite(0, 0, 'assets1_preload_bar.png');
        this.preloadBar.x = this.game.width * 0.5 - (this.preloadBar.width * 0.5);
        this.preloadBar.y = this.game.height * 0.5 - (this.preloadBar.height * 0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('assets1_bg.png', 'assets1_bg.png');
        this.load.image('assets1_btn_about.png', 'assets1_btn_about.png');
        this.load.image('assets1_btn_back.png', 'assets1_btn_back.png');
        this.load.image('assets1_btn_die.png', 'assets1_btn_die.png');
        this.load.image('assets1_btn_play.png', 'assets1_btn_play.png');
    },

    create: function create() {
        this.state.start('MainMenu');
    }

};