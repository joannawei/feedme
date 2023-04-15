module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories',{
        cateName: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {timestamps: true})
    return Categories
}