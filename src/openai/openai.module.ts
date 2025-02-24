import { Module } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [OpenAIService],
  exports: [OpenAIService], // Exportamos para que pueda ser usado en otros módulos
})
export class OpenAIModule {}
