import 'package:test/test.dart';
import 'package:openapi/openapi.dart';


/// tests for ItemsApi
void main() {
  final instance = Openapi().getItemsApi();

  group(ItemsApi, () {
    //Future<ResponseItemsDto> itemsControllerFindAll() async
    test('test itemsControllerFindAll', () async {
      // TODO
    });

    //Future<ResponseItemDto> itemsControllerMakeItem(CreateItemDto createItemDto) async
    test('test itemsControllerMakeItem', () async {
      // TODO
    });

  });
}
