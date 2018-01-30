var mongoose = require ('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    getPlayers: function(req,res){
        Player.find({}, function(err,players){
            res.json(players);
        })
    },

    addPlayer: function(req, res){
        var newPlayer = new Player();
        newPlayer.name = req.body.name;
        if(req.body.position){
            newPlayer.position = req.body.position
        }
        newPlayer.g1 = 'undecided'
        newPlayer.g2 = 'undecided'
        newPlayer.g3 = 'undecided'
        newPlayer.save(function(err){
            if (err){
                res.json({error:"Error Saving"});
            } else {
                res.json({good: "Everythin good"});
            }
        })
    },

    deletePlayer: function(req,res){
        Player.remove({_id: req.body._id}, function(err){
            if(err){
                res.json({error:''})
            } else {
                res.json({good: ''})
            }
        })
    },

    changeStatus: function(req,res){
        Player.find({'_id': req.params.id}, function(err,person){
            if(err){
                res.json({'error':err});
            } else {
                if(req.params.game === 'g1'){
                    Player.update(person[0], {g1: req.params.status}, function(err){
                        if(err){
                            res.json({'error': 'error saving'})
                        } else {
                            res.json({'ok': 'everything good'})
                        }
                    })
                }
                if(req.params.game === 'g2'){
                    Player.update(person[0], {g2: req.params.status}, function(err){
                        if(err){
                            res.json({'error': 'error saving'})
                        } else {
                            res.json({'ok': 'everything good'})
                        }
                    })
                }
                if(req.params.game === 'g3'){
                    Player.update(person[0], {g3: req.params.status}, function(err){
                        if(err){
                            res.json({'error': 'error saving'})
                        } else {
                            res.json({'ok': 'everything good'})
                        }
                    })
                }
            }
        })
    }

}