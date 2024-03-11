A deadlock in Java occurs when two or more threads are blocked forever, each waiting for the other to release a resource that it holds. Here's a simple example of a deadlock scenario:

```java
public class DeadlockExample {
    private static Object lock1 = new Object();
    private static Object lock2 = new Object();

    public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1 acquired lock1");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("Thread 1 trying to acquire lock2");
                synchronized (lock2) {
                    System.out.println("Thread 1 acquired lock2");
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread 2 acquired lock2");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("Thread 2 trying to acquire lock1");
                synchronized (lock1) {
                    System.out.println("Thread 2 acquired lock1");
                }
            }
        });

        thread1.start();
        thread2.start();
    }
}
```

In this example:

- We have two threads, `thread1` and `thread2`, both of which acquire locks on `lock1` and `lock2`, but in different orders.
- `thread1` acquires `lock1` and then tries to acquire `lock2`.
- Meanwhile, `thread2` acquires `lock2` and then tries to acquire `lock1`.
- If `thread1` and `thread2` run concurrently, a deadlock occurs because each thread holds one lock while waiting for the other to release the lock it needs.
- As a result, both threads remain blocked forever, and the program does not make any progress.

Deadlocks are a common problem in multithreaded programming, and they can be tricky to debug and resolve. To avoid deadlocks, you should always be cautious when acquiring multiple locks and try to acquire locks in a consistent order across threads. Additionally, using higher-level synchronization mechanisms such as `java.util.concurrent` classes can help prevent deadlocks by providing more controlled ways to manage locks and resources.
