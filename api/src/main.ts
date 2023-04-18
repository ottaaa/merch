import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as fs from 'fs';

import { dump } from 'js-yaml';

import { AllExceptionsFilter } from './infra/filters/all-exceptions.filter';
import { HttpExceptionFilter } from './infra/filters/http-exception.filter';
import * as pack from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  const httpAdapter = app.get(HttpAdapterHost);

  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('物販(仮) Document')
    .setDescription('物販(仮) の API リファレンスです')
    .setVersion(pack.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  fs.writeFileSync('./swagger-spec.yaml', dump(document, {}));

  await app.listen(3000);
}
bootstrap();
