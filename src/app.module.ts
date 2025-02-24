import { Module } from '@nestjs/common';
import { ChatbotModule } from './chatbot/chatbot.module';
import { OpenAIModule } from './openai/openai.module';

@Module({
  imports: [ChatbotModule, OpenAIModule],
})
export class AppModule {}
