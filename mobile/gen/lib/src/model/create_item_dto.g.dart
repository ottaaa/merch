// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'create_item_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CreateItemDto extends CreateItemDto {
  @override
  final String name;
  @override
  final num price;

  factory _$CreateItemDto([void Function(CreateItemDtoBuilder)? updates]) =>
      (new CreateItemDtoBuilder()..update(updates))._build();

  _$CreateItemDto._({required this.name, required this.price}) : super._() {
    BuiltValueNullFieldError.checkNotNull(name, r'CreateItemDto', 'name');
    BuiltValueNullFieldError.checkNotNull(price, r'CreateItemDto', 'price');
  }

  @override
  CreateItemDto rebuild(void Function(CreateItemDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CreateItemDtoBuilder toBuilder() => new CreateItemDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is CreateItemDto && name == other.name && price == other.price;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, price.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'CreateItemDto')
          ..add('name', name)
          ..add('price', price))
        .toString();
  }
}

class CreateItemDtoBuilder
    implements Builder<CreateItemDto, CreateItemDtoBuilder> {
  _$CreateItemDto? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  num? _price;
  num? get price => _$this._price;
  set price(num? price) => _$this._price = price;

  CreateItemDtoBuilder() {
    CreateItemDto._defaults(this);
  }

  CreateItemDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _price = $v.price;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(CreateItemDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$CreateItemDto;
  }

  @override
  void update(void Function(CreateItemDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  CreateItemDto build() => _build();

  _$CreateItemDto _build() {
    final _$result = _$v ??
        new _$CreateItemDto._(
            name: BuiltValueNullFieldError.checkNotNull(
                name, r'CreateItemDto', 'name'),
            price: BuiltValueNullFieldError.checkNotNull(
                price, r'CreateItemDto', 'price'));
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
