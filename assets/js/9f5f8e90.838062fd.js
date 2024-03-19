"use strict";(self.webpackChunktutos=self.webpackChunktutos||[]).push([[2957],{4880:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(4848),i=r(8453);const a={},o=void 0,s={id:"spring/spring-batch",title:"spring-batch",description:"Sure! Here's a simple example of a Spring Batch application in Java:",source:"@site/docs/spring/spring-batch.md",sourceDirName:"spring",slug:"/spring/spring-batch",permalink:"/tutos/docs/spring/spring-batch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring/spring-batch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spring",permalink:"/tutos/docs/category/spring"},next:{title:"spring-data-jdbc",permalink:"/tutos/docs/spring/spring-data-jdbc"}},c={},p=[];function l(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Sure! Here's a simple example of a Spring Batch application in Java:"}),"\n",(0,t.jsxs)(n.p,{children:["First, you need to set up your project with Maven or Gradle and include the necessary dependencies for Spring Batch. For Maven, add the following dependencies to your ",(0,t.jsx)(n.code,{children:"pom.xml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependencies>\n    \x3c!-- Spring Batch --\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-batch</artifactId>\n    </dependency>\n\n    \x3c!-- Spring Boot Starter --\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter</artifactId>\n    </dependency>\n\n    \x3c!-- H2 Database --\x3e\n    <dependency>\n        <groupId>com.h2database</groupId>\n        <artifactId>h2</artifactId>\n        <scope>runtime</scope>\n    </dependency>\n\n    \x3c!-- Spring Boot Starter Test --\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-test</artifactId>\n        <scope>test</scope>\n    </dependency>\n</dependencies>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, let's create a simple Spring Batch job that reads data from a CSV file and writes it to the console."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a CSV file named ",(0,t.jsx)(n.code,{children:"input.csv"})," with some sample data."]}),"\n",(0,t.jsx)(n.li,{children:"Create a Spring Batch configuration class:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import org.springframework.batch.core.Job;\nimport org.springframework.batch.core.Step;\nimport org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;\nimport org.springframework.batch.core.configuration.annotation.JobBuilderFactory;\nimport org.springframework.batch.core.configuration.annotation.StepBuilderFactory;\nimport org.springframework.batch.item.file.FlatFileItemReader;\nimport org.springframework.batch.item.file.mapping.DefaultLineMapper;\nimport org.springframework.batch.item.file.transform.DelimitedLineTokenizer;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.core.io.ClassPathResource;\nimport org.springframework.core.io.Resource;\nimport org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;\n\n@Configuration\n@EnableBatchProcessing\npublic class BatchConfig {\n\n    @Autowired\n    private JobBuilderFactory jobBuilderFactory;\n\n    @Autowired\n    private StepBuilderFactory stepBuilderFactory;\n\n    @Bean\n    public FlatFileItemReader<Person> reader() {\n        FlatFileItemReader<Person> reader = new FlatFileItemReader<>();\n        reader.setResource(new ClassPathResource("input.csv"));\n        reader.setLineMapper(new DefaultLineMapper<Person>() {{\n            setLineTokenizer(new DelimitedLineTokenizer() {{\n                setNames(new String[] { "firstName", "lastName" });\n            }});\n            setFieldSetMapper(new BeanWrapperFieldSetMapper<Person>() {{\n                setTargetType(Person.class);\n            }});\n        }});\n        return reader;\n    }\n\n    @Bean\n    public ConsoleItemWriter<Person> writer() {\n        return new ConsoleItemWriter<>();\n    }\n\n    @Bean\n    public Step step1() {\n        return stepBuilderFactory.get("step1")\n                .<Person, Person>chunk(10)\n                .reader(reader())\n                .writer(writer())\n                .build();\n    }\n\n    @Bean\n    public Job importUserJob() {\n        return jobBuilderFactory.get("importUserJob")\n                .start(step1())\n                .build();\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.code,{children:"Person"})," class:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class Person {\n\n    private String firstName;\n    private String lastName;\n\n    // Getters and setters\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Create a custom ",(0,t.jsx)(n.code,{children:"ItemWriter"})," to write data to the console:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import org.springframework.batch.item.ItemWriter;\n\nimport java.util.List;\n\npublic class ConsoleItemWriter<T> implements ItemWriter<T> {\n\n    @Override\n    public void write(List<? extends T> items) throws Exception {\n        for (T item : items) {\n            System.out.println(item.toString());\n        }\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Now you can run your Spring Batch job by creating a Spring Boot application class:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class Application {\n\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This application will read data from ",(0,t.jsx)(n.code,{children:"input.csv"}),", process it, and write it to the console."]}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you have ",(0,t.jsx)(n.code,{children:"input.csv"})," in your classpath with appropriate data."]}),"\n",(0,t.jsx)(n.p,{children:"That's it! You've created a simple Spring Batch application in Java. You can expand upon this example by adding more complex processing logic, writing to databases, or integrating with other systems."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(6540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);