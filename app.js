const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const app = express();
const jsonParser = express.json();

// установка схемы
const materialScheme = new Schema({

  vid: {
    type: String
  },
  ni: {
    type: Number
  },
  cr: {
    type: Number
  },
  mo: {
    type: Number
  },
  cu: {
    type: Number
  },
  mn: {
    type: Number
  },
  w: {
    type: Number
  },
  v: {
    type: Number
  },
  co: {
    type: Number
  },
  si: {
    type: String
  },
  ti: {
    type: Number
  },
  al: {
    type: String
  },
  nb: {
    type: String
  },
  fe: {
    type: Number
  },
  s: {
    type: Number
  },
  p: {
    type: Number
  },
  c: {
    type: Number
  },
  classSteel: {
    type: String,
    default: ''
  },
  groupSteel: {
    type: String,
    default: ''
  },
  markSteel: {
    type: String,
    default: ''
  }
},
  {
    versionKey: false
  });
const Material = mongoose.model("Material", materialScheme);

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb+srv://Ivashchenko:WyMcJf8AWg83OqMw@cluster0-hc5cb.gcp.mongodb.net/materialsdb?retryWrites=true&w=majority", { useNewUrlParser: true }, function (err) {
  if (err) return console.log(err);
  app.listen(3000, function () {
    console.log("Сервер ожидает подключения...");
  });
});

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

app.get("/api/materials", function (req, res) {
  Material.find({}, function (err, materials) {
    if (err) return console.log(err);
    res.send(materials);
  }).sort({ 'vid': 1 });
});

app.get("/api/materials/:id", function (req, res) {
  const id = req.params.id;
  Material.findOne({ _id: id }, function (err, material) {
    if (err) return console.log(err);
    res.send(material);
  });
});

app.post("/api/materials", jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  const Vid = req.body.vid;
  const Ni = req.body.ni;
  const Cr = req.body.cr;
  const Mo = req.body.mo;
  const Cu = req.body.cu;
  const Mn = req.body.mn;
  const W = req.body.w;
  const V = req.body.v;
  const Co = req.body.co;
  const Si = req.body.si;
  const Ti = req.body.ti;
  const Al = req.body.al;
  const Nb = req.body.nb;
  const Fe = req.body.fe;
  const S = req.body.s;
  const P = req.body.p;
  const C = req.body.c;
  const ClassSteel = req.body.classSteel;
  const GroupSteel = req.body.groupSteel;
  const MarkSteel = req.body.markSteel;
  const material = new Material({ vid: Vid, ni: Ni, cr: Cr, mo: Mo, cu: Cu, mn: Mn, w: W, v: V, co: Co, si: Si, ti: Ti, al: Al, nb: Nb, fe: Fe, s: S, p: P, c: C, classSteel: ClassSteel, groupSteel: GroupSteel, markSteel: MarkSteel });
  material.save(function (err) {
    if (err) return console.log(err);
    res.send(material);
  });
});

app.delete("/api/materials/:id", function (req, res) {
  const id = req.params.id;
  Material.findOneAndDelete({ _id: id }, function (err, material) {
    if (err) return console.log(err);
    res.send(material);
  });
});

app.put("/api/materials", jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  const id = req.body.id;
  const materialNi = req.body.ni;
  const materialCr = req.body.cr;
  const materialMo = req.body.mo;
  const materialCu = req.body.cu;
  const materialMn = req.body.mn;
  const materialW = req.body.w;
  const materialV = req.body.v;
  const materialCo = req.body.co;
  const materialSi = req.body.si;
  const materialTi = req.body.ti;
  const materialAl = req.body.al;
  const materialNb = req.body.nb;
  const newMaterial = { ni: materialNi, cr: materialCr, mo: materialMo, cu: materialCu, mn: materialMn, w: materialW, v: materialV, co: materialCo, si: materialSi, ti: materialTi, al: materialAl, nb: materialNb };
  Material.findOneAndUpdate({ _id: id }, newMaterial, { new: true }, function (err, material) {
    if (err) return console.log(err);
    res.send(material);
  });
});

// прослушиваем прерывание работы программы (ctrl-c)
