**ローカル開発環境の起動**

```bash
docker compose up
```

**DB スキーマの反映**

prisma.scheme から client を生成する
ホスト側でコードを触る場合はホストでも実行する必要あり

```bash
docker compose exec nest yarn prisma generate
```

api/prisma/schema.prisma の内容を DB に反映する（開発用）

```bash
docker compose exec nest yarn prisma db push
```

api/prisma/schema.prisma の内容を DB に反映する（マイグレーション）

```bash
docker compose exec nest yarn prisma migrate dev --name <任意のマイグレーション名>
```
