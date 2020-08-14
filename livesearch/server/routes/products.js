const productsRoutes = (app) => {
    const {dataIndex, searchProducts} = require("../data/dataIndex");
  
    //defining endpoints

    //Get filtered products list that match client's search
    app.get("/products", (req, res) => {
        const query  = req.query;
        if (!query.q) {
            res.status(422).json({
                error: true,
                data: "Missing required parameter: q"
            });
            return;
        }

        try {
            //filter data set with a simple full text search over name and about
             let results = searchProducts(query.q);
             let total = results.length;
             
             //if limit param is present, apply a limit to query results 
             let limit = parseInt(query.limit);
             if( !isNaN(limit) ) {
                 results = results.slice(0, limit);
             }

             res.json({ success: true, total_results: total, data: results });
        } catch (err) {
            res.status(500).json({ success: false, error: "We sorry. An error ocurred."});
        }
    });
  };
  
  module.exports = productsRoutes;