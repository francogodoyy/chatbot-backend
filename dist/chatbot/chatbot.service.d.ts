import { OpenAIService } from '../openai/openai.service';
export declare class ChatbotService {
    private readonly openAIService;
    constructor(openAIService: OpenAIService);
    getResponse(message: string): Promise<string>;
}
