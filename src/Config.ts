import { Env } from "@tsed/core";
import { $log } from "@tsed/logger";
import dotenv from "dotenv";
import fs from "fs";

let envFile = ".env";
let firebaseFile = "./firebase.config.json";
let errorCount = 0;

export const NODE_ENV = String(process.env.NODE_ENV);

let ENVIRONMENT_NAME: "PROD" | "DEV" | "TEST";
switch (NODE_ENV) {
    case "production":
        ENVIRONMENT_NAME = "PROD";
        envFile = ".env_production";
        firebaseFile = "./firebase-production.json";
        break;
    case "test":
    case "development":
        ENVIRONMENT_NAME = NODE_ENV == "test"? "TEST" : "DEV";
        envFile = ".env_development";
        firebaseFile = "./firebase-development.json";
        break;
}

export const ENVIRONMENT: Env = Env[ENVIRONMENT_NAME];
$log.info(`ENVIRONMENT: ${ENVIRONMENT}`);

if (fs.existsSync(envFile)) {
    $log.info(`Using "${envFile}" file to supply config Environment Variables`);
    dotenv.config({ path: envFile });
} else if (fs.existsSync(".env")) {
    $log.info("Using \".env\" file to supply config Environment Variables");
    dotenv.config({ path: ".env" });
} else {
    dotenv.config();
}

export const SESSION_SECRET = process.env["SESSION_SECRET"];
export const APP_URL = process.env["APP_URL"] || "http://localhost:4000";
export const APP_PORT = process.env["APP_PORT"] || 4000;
export const MONGODB_URI = process.env["MONGODB_URI"];
export const WHITELIST_ORIGIN = ["http://localhost:3000", "https://batikgirialam.com"];
export const DOMAIN = ENVIRONMENT_NAME == "DEV" ? "localhost" : "batikgirialam.com";

if (!MONGODB_URI) {
    $log.info("No mongo connection string provided. Please set MONGODB_URI environment variable.");
    errorCount++;
}

if (errorCount) process.exit(1);