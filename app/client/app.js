const http = require("http");
const fs = require("fs");
const docLoader = require("./modules/doc-loader");
const contentTypes = require("./modules/content-type");

const contentTypeStr = "Content-Type";
const defaultPath = "public";
docLoader.loadedDocs[defaultPath + "/"] = fs.readFileSync(defaultPath + "/index.html", "utf8");

http.createServer((request, response) => {
    let contentType = contentTypes.getHeaderValue(request.url);
    if(contentType !== null) {
        response.setHeader(contentTypeStr, contentType);
    }

    response.end(docLoader.loader.load(defaultPath + request.url));

}).listen(3000, "127.0.0.1", () => {
    console.log("Сервер начал прослушивание запросов на порту 3000");
});