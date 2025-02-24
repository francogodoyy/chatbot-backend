"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const dotenv = require("dotenv");
dotenv.config();
let OpenAIService = class OpenAIService {
    httpService;
    openaiUrl = 'https://openrouter.ai/api/v1/chat/completions';
    constructor(httpService) {
        this.httpService = httpService;
    }
    async sendMessage(message) {
        try {
            const apiKey = process.env.OPENAI_API_KEY;
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(this.openaiUrl, {
                model: 'openai/gpt-3.5-turbo',
                messages: [{ role: 'user', content: message }],
            }, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            }));
            return response.data.choices[0].message.content;
        }
        catch (error) {
            console.error('Error en OpenRouter:', error.response?.data || error.message);
            return 'Lo siento, ocurrió un error al procesar tu solicitud.';
        }
    }
};
exports.OpenAIService = OpenAIService;
exports.OpenAIService = OpenAIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], OpenAIService);
//# sourceMappingURL=openai.service.js.map