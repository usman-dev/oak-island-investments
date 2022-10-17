export default function forgot(req, res) {
  res.status(200).json({
    status: 200,
    message:
      "An email has been sent to you with a link to reset your password. If you haven't received an email, please contact us at help@oakislandinvestments.net for further assistance",
  });
}
