"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class UserRepository {
    // private baseUrl: string;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.baseUrl = baseUrl;
    }
    ;
    async getUsers() {
        try {
            return await axios_1.default.get(this.baseUrl);
        }
        catch (error) {
            throw new Error("Hubo un error" + error);
        }
    }
}
;
exports.default = UserRepository;
