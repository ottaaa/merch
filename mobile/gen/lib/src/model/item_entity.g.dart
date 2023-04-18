// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'item_entity.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

abstract class ItemEntityBuilder {
  void replace(ItemEntity other);
  void update(void Function(ItemEntityBuilder) updates);
  num? get id;
  set id(num? id);

  String? get name;
  set name(String? name);

  num? get price;
  set price(num? price);

  DateTime? get createdAt;
  set createdAt(DateTime? createdAt);

  DateTime? get updatedAt;
  set updatedAt(DateTime? updatedAt);
}

class _$$ItemEntity extends $ItemEntity {
  @override
  final num id;
  @override
  final String name;
  @override
  final num price;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;

  factory _$$ItemEntity([void Function($ItemEntityBuilder)? updates]) =>
      (new $ItemEntityBuilder()..update(updates))._build();

  _$$ItemEntity._(
      {required this.id,
      required this.name,
      required this.price,
      required this.createdAt,
      required this.updatedAt})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'$ItemEntity', 'id');
    BuiltValueNullFieldError.checkNotNull(name, r'$ItemEntity', 'name');
    BuiltValueNullFieldError.checkNotNull(price, r'$ItemEntity', 'price');
    BuiltValueNullFieldError.checkNotNull(
        createdAt, r'$ItemEntity', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(
        updatedAt, r'$ItemEntity', 'updatedAt');
  }

  @override
  $ItemEntity rebuild(void Function($ItemEntityBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  $ItemEntityBuilder toBuilder() => new $ItemEntityBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is $ItemEntity &&
        id == other.id &&
        name == other.name &&
        price == other.price &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, price.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'$ItemEntity')
          ..add('id', id)
          ..add('name', name)
          ..add('price', price)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt))
        .toString();
  }
}

class $ItemEntityBuilder
    implements Builder<$ItemEntity, $ItemEntityBuilder>, ItemEntityBuilder {
  _$$ItemEntity? _$v;

  num? _id;
  num? get id => _$this._id;
  set id(covariant num? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(covariant String? name) => _$this._name = name;

  num? _price;
  num? get price => _$this._price;
  set price(covariant num? price) => _$this._price = price;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(covariant DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(covariant DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  $ItemEntityBuilder() {
    $ItemEntity._defaults(this);
  }

  $ItemEntityBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _price = $v.price;
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(covariant $ItemEntity other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$$ItemEntity;
  }

  @override
  void update(void Function($ItemEntityBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  $ItemEntity build() => _build();

  _$$ItemEntity _build() {
    final _$result = _$v ??
        new _$$ItemEntity._(
            id: BuiltValueNullFieldError.checkNotNull(id, r'$ItemEntity', 'id'),
            name: BuiltValueNullFieldError.checkNotNull(
                name, r'$ItemEntity', 'name'),
            price: BuiltValueNullFieldError.checkNotNull(
                price, r'$ItemEntity', 'price'),
            createdAt: BuiltValueNullFieldError.checkNotNull(
                createdAt, r'$ItemEntity', 'createdAt'),
            updatedAt: BuiltValueNullFieldError.checkNotNull(
                updatedAt, r'$ItemEntity', 'updatedAt'));
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
