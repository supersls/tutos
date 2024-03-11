"use strict";(self.webpackChunktutos=self.webpackChunktutos||[]).push([[8658],{9636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=t(4848),a=t(8453);const c={},o=void 0,s={id:"java/threadLock",title:"threadLock",description:"Sure, let's create a simple Java example that demonstrates thread locking using the synchronized keyword.",source:"@site/docs/java/threadLock.md",sourceDirName:"java",slug:"/java/threadLock",permalink:"/tutos/docs/java/threadLock",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/threadLock.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tests",permalink:"/tutos/docs/java/tests"},next:{title:"threads",permalink:"/tutos/docs/java/threads"}},i={},d=[];function h(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Sure, let's create a simple Java example that demonstrates thread locking using the ",(0,r.jsx)(n.code,{children:"synchronized"})," keyword."]}),"\n",(0,r.jsx)(n.p,{children:"Consider a scenario where two threads are trying to access and modify a shared resource concurrently. Without proper synchronization, this could lead to data inconsistency or race conditions. We can use thread locks to ensure that only one thread can access the shared resource at a time."}),"\n",(0,r.jsx)(n.p,{children:"Here's a simple example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class ThreadLockExample {\n    private int counter = 0;\n\n    public synchronized void increment() {\n        counter++;\n    }\n\n    public synchronized void decrement() {\n        counter--;\n    }\n\n    public int getCounter() {\n        return counter;\n    }\n\n    public static void main(String[] args) {\n        ThreadLockExample example = new ThreadLockExample();\n\n        // Create two threads to increment and decrement the counter\n        Thread incrementThread = new Thread(() -> {\n            for (int i = 0; i < 1000; i++) {\n                example.increment();\n            }\n        });\n\n        Thread decrementThread = new Thread(() -> {\n            for (int i = 0; i < 1000; i++) {\n                example.decrement();\n            }\n        });\n\n        // Start the threads\n        incrementThread.start();\n        decrementThread.start();\n\n        // Wait for the threads to complete\n        try {\n            incrementThread.join();\n            decrementThread.join();\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n\n        // Print the final counter value\n        System.out.println("Final counter value: " + example.getCounter());\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"In this example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We have a ",(0,r.jsx)(n.code,{children:"ThreadLockExample"})," class with a counter variable."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"increment()"})," and ",(0,r.jsx)(n.code,{children:"decrement()"})," methods are synchronized using the ",(0,r.jsx)(n.code,{children:"synchronized"})," keyword. This ensures that only one thread can execute these methods at a time."]}),"\n",(0,r.jsx)(n.li,{children:"We create two threads: one for incrementing the counter and another for decrementing it."}),"\n",(0,r.jsxs)(n.li,{children:["Both threads access the shared ",(0,r.jsx)(n.code,{children:"counter"})," variable."]}),"\n",(0,r.jsxs)(n.li,{children:["We start the threads and wait for them to complete using the ",(0,r.jsx)(n.code,{children:"join()"})," method."]}),"\n",(0,r.jsx)(n.li,{children:"Finally, we print the final value of the counter."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By synchronizing the ",(0,r.jsx)(n.code,{children:"increment()"})," and ",(0,r.jsx)(n.code,{children:"decrement()"})," methods, we ensure that the counter is modified atomically, and we avoid data inconsistency issues that could occur if multiple threads were to access and modify the counter concurrently without synchronization."]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const a={},c=r.createContext(a);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);