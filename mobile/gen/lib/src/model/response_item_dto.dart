//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/response_item_dto_item.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'response_item_dto.g.dart';

/// ResponseItemDto
///
/// Properties:
/// * [item] 
@BuiltValue()
abstract class ResponseItemDto implements Built<ResponseItemDto, ResponseItemDtoBuilder> {
  @BuiltValueField(wireName: r'item')
  ResponseItemDtoItem get item;

  ResponseItemDto._();

  factory ResponseItemDto([void updates(ResponseItemDtoBuilder b)]) = _$ResponseItemDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(ResponseItemDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<ResponseItemDto> get serializer => _$ResponseItemDtoSerializer();
}

class _$ResponseItemDtoSerializer implements PrimitiveSerializer<ResponseItemDto> {
  @override
  final Iterable<Type> types = const [ResponseItemDto, _$ResponseItemDto];

  @override
  final String wireName = r'ResponseItemDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    ResponseItemDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'item';
    yield serializers.serialize(
      object.item,
      specifiedType: const FullType(ResponseItemDtoItem),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    ResponseItemDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required ResponseItemDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'item':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(ResponseItemDtoItem),
          ) as ResponseItemDtoItem;
          result.item.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  ResponseItemDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = ResponseItemDtoBuilder();
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

