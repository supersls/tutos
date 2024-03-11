"use strict";(self.webpackChunktutos=self.webpackChunktutos||[]).push([[5965],{2798:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=s(4848),l=s(8453);const a={},o=void 0,i={id:"java/hashcode-equals",title:"hashcode-equals",description:"In Java, hashCode() and equals() are methods defined in the Object class, which is the root class for all Java classes. They are crucial for proper functioning in collections like HashMap, HashSet, Hashtable, etc. Understanding their rules and implementing them correctly is essential for designing effective Java classes.",source:"@site/docs/java/hashcode-equals.md",sourceDirName:"java",slug:"/java/hashcode-equals",permalink:"/tutos/docs/java/hashcode-equals",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/hashcode-equals.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gradle",permalink:"/tutos/docs/java/gradle"},next:{title:"hashmap",permalink:"/tutos/docs/java/hashmap"}},t={},d=[{value:"<code>hashCode()</code> Method:",id:"hashcode-method",level:3},{value:"<code>equals()</code> Method:",id:"equals-method",level:3},{value:"Implementing hashCode() and equals():",id:"implementing-hashcode-and-equals",level:3}];function c(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In Java, ",(0,r.jsx)(n.code,{children:"hashCode()"})," and ",(0,r.jsx)(n.code,{children:"equals()"})," are methods defined in the ",(0,r.jsx)(n.code,{children:"Object"})," class, which is the root class for all Java classes. They are crucial for proper functioning in collections like ",(0,r.jsx)(n.code,{children:"HashMap"}),", ",(0,r.jsx)(n.code,{children:"HashSet"}),", ",(0,r.jsx)(n.code,{children:"Hashtable"}),", etc. Understanding their rules and implementing them correctly is essential for designing effective Java classes."]}),"\n",(0,r.jsxs)(n.p,{children:["Here are the rules for implementing ",(0,r.jsx)(n.code,{children:"hashCode()"})," and ",(0,r.jsx)(n.code,{children:"equals()"})," methods in Java:"]}),"\n",(0,r.jsxs)(n.h3,{id:"hashcode-method",children:[(0,r.jsx)(n.code,{children:"hashCode()"})," Method:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consistency"}),": If an object does not change in a way that affects equals comparisons, then its hashCode value should remain consistent across multiple invocations of hashCode()."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consistent with equals()"}),": Objects that are equal according to the equals() method should return the same integer result when hashCode() is invoked on them."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Performance"}),": The hashCode() method should be implemented in such a way that it generates unique hash codes for different objects as much as possible. However, collisions are inevitable."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"equals-method",children:[(0,r.jsx)(n.code,{children:"equals()"})," Method:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Reflexive"}),": For any non-null reference value ",(0,r.jsx)(n.code,{children:"x"}),", ",(0,r.jsx)(n.code,{children:"x.equals(x)"})," should return true."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Symmetric"}),": For any non-null reference values ",(0,r.jsx)(n.code,{children:"x"})," and ",(0,r.jsx)(n.code,{children:"y"}),", ",(0,r.jsx)(n.code,{children:"x.equals(y)"})," should return true if and only if ",(0,r.jsx)(n.code,{children:"y.equals(x)"})," returns true."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Transitive"}),": For any non-null reference values ",(0,r.jsx)(n.code,{children:"x"}),", ",(0,r.jsx)(n.code,{children:"y"}),", and ",(0,r.jsx)(n.code,{children:"z"}),", if ",(0,r.jsx)(n.code,{children:"x.equals(y)"})," returns true and ",(0,r.jsx)(n.code,{children:"y.equals(z)"})," returns true, then ",(0,r.jsx)(n.code,{children:"x.equals(z)"})," should return true."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consistent"}),": For any non-null reference values ",(0,r.jsx)(n.code,{children:"x"})," and ",(0,r.jsx)(n.code,{children:"y"}),", multiple invocations of ",(0,r.jsx)(n.code,{children:"x.equals(y)"})," consistently return true or consistently return false, provided no information used in equals comparisons on the objects is modified."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Null Comparison"}),": For any non-null reference value ",(0,r.jsx)(n.code,{children:"x"}),", ",(0,r.jsx)(n.code,{children:"x.equals(null)"})," should return false."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"implementing-hashcode-and-equals",children:"Implementing hashCode() and equals():"}),"\n",(0,r.jsxs)(n.p,{children:["When implementing ",(0,r.jsx)(n.code,{children:"hashCode()"})," and ",(0,r.jsx)(n.code,{children:"equals()"})," methods, it's crucial to consider all relevant fields that participate in equality comparisons. Typically, if you override ",(0,r.jsx)(n.code,{children:"equals()"}),", you should also override ",(0,r.jsx)(n.code,{children:"hashCode()"})," to ensure consistency."]}),"\n",(0,r.jsxs)(n.p,{children:["Here's a basic example of how you might implement ",(0,r.jsx)(n.code,{children:"hashCode()"})," and ",(0,r.jsx)(n.code,{children:"equals()"})," in a Java class:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class MyClass {\n    private int id;\n    private String name;\n\n    // Constructor, getters, setters\n\n    @Override\n    public int hashCode() {\n        int result = 17;\n        result = 31 * result + id;\n        result = 31 * result + (name != null ? name.hashCode() : 0);\n        return result;\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n\n        MyClass other = (MyClass) obj;\n\n        if (id != other.id) return false;\n        return name != null ? name.equals(other.name) : other.name == null;\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, ",(0,r.jsx)(n.code,{children:"hashCode()"})," and ",(0,r.jsx)(n.code,{children:"equals()"})," are overridden based on ",(0,r.jsx)(n.code,{children:"id"})," and ",(0,r.jsx)(n.code,{children:"name"})," fields to ensure correct behavior in collections and equality comparisons."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(6540);const l={},a=r.createContext(l);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);