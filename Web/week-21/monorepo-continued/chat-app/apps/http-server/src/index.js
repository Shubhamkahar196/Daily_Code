import express from 'express';
const app = express();
app.get("/signup", (req, res) => {
    res.send('Hellow world');
});
app.get("/signin", (req, res) => {
    res.send('Hellow world signin');
});
app.get("/chat", (req, res) => {
    res.send("Hello chat");
});
app.listen(3002, () => {
    console.log("Http server is running");
});
//# sourceMappingURL=index.js.map