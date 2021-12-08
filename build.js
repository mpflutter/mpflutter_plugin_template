const { execSync } = require("child_process");
const { readdirSync } = require("fs");

execSync('tsc', { cwd: "./" });
readdirSync('dist').forEach(it => {
    execSync(`browserify main.js > ./bundle.js && uglifyjs ./bundle.js -m > ./bundle.min.js`, {cwd: `dist/${it}`})
});
