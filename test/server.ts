import Server from "../index";
import cors from "cors";

const app = Server();

// var whitelist = ["localhost:3000"];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

//app.use(cors(corsOptions));

app.get("/user", (req, res) => {
  res.status(200).json(req.body);
});

app.use((req, res, next, err) => {
    res.status(500).send('Error happened');
 });

app.listen(3000, () => {
  console.log("Running on port 3000");
});
