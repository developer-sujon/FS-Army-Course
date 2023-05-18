//Internal Lib Import
const app = require("./app");
const port = process.env.PORT || 6200;

app.listen(port, () => console.log(`Server is listen on port ${port}`));
