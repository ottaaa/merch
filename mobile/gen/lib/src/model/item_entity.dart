//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'item_entity.g.dart';

/// ItemEntity
///
/// Properties:
/// * [id] 
/// * [name] 
/// * [price] 
/// * [createdAt] 
/// * [updatedAt] 
@BuiltValue(instantiable: false)
abstract class ItemEntity  {
  @BuiltValueField(wireName: r'id')
  num get id;

  @BuiltValueField(wireName: r'name')
  String get name;

  @BuiltValueField(wireName: r'price')
  num get price;

  @BuiltValueField(wireName: r'createdAt')
  DateTime get createdAt;

  @BuiltValueField(wireName: r'updatedAt')
  DateTime get updatedAt;

  @BuiltValueSerializer(custom: true)
  static Serializer<ItemEntity> get serializer => _$ItemEntitySerializer();
}

class _$ItemEntitySerializer implements PrimitiveSerializer<ItemEntity> {
  @override
  final Iterable<Type> types = const [ItemEntity];

  @override
  final String wireName = r'ItemEntity';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    ItemEntity object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'id';
    yield serializers.serialize(
      object.id,
      specifiedType: const FullType(num),
    );
    yield r'name';
    yield serializers.serialize(
      object.name,
      specifiedType: const FullType(String),
    );
    yield r'price';
    yield serializers.serialize(
      object.price,
      specifiedType: const FullType(num),
    );
    yield r'createdAt';
    yield serializers.serialize(
      object.createdAt,
      specifiedType: const FullType(DateTime),
    );
    yield r'updatedAt';
    yield serializers.serialize(
      object.updatedAt,
      specifiedType: const FullType(DateTime),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    ItemEntity object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  @override
  ItemEntity deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return serializers.deserialize(serialized, specifiedType: FullType($ItemEntity)) as $ItemEntity;
  }
}

/// a concrete implementation of [ItemEntity], since [ItemEntity] is not instantiable
@BuiltValue(instantiable: true)
abstract class $ItemEntity implements ItemEntity, Built<$ItemEntity, $ItemEntityBuilder> {
  $ItemEntity._();

  factory $ItemEntity([void Function($ItemEntityBuilder)? updates]) = _$$ItemEntity;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults($ItemEntityBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<$ItemEntity> get serializer => _$$ItemEntitySerializer();
}

class _$$ItemEntitySerializer implements PrimitiveSerializer<$ItemEntity> {
  @override
  final Iterable<Type> types = const [$ItemEntity, _$$ItemEntity];

  @override
  final String wireName = r'$ItemEntity';

  @override
  Object serialize(
    Serializers serializers,
    $ItemEntity object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return serializers.serialize(object, specifiedType: FullType(ItemEntity))!;
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required ItemEntityBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.id = valueDes;
          break;
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.name = valueDes;
          break;
        case r'price':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.price = valueDes;
          break;
        case r'createdAt':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.createdAt = valueDes;
          break;
        case r'updatedAt':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.updatedAt = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  $ItemEntity deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = $ItemEntityBuilder();
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

