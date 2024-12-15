const { Sequelize, DataTypes } = require('sequelize');

class ORM {
    constructor() {
        this.sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: './database.sqlite'  // ใช้ฐานข้อมูลที่มีอยู่แล้ว
        });
    }

    async initDB() {
        try {
            // เชื่อมต่อกับฐานข้อมูล
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    // เชื่อมต่อ Model ที่มีอยู่แล้ว
    connectModel() {
        const Product = this.sequelize.define('Product', {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
        });
        return Product;
    }

    async syncDB() {
        await this.sequelize.sync({ alter: true });  // `alter: true` จะทำการปรับโครงสร้างฐานข้อมูลตามที่โมเดลใหม่กำหนด
        console.log('Database synchronized');
    }
}

(async () => {
    // const orm = new ORM();

    // await orm.initDB();
    // const Product = orm.connectModel();
    // await orm.syncDB();

    // // ใช้ Product model ในการสร้างข้อมูลใหม่
    // // await Product.create({ name: 'Laptop', price: 1500 });
    // // await Product.create({ name: 'Mouse', price: 500 });

    // // ดึงข้อมูลจากฐานข้อมูล
    // const products = await Product.findAll();
    // console.log('All Products:', products.map(p => p.toJSON()));
})();
