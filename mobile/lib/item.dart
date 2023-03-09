import 'package:openapi/openapi.dart';

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
