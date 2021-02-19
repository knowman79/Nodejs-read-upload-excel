module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "cheese30",
    port: "5433",
    DB: "excel",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };