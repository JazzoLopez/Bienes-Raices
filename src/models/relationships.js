import User from './user.js';
import Property from './property.js'
import Category from './category.js'
import Price  from './price.js';

Property.belongsTo(User,{
    foreignKey: 'user_ID'
}) //ForeingKey

Price.hasOne(Property, {
    foreignKey: 'price_ID'
})

Category.hasOne(Property, {
    foreignKey:'category_ID'
})

export{User, Property}