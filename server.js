const mongodb = require("mongodb");

mongodb
  .connect("mongodb://127.0.0.1:27017/raffle_draw", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to 127.0.0.1:27017/");
  })
  .catch((err) => console.log(err));
