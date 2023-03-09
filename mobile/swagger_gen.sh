# 1. swagger の定義からコードを自動生成する
docker compose --profile tools up &&

# 2. 自動生成したコードからさらに自動生成が必要なコードをbuild_runnerで生成

# 自動生成したコードがあるディレクトリに移動
cd ./gen &&
# 自動生成したコードが依存しているライブラリをインストール
flutter pub get &&
# 自動生成したコードからさらに自動生成
flutter pub run build_runner build

