const { application } = require("express");
const { query } = require("../db/dbSql.js");  
const sql = require("../db/dbSql.js");

const createNewParent = (req, res) => {
  if (!req.body) {
    res.status(404).send({
      message: "Content can not be empty",
    });
    return;
  }
  const query =
    "INSERT INTO parents(email,password,firstName,lastName,birthday,city) VALUES (?,?,?,?,?,?)";
  const newParent = [
    req.body.email,
    req.body.p1,
    req.body.fname,
    req.body.lname,
    req.body.birthday,
    req.body.city,
  ];
  console.log("this is new parent" + newParent);

  sql.query(query, newParent, (err, mysqlres) => {
    if (err) {
      console.log("error: ", err);
      return res.status(400).send({
        message: "error in creating new parent profile",
      });
    }
    return res.send({ message: "new parent profile has created successfuly" });
  });
};
const createNewBabysitter = (req, res) => {
  if (!req.body) {
    res.status(404).send({
      message: "Content can not be empty",
    });
    return;
  }
  const query =
    "INSERT INTO babysitters(email,password,firstName,lastName,gender,birthday,city,salary) VALUES (?,?,?,?,?,?,?,?)";
  const newBabysitter = [
    req.body.email,
    req.body.p1,
    req.body.fname,
    req.body.lname,
    req.body.gender,
    req.body.birthday,
    req.body.city,
    req.body.salary,
  ];
  console.log("this is new babysitter" + newBabysitter);

  sql.query(query, newBabysitter, (err, mysqlres) => {
    if (err) {
      console.log("error: ", err);
      return res.status(400).send({
        message: "error in creating new babysitter profile",
      });
    }
    return res.send({
      message: "new babysitter profile has created successfuly",
    });
  });
};
const logIn = (req, res) => {
  if (!req.body) {
    res.status(404).send({
      message: "Content can not be empty",
    });
    return;
  }
  const input = [req.body.email, req.body.password, req.body.type];
  if (req.body.type == "parent") {
    const myQuery = "select * from parents where email= ? and password= ? ";
    sql.query(myQuery, input, (err, sqlRes) => {
      if (err) {
        console.log("error: ", err);
        return res
          .status(400)
          .send({ message: "User does not exist in the system" });
      }
      const [parent] = sqlRes;
      return res.render("findYourMatch", {
        parent,
        message: `Welcome ${parent.firstName} ${parent.lastName} `,
      });
    });
  } else {
    const myQuery = "select * from babysitters where email= ? and password= ? ";
    sql.query(myQuery, input, (err, sqlRes) => {
      if (err) {
        console.log("error: ", err);
        return res
          .status(400)
          .send({ message: "User does not exist in the system" });
      }
      const [babysitter] = sqlRes;
      //return res.send({ message:"Welcome " +mysqlres[0].firstName+" "+mysqlres[0].lastName})
      return res.render("babysitterProfile", {babysitter, message: `Welcome ${babysitter.firstName} ${babysitter.lastName}` });
    });
  }
};
const getBabysitters = (req, res) => {
  sql.query("select * from babysitters", (err, babysitters) => {
    if (err) {
      return res.status(400).send({ message: "error" });
    }
    console.log({ babysitters });
    return res.render("myMatches", { babysitters });
  });
};
const getBabysitter = (req, res) => {
  const query = "select * from babysitters where email= ?";
  const email = req.params.email;
  sql.query(query, email, (err, babysitters) => {
    if (err) {
      return res.status(400).send({ message: "error" });
    }
    const [babysitter] = babysitters;
    console.log({ babysitter });
    return res.render("viewBabysitter", {
      babysitter,
      title: "View Babysitter",
    });
  });
};
const updateBabysitter = (req, res) => {
    if (!req.body) {
        return res.status(404).send({
        message: "Content can not be empty",
      });
    }
    const query ="update babysitters set salary= ? where email = ?"
    const data=[req.body.salary,req.body.email]
  
    sql.query(query, data, (err, mysqlres) => {
      if (err) {
        console.log("error: ", err);
        return res.status(400).send({
          message: "error in updating your profile",
        });
      }
      console.log(mysqlres.affectedRows)
      return res.send({ message: "new your profile has updated successfuly"

      });
    });
  };
const deleteBabysitter = (req, res) => {
    if (!req.body) {
        return res.status(404).send({
        message: "Content can not be empty",
      });
    }
    const query ="delete from babysitters where email = ?"
    const data=[req.body.email]
    sql.query(query, data, (err, mysqlres) => {
      if (err) {
        console.log("error: ", err);
        return res.status(400).send({
          message: "error in deleting your profile",
        });
      }
      console.log(mysqlres.affectedRows)
      return res.send({ message: "new your profile has deleted successfuly"

      });
    });
  };


const findNearLocation=(req,res)=>{
  if (!req.query) {
    res.status(404).send({
      message: "Content can not be empty",
    });
    return;
  }
  const input= req.query.city;
  const myQuery = "select * from babysitters where city= ?";
  sql.query(myQuery, input, (err, babysitters) => {
    if (err) {
      console.log("error: ", err);
      return res
        .status(400)
        .send({ message: "There are no babysitters in "+ input });
    }
    console.log(`this is object ${req.query}`)
    return res.render("myMatches", { babysitters });
  });
}





module.exports = {
  createNewParent,
  createNewBabysitter,
  logIn,
  getBabysitters,
  getBabysitter,
  updateBabysitter,
  deleteBabysitter,
  findNearLocation
};
