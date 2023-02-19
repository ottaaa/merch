// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'response_item_dto.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ResponseItemDto extends ResponseItemDto {
  @override
  final ResponseItemDtoItem item;

  factory _$ResponseItemDto([void Function(ResponseItemDtoBuilder)? updates]) =>
      (new ResponseItemDtoBuilder()..update(updates))._build();

  _$ResponseItemDto._({required this.item}) : super._() {
    BuiltValueNullFieldError.checkNotNull(item, r'ResponseItemDto', 'item');
  }

  @override
  ResponseItemDto rebuild(void Function(ResponseItemDtoBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ResponseItemDtoBuilder toBuilder() =>
      new ResponseItemDtoBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ResponseItemDto && item == other.item;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, item.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'ResponseItemDto')..add('item', item))
        .toString();
  }
}

class ResponseItemDtoBuilder
    implements Builder<ResponseItemDto, ResponseItemDtoBuilder> {
  _$ResponseItemDto? _$v;

  ResponseItemDtoItemBuilder? _item;
  ResponseItemDtoItemBuilder get item =>
      _$this._item ??= new ResponseItemDtoItemBuilder();
  set item(ResponseItemDtoItemBuilder? item) => _$this._item = item;

  ResponseItemDtoBuilder() {
    ResponseItemDto._defaults(this);
  }

  ResponseItemDtoBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _item = $v.item.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ResponseItemDto other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ResponseItemDto;
  }

  @override
  void update(void Function(ResponseItemDtoBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ResponseItemDto build() => _build();

  _$ResponseItemDto _build() {
    _$ResponseItemDto _$result;
    try {
      _$result = _$v ?? new _$ResponseItemDto._(item: item.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'item';
        item.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'ResponseItemDto', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
