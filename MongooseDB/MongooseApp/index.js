// step1: create mongoose insance
const mongoose = require("mongoose");

//step2: create mongoDB connection with mongoose
mongoose.connect("mongodb://localhost:27017/meanacademy");

//step3: check DB connection
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("connection error");
});
db.once("open", () => {
  console.log("connected Successfully");
});

// step4: Define schema/Create a model
const carSchema = mongoose.Schema({
  carmodelno: String,
  carname: String,
  carCompany: String,
  inventedCountry: String,
  owner: String,
  price: String,
});

//step5: Create Model(collection/table)
const carModel = mongoose.model("car", carSchema);

// step6: create a document ( insert Single document)
/*const carDocument = {
  carmodelno: "2458#",
  carname: "Royal-32",
  carCompany: "BMW",
  inventedCountry: "Russia",
  owner: "BMW PVT LTD.",
  price: "56 lacs",
};

const car=new carModel(carDocument)
car.save((err,data)=>{
  if(err) throw err
  console.log(data);
}) */

// Create Methods for each mongoDB operation

// Insert single documents

const insertSingleCar = () => {
  const carDocument = {
    carmodelno: "0077A#",
    carname: "Benz",
    carCompany: "Marc",
    inventedCountry: "USA",
    owner: "marc PVT LTD.",
    price: "70 lacs",
  };

  const car = new carModel(carDocument);
  car.save((err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

//insert Multiple documents

const insertMultipleCars = () => {
  const docs = [
    {
      carmodelno: "AMD252#",
      carname: "safari",
      carCompany: "Tata",
      inventedCountry: "India",
      owner: "Ratan Tata",
      price: "25 lacs",
    },
    {
      carmodelno: "145hh",
      carname: "Bolero",
      carCompany: "Mahindra",
      inventedCountry: "India",
      owner: "Mahindra Group.",
      price: "20 lacs",
    },
    {
      carmodelno: "00256",
      carname: "Verna",
      carCompany: "hyundai",
      inventedCountry: "japan",
      owner: "Hyundai PVT LTD.",
      price: "70 lacs",
    },
    {
      carmodelno: "55262#",
      carname: "rang154",
      carCompany: "RangRover",
      inventedCountry: "India",
      owner: "Ratan Tata",
      price: "70 lacs",
    },
  ];
  carModel.collection.insertMany(docs, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

// get single doccument

// 1st Way
const getsingleCar = (id) => {
  // carModel.findOne({}, { owner: 0 }, (err, data) => {
  //   if (err) throw err;
  //   console.log(data);
  // });

  // 2nd Way
  // carModel
  //   .findOne({ owner: "Hyundai PVT LTD." }, { carname: 0 })
  //   .exec((err, data) => {
  //     if (err) throw err;
  //     console.log(data);
  //   });

  //using _id
  carModel.findOne({ _id: id }, { carname: 0 }).exec((err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

// get Multiple Documents
const getMultipleCars = () => {
  carModel.find({ owner: "Ratan Tata" }, {}).exec((err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

// get All Documents
const getAllCars = () => {
  carModel.find({}).exec((err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

// update single document
const updateSingleCar = (id) => {
  carModel.updateOne({ _id: id }, { buyer: 1000 }).exec((err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

// delete single document
const deleteSingleCar = () => {
  carModel.deleteOne({ carCompany: "hyundai" }).exec((err, data) => {
    if (err) throw err
    console.log(data);
  })
}




// insertSingleCar();
// insertMultipleCars();
// getsingleCar();
// getsingleCar("62b2164e74d186840b8572fc");
// getMultipleCars();
// getAllCars();
// updateSingleCar("62b20cd53b59eedb229b7587");
deleteSingleCar(); 
