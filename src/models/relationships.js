import User from './user.js';
import Property from './property.js'
import Category from './category.js'
import Price  from './price.js';

Property.belongsTo(User,{
    foreingKey: 'user_ID'
}) //ForeingKey

Price.hasOne(Property, {
    foreingKey: 'price_ID'
})

Category.hasOne(Property, {
    foreingKey:'category_ID'
})

export{User, Property}