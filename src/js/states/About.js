/* global BasicGame */

'use strict';

BasicGame.About = function about() {

};

BasicGame.About.prototype = {

    preload: function preload() {
        // preload your stuff here
    },

    create: function create() {
        // create your stuff here
        this.add.sprite( 0, 0, 'ta0', 'assets1_bg.png' );
        var backBtn = this.add.button( 0, 0, 'ta0', btnClick, this, 'assets1_btn_back.png', 'assets1_btn_back.png', 'assets1_btn_back.png' );
        backBtn.x = 15;
        backBtn.y = 15;

        function btnClick( target ) {
            if ( target === backBtn ) {
                this.game.state.start( 'MainMenu' );
            }
        }
    },

    update: function update() {
        // Do some nice funky about stuff here

    }

};
