const fs = require("fs-extra");
const readline = require("readline");
const totp = require("totp-generator");
const login = require("lawerpr0ject-api");
login({email: "kimngan20081111@gmail.com", password: "Hoquoctuan88"}, (err, api) => {
    if(err) return console.error(err);
    const json = JSON.stringify(api.getAppState());
    fs.writeFileSync(`./${config.APPSTATEPATH}`, json);
    console.log("Đã ghi xong appstate!");
    process.exit(0);
});