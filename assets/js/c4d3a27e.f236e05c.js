"use strict";(self.webpackChunktutos=self.webpackChunktutos||[]).push([[2468],{7776:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var t=r(4848),i=r(8453);const o={},s=void 0,a={id:"spring/spring-security-jwt",title:"spring-security-jwt",description:"Spring Security offers extensive support for integrating JSON Web Tokens (JWT) into your application for authentication and authorization purposes. Here's a basic example of using JWT with Spring Security:",source:"@site/docs/spring/spring-security-jwt.md",sourceDirName:"spring",slug:"/spring/spring-security-jwt",permalink:"/tutos/docs/spring/spring-security-jwt",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring/spring-security-jwt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"spring-data-jpa",permalink:"/tutos/docs/spring/spring-data-jpa"}},c={},u=[{value:"1. Dependencies:",id:"1-dependencies",level:3},{value:"2. Configuration:",id:"2-configuration",level:3},{value:"3. JWT Token Generation:",id:"3-jwt-token-generation",level:3},{value:"4. User Details Service:",id:"4-user-details-service",level:3}];function p(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Spring Security offers extensive support for integrating JSON Web Tokens (JWT) into your application for authentication and authorization purposes. Here's a basic example of using JWT with Spring Security:"}),"\n",(0,t.jsx)(n.h3,{id:"1-dependencies",children:"1. Dependencies:"}),"\n",(0,t.jsxs)(n.p,{children:["You need to include the necessary dependencies in your ",(0,t.jsx)(n.code,{children:"pom.xml"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-api</artifactId>\n    <version>0.11.2</version>\n</dependency>\n\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-impl</artifactId>\n    <version>0.11.2</version>\n    <scope>runtime</scope>\n</dependency>\n\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-jackson</artifactId>\n    <version>0.11.2</version>\n    <scope>runtime</scope>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-configuration",children:"2. Configuration:"}),"\n",(0,t.jsx)(n.p,{children:"You need to configure Spring Security to use JWT for authentication. Here's a basic configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.authentication.AuthenticationManager;\nimport org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;\nimport org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\nimport org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;\n\n@Configuration\n@EnableWebSecurity\n@EnableGlobalMethodSecurity(prePostEnabled = true)\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n\n    @Autowired\n    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;\n\n    @Autowired\n    private JwtRequestFilter jwtRequestFilter;\n\n    @Autowired\n    private MyUserDetailsService userDetailsService;\n\n    @Autowired\n    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {\n        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());\n    }\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n\n    @Bean\n    @Override\n    public AuthenticationManager authenticationManagerBean() throws Exception {\n        return super.authenticationManagerBean();\n    }\n\n    @Override\n    protected void configure(HttpSecurity httpSecurity) throws Exception {\n        httpSecurity.csrf().disable()\n            .authorizeRequests().antMatchers("/authenticate").permitAll()\n            .anyRequest().authenticated().and()\n            .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and()\n            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);\n        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-jwt-token-generation",children:"3. JWT Token Generation:"}),"\n",(0,t.jsx)(n.p,{children:"You need to generate JWT tokens during authentication. Below is a simple example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.SignatureAlgorithm;\nimport org.springframework.stereotype.Service;\n\nimport java.util.Date;\nimport java.util.HashMap;\nimport java.util.Map;\n\n@Service\npublic class JwtUtil {\n\n    private String SECRET_KEY = "secret";\n\n    public String generateToken(String username) {\n        Map<String, Object> claims = new HashMap<>();\n        return createToken(claims, username);\n    }\n\n    private String createToken(Map<String, Object> claims, String subject) {\n        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))\n            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))\n            .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"4-user-details-service",children:"4. User Details Service:"}),"\n",(0,t.jsx)(n.p,{children:"Implement a user details service to load user-specific data during authentication:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.security.core.userdetails.User;\nimport org.springframework.security.core.userdetails.UserDetails;\nimport org.springframework.security.core.userdetails.UserDetailsService;\nimport org.springframework.security.core.userdetails.UsernameNotFoundException;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class MyUserDetailsService implements UserDetailsService {\n\n    @Autowired\n    private UserRepository userRepository;\n\n    @Override\n    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n        UserEntity user = userRepository.findByUsername(username);\n        if (user == null) {\n            throw new UsernameNotFoundException("User not found with username: " + username);\n        }\n        return new User(user.getUsername(), user.getPassword(), new ArrayList<>());\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This is a basic example of integrating JWT with Spring Security in a Spring Boot application. It demonstrates how to configure Spring Security, generate JWT tokens, and authenticate users using JWT tokens. Actual implementations may vary depending on your application's requirements."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);