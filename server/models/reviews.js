const mongoose = require("mongoose");
const { FALSE } = require("node-sass");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  reviewOwner: {
    type: String,
    required: true,
  },
  reviewCreated: {
    type: Date,
    default: Date.now,
    required: true,
  },
  reviewTitle: {
    type: String,
    required: true,
  },
  reviewBody: {
    type: String,
    required: false,
  },
  reviewRating: {
    type: Number,
    required: true,
  },
  reviewLocation: {
    type: String,
    required: true,
  },
  reviewComments: {
    type: Array,
    required: false,
  },
  reviewLat: {
    type: Number,
    required: false,
  },
  reviewLong: {
    type: Number,
    required: false,
  },
  reviewGeoLocation: {
    type: Array,
    required: false,
  },
  reviewTestField: {
    type: String,
    required: true,
  },
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
