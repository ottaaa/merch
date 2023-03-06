# ios のシミュレーターを起動
open -a Simulator &&
# 起動した ios のシミュレーターのIDを取得しアプリを起動
flutter devices | grep ios | awk -F '•' '{print $2}' | xargs -I{}  flutter run --device-id {}
