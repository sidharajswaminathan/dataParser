"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class parseData {
    constructor() {
        this.parseUser = (text, obj, version) => {
            let curUser = [], splitBool = false, splitPoint = false;
            for (let a = 0; a < text.length; a++) {
                if (text[a + 1] === "0" || typeof text[a + 1] === "undefined") {
                    splitBool = true;
                }
                curUser.push(text[a]);
                if (splitBool && (text[a + 1] !== "0" || typeof text[a + 1] === "undefined")) {
                    splitBool = false;
                    splitPoint = true;
                }
                if (!splitBool && splitPoint) {
                    if (!obj.firstName) {
                        obj.firstName = (version == 'v1' ? curUser.join("") : curUser.join("").split("0").join(""));
                    }
                    else if (!obj.lastName) {
                        obj.lastName = (version == 'v1' ? curUser.join("") : curUser.join("").split("0").join(""));
                    }
                    else if (!obj.clientId) {
                        obj.clientId = (version == 'v1' ? curUser.join("") : this.addHypen(curUser.join(""), '-', 3));
                    }
                    curUser = [];
                    splitBool = false;
                    splitPoint = false;
                }
            }
            console.log(obj, "   obj");
            return obj;
        };
        this.addHypen = (content, symbol, placement) => {
            if (placement > content.length) {
                return content;
            }
            symbol = symbol || "";
            return content.slice(0, placement) + symbol + content.slice(placement);
        };
    }
}
exports.default = parseData;
/* console.log(addHypen("123456ee434",'-',3));
let userDetails = parseUser('sidharaj000JOHN0000MICHAEL0009994567',bArr);
console.log(userDetails); */
//# sourceMappingURL=parseQuery.js.map