import Mongo from "mongoose"

Mongo.connect("mongodb+srv://developers:123456Aa@clusterprinc.crxbi6b.mongodb.net/developers3x1?retryWrites=true&w=majority")
.then(() => console.log("Connexion con Mongo exitosa"))
.catch((err) => console.log(err))