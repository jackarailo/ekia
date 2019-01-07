var email = require('emailjs');
const { check, validationResult } = require('express-validator/check');


module.exports.index = function (req, res, next) {
    res.render('gr/index', {title: 'ekia residential apartments in ptolemais',
                         company: 'ekia',
                         app_name: 'ekia',
                         description: 'Luxury apartments in ptolemais',
                         keywords: 'ptolemaida, apartments, residential',
                         primary_color: '#01579b'});
};

module.exports.apartments = function (req, res, next) {
    res.render('gr/apartments', {});
};

module.exports.brochure = function (req, res, next) {
    res.render('gr/brochure', {});
};

module.exports.contact = function (req, res, next) {
    res.render('gr/contact', {});
};

module.exports.register = function (req, res, next) {
    res.render('gr/register', {});
};

module.exports.post_register = function (req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array()});
    }

    const title = req.body.title;
    const forename = req.body.forename;
    const surname = req.body.surname;
    const email = req.body.email;
    const confirm_email = req.body.confirm_email;
    const telephone = req.body.telephone;
    const postcode = req.body.postcode;
    const address = req.body.address;
    const city = req.body.city;
    const country = req.body.country;
    const how_did_you_hear_about_us = req.body.how_did_you_hear_about_us;
    const current_status = req.body.current_status;
    const property_value = req.body.property_value;
    const no_of_bedrooms = req.body.no_of_bedrooms;
    const comments = req.body.comments;
    const keep_in_touch = req.body.keep_in_touch
    const registration = {'forename': forename,
              'surname': surname,
              'email': email,
              'confirm_email': confirm_email,
              'telephone': telephone,
              'postcode': postcode,
              'address': address,
              'city': city,
              'country': country,
              'how_did_you_hear_about_us': how_did_you_hear_about_us,
              'current_status': current_status,
              'property_value': property_value,
              'no_of_bedrooms': no_of_bedrooms,
              'keep_in_touch': keep_in_touch
    };
    res.render('gr/register_success');
};
