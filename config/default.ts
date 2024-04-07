export default {
   port: 6969,
   dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uy8mxf6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
   env: "development"
} 