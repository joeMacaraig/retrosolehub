import mongoose from "mongoose";

let isConnected = false;

export const databaseConnect = async (): Promise<void> => {
  mongoose.set("strictQuery", true); // Ensure MongoDB queries are strictly handled

  // Check if already connected to avoid unnecessary reconnections
  if (isConnected) {
    console.log("Already connected ✅");
    return;
  }

  try {
    // Ensure the environment variable exists and is a valid string
    if (!process.env.DB_URI) {
      throw new Error(
        "Database URI is not defined in the environment variables."
      );
    }

    // Connect to the database
    await mongoose.connect(process.env.DB_URI, {
      dbName: "ShoeWebsite", // Name of the database
    });

    isConnected = true; // Mark as connected
    console.log("Database connection successful ✅");
  } catch (err) {
    console.error("Database connection failed ❌", err);
    throw new Error("Failed to connect to the database");
  }
};
