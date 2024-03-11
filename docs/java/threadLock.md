Sure, let's create a simple Java example that demonstrates thread locking using the `synchronized` keyword.

Consider a scenario where two threads are trying to access and modify a shared resource concurrently. Without proper synchronization, this could lead to data inconsistency or race conditions. We can use thread locks to ensure that only one thread can access the shared resource at a time.

Here's a simple example:

```java
public class ThreadLockExample {
    private int counter = 0;

    public synchronized void increment() {
        counter++;
    }

    public synchronized void decrement() {
        counter--;
    }

    public int getCounter() {
        return counter;
    }

    public static void main(String[] args) {
        ThreadLockExample example = new ThreadLockExample();

        // Create two threads to increment and decrement the counter
        Thread incrementThread = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                example.increment();
            }
        });

        Thread decrementThread = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                example.decrement();
            }
        });

        // Start the threads
        incrementThread.start();
        decrementThread.start();

        // Wait for the threads to complete
        try {
            incrementThread.join();
            decrementThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Print the final counter value
        System.out.println("Final counter value: " + example.getCounter());
    }
}
```

In this example:

- We have a `ThreadLockExample` class with a counter variable.
- The `increment()` and `decrement()` methods are synchronized using the `synchronized` keyword. This ensures that only one thread can execute these methods at a time.
- We create two threads: one for incrementing the counter and another for decrementing it.
- Both threads access the shared `counter` variable.
- We start the threads and wait for them to complete using the `join()` method.
- Finally, we print the final value of the counter.

By synchronizing the `increment()` and `decrement()` methods, we ensure that the counter is modified atomically, and we avoid data inconsistency issues that could occur if multiple threads were to access and modify the counter concurrently without synchronization.
