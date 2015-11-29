/* Brinkbit - Blank Game Template (Phaser) */

'use strict';

BasicGame.Game = function game() {

};

BasicGame.Game.prototype = {

    preload: function preload() {
        // Preload stuff here
    },

    create: function create() {
        // Create your stuff here
        this.add.sprite(0, 0, 'assets1_bg.png');
        var dieBtn = this.add.button(0, 0, 'assets1_btn_die.png', btnClick);
        dieBtn.x = this.game.width * 0.5 - (dieBtn.width * 0.5);
        dieBtn.y = this.game.height * 0.5 - (dieBtn.height * 0.5);

        function btnClick(target) {
            if (target === dieBtn) {
                this.game.state.start('MainMenu');
            }
        }
    },

    update: function update() {
        // Do some game stuff here
    }

};