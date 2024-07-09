
const express = require ('express');
const jobController = require('../controller/jobcontroller')
const userController = require('../controller/usercontroller')
const authorise = require('../middleware/authorise')

const router = express.Router();


router.post('/addapplication',jobController.addapplication)
// http://localhost:5005/api/addapplication

router.get('/getapplication',jobController.getapplication);
// http://localhost:5005/api/getapplication

router.put('/updateapplication/:id',jobController.updateapplication);
// http://localhost:5005/api/updateapplication

router.delete('/deleteapplication/:id',jobController.deleteapplication);
// http://localhost:5005/api/deleteapplication


router.post('/register',userController.addUser);
// http://localhost:5005/api/login

router.post('/login',userController.getUser);
// http://localhost:5005/api/register


module.exports = router;