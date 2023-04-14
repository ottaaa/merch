import 'package:flutter/material.dart';
import 'package:openapi/openapi.dart';


// region TODO: ↑repository層を作っていい感じにしたい

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
  String _text = '';

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
      endDrawer: Drawer(
        child: ListView(
          children: [
            ListTile(
              title: Text('item1'),
              onTap: () {},
            ),
            ListTile(
              title: Text('item2'),
              onTap: () {},
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
