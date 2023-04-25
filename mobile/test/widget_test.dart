import 'package:flutter_test/flutter_test.dart';

import 'package:mobile/main.dart';

void main() {
  testWidgets('起動時にショップ画面が表示される', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());

    expect(find.text('ショップ画面'), findsOneWidget);
  });
}
