const router = require("express").Router()
const controllers = require('../controllers/index');

router.get('/:pollId', function(req, res){
    const controller = controllers.inviteePollController;
    const {pollId} = req.params;


    controller.findById(pollId, function(err, poll) {
        if (err) {
            res.json({
                confrimation: 'fail',
                message: `error getting poll id=${pollID}`
            })
        }
        res.json({
            confrimation: 'success',
            result: poll
        })
    }) 
})

module.exports = router

