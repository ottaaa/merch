// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'response_items_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ResponseItemsDto extends ResponseItemsDto {
  @override
  final BuiltList<ItemEntity> items;

  factory _$ResponseItemsDto(
          [void Function(ResponseItemsDtoBuilder)? updates]) =>
      (new ResponseItemsDtoBuilder()..update(updates))._build();

  _$ResponseItemsDto._({required this.items}) : super._() {
    BuiltValueNullFieldError.checkNotNull(items, r'ResponseItemsDto', 'items');
  }

  @override
  ResponseItemsDto rebuild(void Function(ResponseItemsDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ResponseItemsDtoBuilder toBuilder() =>
      new ResponseItemsDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ResponseItemsDto && items == other.items;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, items.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'ResponseItemsDto')
          ..add('items', items))
        .toString();
  }
}

class ResponseItemsDtoBuilder
    implements Builder<ResponseItemsDto, ResponseItemsDtoBuilder> {
  _$ResponseItemsDto? _$v;

  ListBuilder<ItemEntity>? _items;
  ListBuilder<ItemEntity> get items =>
      _$this._items ??= new ListBuilder<ItemEntity>();
  set items(ListBuilder<ItemEntity>? items) => _$this._items = items;

  ResponseItemsDtoBuilder() {
    ResponseItemsDto._defaults(this);
  }

  ResponseItemsDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _items = $v.items.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ResponseItemsDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ResponseItemsDto;
  }

  @override
  void update(void Function(ResponseItemsDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ResponseItemsDto build() => _build();

  _$ResponseItemsDto _build() {
    _$ResponseItemsDto _$result;
    try {
      _$result = _$v ?? new _$ResponseItemsDto._(items: items.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'items';
        items.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'ResponseItemsDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
