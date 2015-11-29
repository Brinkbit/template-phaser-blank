/* global BasicGame */

'use strict';

BasicGame.About = function about() {

};

BasicGame.About.prototype = {

    preload: function preload() {
        // Preload stuff here
    },

    create: function create() {
        // Create your stuff here
        this.add.sprite( 0, 0, 'assets1_bg.png' );
        var backBtn = this.add.button( 0, 0, 'assets1_btn_back.png', btnClick );
        backBtn.x = 15;
        backBtn.y = 15;

        function btnClick( target ) {
            if ( target === backBtn ) {
                this.game.state.start( 'MainMenu' );
            }
        }
    },

    update: function update() {
        // Do some about screen stuff here
    }

};
