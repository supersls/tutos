"use strict";(self.webpackChunktutos=self.webpackChunktutos||[]).push([[3845],{8602:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=s(4848),i=s(8453);const l={},a=void 0,r={id:"java/collections",title:"collections",description:"Java Collections Framework provides a set of interfaces and classes to represent and manipulate collections of objects. It includes various data structures like Lists, Sets, Maps, Queues, etc., along with algorithms to manipulate them efficiently. Here are some key interfaces and classes in the Java Collections Framework:",source:"@site/docs/java/collections.md",sourceDirName:"java",slug:"/java/collections",permalink:"/tutos/docs/java/collections",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/collections.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"appLifeCycle",permalink:"/tutos/docs/java/appLifeCycle"},next:{title:"failfirst",permalink:"/tutos/docs/java/failfirst"}},o={},c=[{value:"1. Interfaces:",id:"1-interfaces",level:3},{value:"a. <code>Collection&lt;E&gt;</code>:",id:"a-collectione",level:4},{value:"b. <code>List&lt;E&gt;</code>:",id:"b-liste",level:4},{value:"c. <code>Set&lt;E&gt;</code>:",id:"c-sete",level:4},{value:"d. <code>Map&lt;K, V&gt;</code>:",id:"d-mapk-v",level:4},{value:"2. Classes:",id:"2-classes",level:3},{value:"a. <code>ArrayList&lt;E&gt;</code>:",id:"a-arrayliste",level:4},{value:"b. <code>LinkedList&lt;E&gt;</code>:",id:"b-linkedliste",level:4},{value:"c. <code>HashSet&lt;E&gt;</code>:",id:"c-hashsete",level:4},{value:"d. <code>HashMap&lt;K, V&gt;</code>:",id:"d-hashmapk-v",level:4},{value:"3. Algorithms:",id:"3-algorithms",level:3},{value:"4. Iterators:",id:"4-iterators",level:3},{value:"Example:",id:"example",level:3}];function d(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Java Collections Framework provides a set of interfaces and classes to represent and manipulate collections of objects. It includes various data structures like Lists, Sets, Maps, Queues, etc., along with algorithms to manipulate them efficiently. Here are some key interfaces and classes in the Java Collections Framework:"}),"\n",(0,t.jsx)(n.h3,{id:"1-interfaces",children:"1. Interfaces:"}),"\n",(0,t.jsxs)(n.h4,{id:"a-collectione",children:["a. ",(0,t.jsx)(n.code,{children:"Collection<E>"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The root interface in the collection hierarchy."}),"\n",(0,t.jsx)(n.li,{children:"Represents a group of objects known as elements."}),"\n",(0,t.jsxs)(n.li,{children:["Provides basic operations like ",(0,t.jsx)(n.code,{children:"add()"}),", ",(0,t.jsx)(n.code,{children:"remove()"}),", ",(0,t.jsx)(n.code,{children:"contains()"}),", etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"b-liste",children:["b. ",(0,t.jsx)(n.code,{children:"List<E>"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Represents an ordered collection of elements."}),"\n",(0,t.jsx)(n.li,{children:"Allows duplicate elements and maintains insertion order."}),"\n",(0,t.jsxs)(n.li,{children:["Implementations include ",(0,t.jsx)(n.code,{children:"ArrayList"}),", ",(0,t.jsx)(n.code,{children:"LinkedList"}),", etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"c-sete",children:["c. ",(0,t.jsx)(n.code,{children:"Set<E>"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Represents a collection of unique elements."}),"\n",(0,t.jsx)(n.li,{children:"Does not allow duplicate elements."}),"\n",(0,t.jsxs)(n.li,{children:["Implementations include ",(0,t.jsx)(n.code,{children:"HashSet"}),", ",(0,t.jsx)(n.code,{children:"LinkedHashSet"}),", ",(0,t.jsx)(n.code,{children:"TreeSet"}),", etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"d-mapk-v",children:["d. ",(0,t.jsx)(n.code,{children:"Map<K, V>"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Represents a mapping of keys to values."}),"\n",(0,t.jsxs)(n.li,{children:["Does not extend the ",(0,t.jsx)(n.code,{children:"Collection"})," interface."]}),"\n",(0,t.jsxs)(n.li,{children:["Implementations include ",(0,t.jsx)(n.code,{children:"HashMap"}),", ",(0,t.jsx)(n.code,{children:"LinkedHashMap"}),", ",(0,t.jsx)(n.code,{children:"TreeMap"}),", etc."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-classes",children:"2. Classes:"}),"\n",(0,t.jsxs)(n.h4,{id:"a-arrayliste",children:["a. ",(0,t.jsx)(n.code,{children:"ArrayList<E>"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Resizable-array implementation of the ",(0,t.jsx)(n.code,{children:"List"})," interface."]}),"\n",(0,t.jsx)(n.li,{children:"Provides fast random access and is good for storing and accessing elements."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"b-linkedliste",children:["b. ",(0,t.jsx)(n.code,{children:"LinkedList<E>"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Doubly linked list implementation of the ",(0,t.jsx)(n.code,{children:"List"})," interface."]}),"\n",(0,t.jsx)(n.li,{children:"Provides sequential access and is efficient for manipulating elements at both ends."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"c-hashsete",children:["c. ",(0,t.jsx)(n.code,{children:"HashSet<E>"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Implements the ",(0,t.jsx)(n.code,{children:"Set"})," interface using a hash table."]}),"\n",(0,t.jsx)(n.li,{children:"Provides constant-time performance for basic operations."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"d-hashmapk-v",children:["d. ",(0,t.jsx)(n.code,{children:"HashMap<K, V>"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Implements the ",(0,t.jsx)(n.code,{children:"Map"})," interface using a hash table."]}),"\n",(0,t.jsx)(n.li,{children:"Provides constant-time performance for basic operations."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-algorithms",children:"3. Algorithms:"}),"\n",(0,t.jsxs)(n.p,{children:["The Collections Framework also provides various algorithms to operate on collections, such as sorting, searching, shuffling, etc. Some of the key methods include ",(0,t.jsx)(n.code,{children:"sort()"}),", ",(0,t.jsx)(n.code,{children:"binarySearch()"}),", ",(0,t.jsx)(n.code,{children:"shuffle()"}),", ",(0,t.jsx)(n.code,{children:"reverse()"}),", etc."]}),"\n",(0,t.jsx)(n.h3,{id:"4-iterators",children:"4. Iterators:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Iterators provide a way to traverse through the elements of a collection."}),"\n",(0,t.jsxs)(n.li,{children:["They allow sequential access to elements and provide methods like ",(0,t.jsx)(n.code,{children:"next()"}),", ",(0,t.jsx)(n.code,{children:"hasNext()"}),", ",(0,t.jsx)(n.code,{children:"remove()"}),", etc."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(n.p,{children:"Here's a simple example demonstrating the usage of Java collections:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Creating an ArrayList\n        List<String> list = new ArrayList<>();\n        list.add("Apple");\n        list.add("Banana");\n        list.add("Orange");\n\n        // Iterating through the list using an Iterator\n        Iterator<String> iterator = list.iterator();\n        while (iterator.hasNext()) {\n            System.out.println(iterator.next());\n        }\n\n        // Creating a HashSet\n        Set<Integer> set = new HashSet<>();\n        set.add(1);\n        set.add(2);\n        set.add(3);\n\n        // Iterating through the set using a for-each loop\n        for (int num : set) {\n            System.out.println(num);\n        }\n\n        // Creating a HashMap\n        Map<String, Integer> map = new HashMap<>();\n        map.put("One", 1);\n        map.put("Two", 2);\n        map.put("Three", 3);\n\n        // Iterating through the map using entrySet() method\n        for (Map.Entry<String, Integer> entry : map.entrySet()) {\n            System.out.println(entry.getKey() + " : " + entry.getValue());\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This example demonstrates the creation and usage of ArrayList, HashSet, and HashMap. It also shows how to iterate through collections using iterators and for-each loops."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const i={},l=t.createContext(i);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);