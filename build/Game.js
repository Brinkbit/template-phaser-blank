/* global BasicGame */

'use strict';

BasicGame.Game = function game() {

};

BasicGame.Game.prototype = {

    preload: function preload() {
        // preload your stuff here
    },

    create: function create() {
        // create your stuff here
        this.add.sprite( 0, 0, 'ta0', 'assets1_bg.png' );
        var dieBtn = this.add.button( 0, 0, 'ta0', btnClick, this, 'assets1_btn_die.png', 'assets1_btn_die.png', 'assets1_btn_die.png' );
        dieBtn.x = this.game.width * 0.5 - ( dieBtn.width * 0.5 );
        dieBtn.y = this.game.height * 0.5 - ( dieBtn.height * 0.5 );

        function btnClick( target ) {
            if ( target === dieBtn ) {
                this.game.state.start( 'MainMenu' );
            }
        }
    },

    update: function update() {
        // Do some nice funky game stuff here

    }

};
