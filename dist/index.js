"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const console_1 = require("console");
const Router_1 = __importDefault(require("./routes/Router"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", Router_1.default);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    (0, console_1.log)(`Server is running on port ${PORT}`);
});
