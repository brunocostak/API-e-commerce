"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.cryptoPassword = void 0;
const bcrypt = require("bcrypt");
const cryptoPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};
exports.cryptoPassword = cryptoPassword;
const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=cryptoPassword.js.map