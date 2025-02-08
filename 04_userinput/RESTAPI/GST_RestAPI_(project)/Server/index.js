const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = multer();

app.post("/api/Exclusive", upload.none(), (req, res) => {
  const { amount, gst } = req.body;
  console.log("amt=", amount);
  console.log("gst=", gst);
  const amt = parseFloat(amount);

  const gstfloat = parseFloat(gst);

  let result = {
    gst_exc: 0.0,
    gst_inc: 0.0,
    postgst: 0.0,
    pregst: 0.0,
    cgst: 0.0,
    sgst: 0.0,
    cgst_amt: 0.0,
    sgst_amt: 0.0,
  };
  const per = gstfloat / 100;
  result.gst_exc = amt * per;
  result.gst_inc = amt - amt / (1 + gstfloat / 100);
  result.postgst = amt + result.gst_exc; //118 – [100/(100 + 18%)}],
  result.pregst = parseFloat((amt * 100) / (100 + gstfloat));
  result.cgst = (per / 2) * 100;
  result.sgst = (per / 2) * 100;
  result.cgst_amt = result.gst_exc / 2;
  result.sgst_amt = result.gst_exc / 2;

  res.json({ result });
});

const port = 3000;
app.listen(port, () => {
  console.log("prajwal server running:", port);
});
