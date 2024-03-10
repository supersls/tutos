Java CompletableFuture is a class introduced in Java 8 to represent a future result of an asynchronous computation. It provides a way to write non-blocking asynchronous code in a more readable and maintainable way. Here are some examples of using CompletableFuture in Java:

### 1. Basic CompletableFuture Example:

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Main {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        CompletableFuture<String> completableFuture = new CompletableFuture<>();

        // Asynchronous computation
        new Thread(() -> {
            try {
                Thread.sleep(2000);
                completableFuture.complete("Future's Result");
            } catch (InterruptedException e) {
                completableFuture.completeExceptionally(e);
            }
        }).start();

        // Get the result of the computation
        String result = completableFuture.get();
        System.out.println("Result: " + result);
    }
}
```

### 2. Handling CompletableFuture with Callbacks:

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Main {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        CompletableFuture.supplyAsync(() -> "Hello")
                .thenApply(s -> s + " World")
                .thenAccept(System.out::println)
                .get();
    }
}
```

### 3. Combining CompletableFutures:

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Main {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "Hello");
        CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "World");

        CompletableFuture<String> combinedFuture = future1.thenCombine(future2, (result1, result2) -> result1 + " " + result2);

        System.out.println(combinedFuture.get());
    }
}
```

### 4. Handling Errors with Exceptionally:

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Main {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        CompletableFuture<String> completableFuture = new CompletableFuture<>();

        completableFuture.completeExceptionally(new RuntimeException("Calculation failed"));

        // Handle exception using exceptionally
        completableFuture.exceptionally(ex -> "Exception occurred: " + ex.getMessage())
                .thenAccept(System.out::println);
    }
}
```

### 5. Handling Timeouts:

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

public class Main {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                TimeUnit.SECONDS.sleep(2);
            } catch (InterruptedException e) {
                throw new IllegalStateException(e);
            }
            return "Result";
        });

        // Timeout after 1 second
        String result = future.orTimeout(1, TimeUnit.SECONDS).exceptionally(ex -> "Timeout occurred").get();
        System.out.println(result);
    }
}
```

These examples demonstrate the basic usage of CompletableFuture in Java for asynchronous programming, handling callbacks, combining futures, handling exceptions, and dealing with timeouts. CompletableFuture is a powerful tool for writing efficient and responsive asynchronous code in Java applications.