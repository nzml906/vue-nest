import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const cors = { cors: true };
  const app = await NestFactory.create(AppModule, cors);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
