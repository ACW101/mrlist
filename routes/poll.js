const router = require("express").Router()
const controllers = require('../controllers/index');

router
    .get('/:pollId', function(req, res){
        const controller = controllers.inviteePollController;
        const {pollId} = req.params;
        const params = { pollId }
        controller.findById(params, function(err, poll) {
            if (err) {
                res.json({
                    confirmation: 'fail',
                    message: `error getting poll id=${pollId}`
                })
            }
            res.json({
                confrimation: 'success',
                result: poll
            })
        })
    })
    // post to postId to update the pollCount only
    .post('/:pollId', (req, res) => {
        const controller = controllers.inviteePollController;
        const params = {
            id: req.params.pollId,
            poll_counts: req.body.poll_counts
        }
        
        controller.update(params, function(err, response) {
            if (err) {
                res.json({
                    confirmation: 'fail',
                    message: `error updating poll id=${req.params.pollId}`
                })
            }
            res.json({
                confirmation: 'success',
                result: response
            })
        })

    })


module.exports = router

