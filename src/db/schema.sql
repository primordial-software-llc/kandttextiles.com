CREATE TABLE tracking_data(
   id              SERIAL PRIMARY KEY,
   deviceid        VARCHAR(158) NOT NULL,
   DATE            DATE NOT NULL,
   Time            VARCHAR(8) NOT NULL,
   Latitude        NUMERIC(12,8) NOT NULL,
   Longitude       NUMERIC(12,8) NOT NULL,
   TYPE            VARCHAR(4) NOT NULL,
   SPEEDMPH        INTEGER NOT NULL,
   "BATTERY LEVEL" INTEGER NOT NULL,
   Link            VARCHAR(69) NOT NULL
);