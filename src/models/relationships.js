import User from './user.js';
import Property from './property.js'
import Category from './category.js'
import Price  from './price.js';

Property.belongsTo(User,{
    foreignKey: 'user_ID'
}) //ForeingKey

// En el modelo Property
Property.belongsTo(Category, {
    foreignKey: 'category_ID'
});

// En el modelo Category
Category.hasOne(Property, {
    foreignKey: 'category_ID'
});

// En el modelo Property
Property.belongsTo(Category, {
    foreignKey: 'category_ID'
});

// En el modelo Category
Category.hasOne(Property, {
    foreignKey: 'category_ID'
});


export{User, Property, Category, Price}