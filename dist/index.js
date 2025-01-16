"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/project")
    .then(() => {
    console.log("DB connected");
})
    .catch((error) => {
    console.error("Connection error:", error);
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("body", req.body);
    const { username, password } = req.body;
    //const password = req.body.password;
    console.log(req.body);
    yield db_1.UserModel.create({
        username, password
    });
    res.json({
        message: "User singed UP"
    });
}));
app.post("/api/v1/signin", (req, res) => {
});
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/content", (req, res) => {
});
app.get("/api/v1/signup", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.listen(4100);
