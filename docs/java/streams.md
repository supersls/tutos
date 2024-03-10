Java Stream API, introduced in Java 8, provides a functional approach to processing collections of elements. It enables you to express complex data processing operations using a fluent and declarative syntax. Here are some examples demonstrating the use of Java Stream API:

### 1. Filtering Elements:

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob", "Charlie", "David");

        List<String> filteredNames = names.stream()
                                         .filter(name -> name.startsWith("A"))
                                         .collect(Collectors.toList());

        System.out.println(filteredNames); // Output: [Alice]
    }
}
```

### 2. Mapping Elements:

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob", "Charlie", "David");

        List<String> upperCaseNames = names.stream()
                                          .map(String::toUpperCase)
                                          .collect(Collectors.toList());

        System.out.println(upperCaseNames); // Output: [JOHN, ALICE, BOB, CHARLIE, DAVID]
    }
}
```

### 3. Sorting Elements:

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob", "Charlie", "David");

        List<String> sortedNames = names.stream()
                                       .sorted()
                                       .collect(Collectors.toList());

        System.out.println(sortedNames); // Output: [Alice, Bob, Charlie, David, John]
    }
}
```

### 4. Reducing Elements:

```java
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        Optional<Integer> sum = numbers.stream()
                                       .reduce((a, b) -> a + b);

        sum.ifPresent(System.out::println); // Output: 15
    }
}
```

### 5. Stream Pipeline:

```java
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob", "Charlie", "David");

        long count = names.stream()
                         .filter(name -> name.length() > 4)
                         .map(String::toUpperCase)
                         .sorted()
                         .count();

        System.out.println(count); // Output: 3
    }
}
```

These examples showcase some of the basic functionalities provided by the Java Stream API, such as filtering, mapping, sorting, reducing, and creating stream pipelines. The Stream API simplifies the processing of collections by providing a fluent and concise way to express data manipulation operations.