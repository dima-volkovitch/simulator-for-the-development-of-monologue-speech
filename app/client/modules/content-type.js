const CONTENT_TYPE = "Content-Type";

const fileTypes = ["html", "css", "ico"];
const contentTypes = {
    "html" : "text/html",
    "css" : "text/css",
    "ico": "image/x-icon"
};

module.exports.CONTENT_TYPE = CONTENT_TYPE;
module.exports.getHeaderValue = (requestUrl) => {
    for(let elem of fileTypes) {
        if(requestUrl.includes(elem)) {
            return contentTypes[elem];
        }
    }
    return null;
};