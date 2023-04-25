import 'package:flutter/material.dart';
import 'package:mobile/page/common/draw_bar.dart';
import 'package:openapi/openapi.dart';

// region TODO: ↓APIアクセスはrepository層を作っていい感じにしたい

// ベースとなるAPIクライアント生成
var client = Openapi(basePathOverride: "http://localhost:3000");
var api = client.getItemsApi();

Future<String> itemApiCall() async {
  final res = await api.itemsControllerFindAll();
  // print(res.statusCode);
  // print(res.data);

  String items = '';
  for (final i in res.data!.items) {
    items += i.name;
    items += "\n";
  }

  return items;
}

// endregion

class ShopPage extends StatefulWidget {
  const ShopPage({super.key, required this.title});

  final String title;

  @override
  State<ShopPage> createState() => _ShopPageState();
}

class _ShopPageState extends State<ShopPage> {
  String _text = 'ショップ画面';

  Future<void> _incrementCounter() async {
    final res = await itemApiCall();

    setState(() {
      _text = res;
    });
  }

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
      endDrawer: const DrawBar(omitPageName: 'ショップ'),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
