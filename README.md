

**ローカル開発環境の起動**

```bash
docker compose up 
```

**DB スキーマの反映**

api/prisma/schema.prisma の内容をDBに反映する

```bash
docker compose exec nest yarn prisma migrate dev --name init
```
