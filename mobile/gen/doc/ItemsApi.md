# openapi.api.ItemsApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemsControllerFindAll**](ItemsApi.md#itemscontrollerfindall) | **GET** /api/items | 
[**itemsControllerMakeItem**](ItemsApi.md#itemscontrollermakeitem) | **POST** /api/items | 


# **itemsControllerFindAll**
> ResponseItemsDto itemsControllerFindAll()



### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getItemsApi();

try {
    final response = api.itemsControllerFindAll();
    print(response);
} catch on DioError (e) {
    print('Exception when calling ItemsApi->itemsControllerFindAll: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseItemsDto**](ResponseItemsDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **itemsControllerMakeItem**
> ResponseItemDto itemsControllerMakeItem(createItemDto)



### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getItemsApi();
final CreateItemDto createItemDto = ; // CreateItemDto | 

try {
    final response = api.itemsControllerMakeItem(createItemDto);
    print(response);
} catch on DioError (e) {
    print('Exception when calling ItemsApi->itemsControllerMakeItem: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createItemDto** | [**CreateItemDto**](CreateItemDto.md)|  | 

### Return type

[**ResponseItemDto**](ResponseItemDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

