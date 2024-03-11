"use strict";(self.webpackChunktutos=self.webpackChunktutos||[]).push([[3369],{1667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(4848),l=n(8453);const r={},o=void 0,i={id:"java/futures",title:"futures",description:"Java CompletableFuture is a class introduced in Java 8 to represent a future result of an asynchronous computation. It provides a way to write non-blocking asynchronous code in a more readable and maintainable way. Here are some examples of using CompletableFuture in Java:",source:"@site/docs/java/futures.md",sourceDirName:"java",slug:"/java/futures",permalink:"/docs/java/futures",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/futures.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"collections",permalink:"/docs/java/collections"},next:{title:"gradle",permalink:"/docs/java/gradle"}},u={},c=[{value:"1. Basic CompletableFuture Example:",id:"1-basic-completablefuture-example",level:3},{value:"2. Handling CompletableFuture with Callbacks:",id:"2-handling-completablefuture-with-callbacks",level:3},{value:"3. Combining CompletableFutures:",id:"3-combining-completablefutures",level:3},{value:"4. Handling Errors with Exceptionally:",id:"4-handling-errors-with-exceptionally",level:3},{value:"5. Handling Timeouts:",id:"5-handling-timeouts",level:3}];function s(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Java CompletableFuture is a class introduced in Java 8 to represent a future result of an asynchronous computation. It provides a way to write non-blocking asynchronous code in a more readable and maintainable way. Here are some examples of using CompletableFuture in Java:"}),"\n",(0,a.jsx)(t.h3,{id:"1-basic-completablefuture-example",children:"1. Basic CompletableFuture Example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException, ExecutionException {\n        CompletableFuture<String> completableFuture = new CompletableFuture<>();\n\n        // Asynchronous computation\n        new Thread(() -> {\n            try {\n                Thread.sleep(2000);\n                completableFuture.complete("Future\'s Result");\n            } catch (InterruptedException e) {\n                completableFuture.completeExceptionally(e);\n            }\n        }).start();\n\n        // Get the result of the computation\n        String result = completableFuture.get();\n        System.out.println("Result: " + result);\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"2-handling-completablefuture-with-callbacks",children:"2. Handling CompletableFuture with Callbacks:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException, ExecutionException {\n        CompletableFuture.supplyAsync(() -> "Hello")\n                .thenApply(s -> s + " World")\n                .thenAccept(System.out::println)\n                .get();\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"3-combining-completablefutures",children:"3. Combining CompletableFutures:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException, ExecutionException {\n        CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "Hello");\n        CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "World");\n\n        CompletableFuture<String> combinedFuture = future1.thenCombine(future2, (result1, result2) -> result1 + " " + result2);\n\n        System.out.println(combinedFuture.get());\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"4-handling-errors-with-exceptionally",children:"4. Handling Errors with Exceptionally:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException, ExecutionException {\n        CompletableFuture<String> completableFuture = new CompletableFuture<>();\n\n        completableFuture.completeExceptionally(new RuntimeException("Calculation failed"));\n\n        // Handle exception using exceptionally\n        completableFuture.exceptionally(ex -> "Exception occurred: " + ex.getMessage())\n                .thenAccept(System.out::println);\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"5-handling-timeouts",children:"5. Handling Timeouts:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.TimeUnit;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException, ExecutionException {\n        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n            try {\n                TimeUnit.SECONDS.sleep(2);\n            } catch (InterruptedException e) {\n                throw new IllegalStateException(e);\n            }\n            return "Result";\n        });\n\n        // Timeout after 1 second\n        String result = future.orTimeout(1, TimeUnit.SECONDS).exceptionally(ex -> "Timeout occurred").get();\n        System.out.println(result);\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"These examples demonstrate the basic usage of CompletableFuture in Java for asynchronous programming, handling callbacks, combining futures, handling exceptions, and dealing with timeouts. CompletableFuture is a powerful tool for writing efficient and responsive asynchronous code in Java applications."})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const l={},r=a.createContext(l);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);