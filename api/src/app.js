const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware.js");

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use(`/condo`, require("./routes/condo.routes"));
app.use(`/event`, require("./routes/event.routes"));
app.use(`/customer`, require("./routes/customer.routes"));
app.use(`/gate`, require("./routes/gate.routes"));
app.use(`/staff`, require("./routes/staff.routes"));
app.use(`/unit`, require("./routes/unit.routes"));
// app.use(`/messages`, require("./routes/messages.routes"));

// Error handling
app.use(errorHandlerMiddleware);

module.exports = app;
