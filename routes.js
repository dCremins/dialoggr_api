'use strict';
let mongoose = require('mongoose');
let Entry = mongoose.model('Entry');
module.exports = app => {
  app.route('/entries')
    .get((req, res, next) => {
      Entry.find({}, (err, entries) => {
        if (err) { return next(err); }
        res.json(entries);
      });
    })
    .post((req, res, next) => {
      console.log(req);
      let e = new Entry(req.body);
      e.save((err, entry) => {
        if (err) { return next(err); }
        res.json(entry);
      })
    });

  app.route('/entries/:entryId')
    .get((req, res, next) => {

    })
    .post((req, res, next) => {

    })
    .delete((req, res, next) => {

    });
};