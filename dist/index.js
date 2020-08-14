"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const run = async () => {
    console.log(core_1.default.getInput('registry'), core_1.default.getInput('always-auth'));
};
try {
    run();
}
catch (error) {
    core_1.default.setFailed(error.message);
}
