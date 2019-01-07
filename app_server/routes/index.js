var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
const { check, validationResult } = require('express-validator/check');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/apartments', ctrlMain.apartments);
router.get('/brochure', ctrlMain.brochure);
router.get('/contact', ctrlMain.contact);
router.get('/register', ctrlMain.register);

/* POST register. */
const validation = [check('forename', 'Συμπλήρωσε το πεδίο ονόματος').isLength({min: 1}),
                    check('surname', 'Συμπλήρωσε το πεδίο επωνύμου').isLength({min: 1}),
                    check('email', 'Συμπλήρωσε συμβατή διεύθυνση e-mail').isEmail().custom((value, {req, loc, path}) => {
                        if (value !== req.body.confirm_email) {
                            // throw error if emails do not match
                            throw new Error("Οι διευθύνσεις e-mail δεν ταυτίζονται");
                        } else {
                            return value;
                        }
                    }),
                    check('telephone', 'Συμπλήρωσε αριθμό τηλεφώνου').isNumeric().isLength({min:10}),
                    check('postcode', 'Συμπλήρωσε ταχυδρομικό κώδικα').isLength({min:3}),
                    check('address', 'Συμπλήρωσε το πεδίο διεύθυνσης').isLength({min: 3}),
                    check('city', 'Συμπλήρωσε το πεδίο πόλης').isLength({min:3}),
                    check('country', 'Συμπλήρωσε το πεδίο χώρας κατοικίας').isLength({min:3}),
                    check('property_value', 'Συμπλήρωσε το πεδίο επιθυμητής αξίας κατοικίας').contains("-")
                    ];

router.post('/register', validation, ctrlMain.post_register);

module.exports = router;
