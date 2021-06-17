// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'user_id'
});

// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'user_id'
});

// Products belongToMany Tags (through ProductTag)



// Tags belongToMany Products (through ProductTag)



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
