import axios from "axios";

export default {
  // Gets all reviews:
  getUserInfo: function(userName) {
    return axios.get("/api/user/" + userName);
  },
  getReviews: function() {
    return axios.get("/api/reviews");
  },
  getReviewById: function(id) {
    return axios.get("/api/reviews/" + id);
  },
  updateUser: function(userData) {
    return axios.put("/api/user", userData);
  },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a review to the database:
  saveReview: function(reviewData) {
    return axios.post("/api/reviews", reviewData);
  },
  addComment: function(id, commentData) {
    return axios.put("/api/reviews/" + id, commentData)
  }
};