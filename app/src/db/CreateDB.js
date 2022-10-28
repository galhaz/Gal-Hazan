var SQL = require("./dbSql");
const path = require("path");
const csv = require("csvtojson");

const CreateTableBabysitters = (req, res) => {
  const Q1 =
    "create table babysitters(email varchar(30) not null primary key,password int not null,firstName char(20),lastName char(20),gender char(1),birthday date,city char(20) not null,salary varchar(20))";
  SQL.query(Q1, (err, mySQLres) => {
    if (err) {
      console.log("error ", err);
      res.status(400).send({ message: "error in creating table babysitters" });
      return;
    }
    console.log("created table babysitters");
    res.send("table babysitters created");
    return;
  });
};

const CreateTableParents = (req, res) => {
  const Q1 =
    "create table parents(email varchar(30) not null primary key,password int not null,firstName char(20),lastName char(20),birthday date,city char(20) not null)";
  SQL.query(Q1, (err, mySQLres) => {
    if (err) {
      console.log("error ", err);
      res.status(400).send({ message: "error in creating table parents" });
      return;
    }
    console.log("created table parents");
    res.send("table parents created");
    return;
  });
};

const InsertDataIntoParents = (req, res) => {
  const query = "INSERT INTO parents SET ?";
  const csvFilePath = path.join(__dirname, "ParentsData.csv");
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      console.log("data: ", jsonObj);
      jsonObj.forEach((parent) => {
        SQL.query(query, parent, (err, mysqlres) => {
          if (err) {
            console.log("error in inserting data", err);
          }
          console.log("created row sucssefuly ");
        });
      });
    });
  res.send("data read");
};

const InsertDataIntoBabysitters = (req, res) => {
  const query = "INSERT INTO babysitters SET ?";
  const csvFilePath = path.join(__dirname, "BabysitterData.csv");
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      console.log("data: ", jsonObj);
      jsonObj.forEach((babysitter) => {
        SQL.query(query, babysitter, (err, mysqlres) => {
          if (err) {
            console.log("error in inserting data", err);
          }
          console.log("created row sucssefuly ");
        });
      });
    });
  res.send("data read");
};

const ShowTableParents = (req, res) => {
  var Q3 = "SELECT * FROM parents";
  SQL.query(Q3, (err, mySQLres) => {
    if (err) {
      console.log("error in showing table ", err);
      res.send("error in showing table ");
      return;
    }
    console.log("showing table");
    res.send(mySQLres);
    return;
  });
};

const ShowTableBabysitters = (req, res) => {
  var Q3 = "SELECT * FROM babysitters";
  SQL.query(Q3, (err, mySQLres) => {
    if (err) {
      console.log("error in showing table ", err);
      res.send("error in showing table ");
      return;
    }
    console.log("showing table");
    res.send(mySQLres);
    return;
  });
};

const DropTableParents = (req, res) => {
  var Q4 = "DROP TABLE parents";
  SQL.query(Q4, (err, mySQLres) => {
    if (err) {
      console.log("error in droping table ", err);
      res.status(400).send({ message: "error om dropping table" + err });
      return;
    }
    console.log("table drpped");
    res.send("table drpped");
    return;
  });
};

const DropTableBabysitters = (req, res) => {
  var Q4 = "DROP TABLE babysitters";
  SQL.query(Q4, (err, mySQLres) => {
    if (err) {
      console.log("error in droping table ", err);
      res.status(400).send({ message: "error om dropping table" + err });
      return;
    }
    console.log("table drpped");
    res.send("table drpped");
    return;
  });
};

module.exports = {
  CreateTableBabysitters,
  CreateTableParents,
  InsertDataIntoParents,
  InsertDataIntoBabysitters,
  ShowTableBabysitters,
  ShowTableParents,
  DropTableBabysitters,
  DropTableParents,
};
