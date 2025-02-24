import { HttpService } from '@nestjs/axios';
export declare class OpenAIService {
    private readonly httpService;
    private readonly openaiUrl;
    constructor(httpService: HttpService);
    sendMessage(message: string): Promise<string>;
}
