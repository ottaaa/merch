import 'package:flutter/material.dart';
import 'common/draw_bar.dart';

class MerchPage extends StatefulWidget {
  const MerchPage({super.key, required this.title});

  final String title;

  @override
  State<MerchPage> createState() => _MerchPageState();
}

class _MerchPageState extends State<MerchPage> {
  String _text = 'マーチの画面';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_text',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      endDrawer: const DrawBar(omitPageName: '物販を登録'),
    );
  }
}
