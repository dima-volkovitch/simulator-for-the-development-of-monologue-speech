const fs = require("fs");

const loadedDocs = {};

const loader = {

    load(path, options) {
        if (loadedDocs[path] === undefined) {
            if(fs.existsSync(path)){
                let markup = fs.readFileSync(path, options);
                loadedDocs[path] = markup;
                return markup;
            } else {
                return undefined
            }
        }

        return loadedDocs[path];
    }
};

module.exports.loadedDocs = loadedDocs;
module.exports.loader = loader;

