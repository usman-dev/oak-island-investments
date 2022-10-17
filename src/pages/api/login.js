const data = [
  {
    email: "admin@gmail.com",
    password: "admin",
  },
];

export default function login(req, res) {
  console.log("reeeeeeqqq", req.body);
  const { email, password } = req.body;
  if (email === data[0]?.email && password === data[0]?.password) {
    res
      .status(200)
      .json({ status: 200, message: "You are successfuly logedin!" });
  } else {
    res
      .status(200)
      .json({ status: 401, message: "Email or password is invalid!" });
  }
}
