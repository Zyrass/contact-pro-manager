/**
 * =======================================================================
 * Dépendances ou module
 * =======================================================================
 */
const mongoose = require("mongoose");

/**
 * =======================================================================
 * Configuration d'une variable d'environnement
 * =======================================================================
 */
const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;

/**
 * =======================================================================
 * Configuration du Schema
 * =======================================================================
 */
const ContactSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

module.exports = mongoose.model(COLLECTION_NAME, ContactSchema);
