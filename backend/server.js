const express = require("express");
const cors = require("cors");

app.use(cors({
  origin: "*"
}));

const app = express();
app.use(cors());
app.use(express.json());

const user = {
    email: "test@gmail.com",
  password: "123456",
};


app.get("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    return res.send({
      success: true,
      message: "Login successful",
    });
  } else {
    return res.status(401).send({
      success: false,
      message: "Invalid email or password",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});