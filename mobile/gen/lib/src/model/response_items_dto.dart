//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/item_entity.dart';
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'response_items_dto.g.dart';

/// ResponseItemsDto
///
/// Properties:
/// * [items] 
@BuiltValue()
abstract class ResponseItemsDto implements Built<ResponseItemsDto, ResponseItemsDtoBuilder> {
  @BuiltValueField(wireName: r'items')
  BuiltList<ItemEntity> get items;

  ResponseItemsDto._();

  factory ResponseItemsDto([void updates(ResponseItemsDtoBuilder b)]) = _$ResponseItemsDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(ResponseItemsDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<ResponseItemsDto> get serializer => _$ResponseItemsDtoSerializer();
}

class _$ResponseItemsDtoSerializer implements PrimitiveSerializer<ResponseItemsDto> {
  @override
  final Iterable<Type> types = const [ResponseItemsDto, _$ResponseItemsDto];

  @override
  final String wireName = r'ResponseItemsDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    ResponseItemsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'items';
    yield serializers.serialize(
      object.items,
      specifiedType: const FullType(BuiltList, [FullType(ItemEntity)]),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    ResponseItemsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required ResponseItemsDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'items':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(ItemEntity)]),
          ) as BuiltList<ItemEntity>;
          result.items.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  ResponseItemsDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = ResponseItemsDtoBuilder();
    final serializedList = (serialized as Iterable<Object?>).toList();
    final unhandled = <Object?>[];
    _deserializeProperties(
      serializers,
      serialized,
      specifiedType: specifiedType,
      serializedList: serializedList,
      unhandled: unhandled,
      result: result,
    );
    return result.build();
  }
}

