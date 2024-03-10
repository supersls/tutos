Certainly! Below is a basic example of using Spring Data JDBC, formatted in Markdown:

```java
### Spring Data JDBC Example

#### Entity Class: Product

```java
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("products")
public class Product {
    @Id
    private Long id;
    private String name;
    private double price;

    // Constructors, getters, and setters
}
```

#### Repository Interface: ProductRepository

```java
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
    @Query("SELECT * FROM products WHERE price < :maxPrice")
    List<Product> findProductsCheaperThan(double maxPrice);
}
```

#### Service Class: ProductService

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findProductsCheaperThan(double maxPrice) {
        return productRepository.findProductsCheaperThan(maxPrice);
    }

    // Other service methods
}
```

#### Controller Class: ProductController

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/cheaper-than/{maxPrice}")
    public List<Product> findProductsCheaperThan(@PathVariable double maxPrice) {
        return productService.findProductsCheaperThan(maxPrice);
    }

    // Other controller methods
}
```

In this example, we have an entity class `Product`, a repository interface `ProductRepository`, a service class `ProductService`, and a controller class `ProductController` using Spring Data JDBC to manage `Product` entities.

```

This Markdown document explains the basic components of a Spring Data JDBC application, including entity definition, repository interface, service, and controller layers.
```
