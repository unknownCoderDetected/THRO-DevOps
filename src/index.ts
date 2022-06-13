import "reflect-metadata"
import * as express from "express";
import learnExpenseRouter from "./router/learnExpenseRouter";

const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/learnExpense', learnExpenseRouter);

app.use(function(err, req, res, next) {
    res.status(404).send(" route not found");
});

app.listen(5001, async () => {
    console.log(`Server is running http://localhost:${5001}`);
});

export default app
