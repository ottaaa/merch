```mermaid
erDiagram

        Role {
            USER USER
ADMIN ADMIN
        }
    
  User {
    Int id PK 
    String email  
    String name  
    String passwordDigest  
    }
  

  Shop {
    Int id PK 
    }
  

  Seller {
    Role role  
    Int userId PK 
    Int shopId PK 
    }
  

  Item {
    Int id PK 
    String name  
    String description  
    String image  
    Int shopId  
    DateTime createdAt  
    DateTime updatedAt  
    }
  

  Category {
    Int id PK 
    String category  
    Int price  
    Int stock  
    Int itemId  
    }
  

  Sale {
    Int id PK 
    DateTime soldAt  
    Int shopId  
    }
  

  SaleDetail {
    Int id PK 
    Int quantity  
    String itemName  
    String itemCategory  
    Int itemPrice  
    Int saleId  
    }
  
    Seller o|--|| Role : "enum:role"
    Seller o{--|| User : "user"
    Seller o{--|| Shop : "shop"
    Item o{--|| Shop : "shop"
    Category o{--|| Item : "item"
    Sale o{--|| Shop : "shop"
    SaleDetail o{--|| Sale : "sale"
```
