// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'response_item_dto_item.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ResponseItemDtoItem extends ResponseItemDtoItem {
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

  factory _$ResponseItemDtoItem(
          [void Function(ResponseItemDtoItemBuilder)? updates]) =>
      (new ResponseItemDtoItemBuilder()..update(updates))._build();

  _$ResponseItemDtoItem._(
      {required this.id,
      required this.name,
      required this.price,
      required this.createdAt,
      required this.updatedAt})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'ResponseItemDtoItem', 'id');
    BuiltValueNullFieldError.checkNotNull(name, r'ResponseItemDtoItem', 'name');
    BuiltValueNullFieldError.checkNotNull(
        price, r'ResponseItemDtoItem', 'price');
    BuiltValueNullFieldError.checkNotNull(
        createdAt, r'ResponseItemDtoItem', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(
        updatedAt, r'ResponseItemDtoItem', 'updatedAt');
  }

  @override
  ResponseItemDtoItem rebuild(
          void Function(ResponseItemDtoItemBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ResponseItemDtoItemBuilder toBuilder() =>
      new ResponseItemDtoItemBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ResponseItemDtoItem &&
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
    return (newBuiltValueToStringHelper(r'ResponseItemDtoItem')
          ..add('id', id)
          ..add('name', name)
          ..add('price', price)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt))
        .toString();
  }
}

class ResponseItemDtoItemBuilder
    implements
        Builder<ResponseItemDtoItem, ResponseItemDtoItemBuilder>,
        ItemEntityBuilder {
  _$ResponseItemDtoItem? _$v;

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

  ResponseItemDtoItemBuilder() {
    ResponseItemDtoItem._defaults(this);
  }

  ResponseItemDtoItemBuilder get _$this {
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
  void replace(covariant ResponseItemDtoItem other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ResponseItemDtoItem;
  }

  @override
  void update(void Function(ResponseItemDtoItemBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ResponseItemDtoItem build() => _build();

  _$ResponseItemDtoItem _build() {
    final _$result = _$v ??
        new _$ResponseItemDtoItem._(
            id: BuiltValueNullFieldError.checkNotNull(
                id, r'ResponseItemDtoItem', 'id'),
            name: BuiltValueNullFieldError.checkNotNull(
                name, r'ResponseItemDtoItem', 'name'),
            price: BuiltValueNullFieldError.checkNotNull(
                price, r'ResponseItemDtoItem', 'price'),
            createdAt: BuiltValueNullFieldError.checkNotNull(
                createdAt, r'ResponseItemDtoItem', 'createdAt'),
            updatedAt: BuiltValueNullFieldError.checkNotNull(
                updatedAt, r'ResponseItemDtoItem', 'updatedAt'));
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
