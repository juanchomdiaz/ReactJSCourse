//loading products routes
const productsRoutes = require("./products");


const appRouter = (app) => {

    //default route
    app.get("/", (req, res) => {
        res.send("Please, use a valid endpoint. Check docs for more info.");
    });
    
      // product route
      productsRoutes(app);
};

module.exports = appRouter;