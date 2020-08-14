//Creating a data index for full text search with lunr.js, a simple lightweight library for offline and in-browser search.
const products = require("./data");
const lunr = require("lunr");

const dataIndex = lunr(function () {
  /**
   * Setting up lunr...
   * Name field matches will be more important than tags and tags will be more important 
   * than about field matches and results will be higher in our list
   */
   
  this.field("name");
  this.field("tags");
  this.field("about");
  this.field("isActive");
  this.ref("_id");

  products.forEach(function (product) {
    if(product.isActive === "true") {
      this.add({
        '_id': product._id,
        'name': product.name,
        'about': product.about,
        'isActive': product.isActive,
        'tags': product.tags.join(' ')
      });
    }
  }, this);

});

/**
 * Function to search over the products.
 * Receives a query string and returns an array with matching products or empty
 */
const searchProducts = (query) => {

  const matchingProducts = dataIndex.search(`*${query}*`);

  return matchingProducts.map(matchingProduct => {
    return products.find(product => (matchingProduct.ref === product._id));
  });

};

module.exports = {
    dataIndex,
    searchProducts
};
