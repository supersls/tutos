"use strict";(self.webpackChunktutos=self.webpackChunktutos||[]).push([[2030],{9538:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=r(4848),t=r(8453);const s={},i=void 0,a={id:"craftsmanChip/gitflow",title:"gitflow",description:"The Gitflow model is a popular branching strategy used in software development projects, including Java applications. It provides a structured approach to managing code changes, releases, and collaboration among team members. Here's how you can adapt the Gitflow model for Java projects:",source:"@site/docs/craftsmanChip/gitflow.md",sourceDirName:"craftsmanChip",slug:"/craftsmanChip/gitflow",permalink:"/tutos/docs/craftsmanChip/gitflow",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/craftsmanChip/gitflow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"clean-code",permalink:"/tutos/docs/craftsmanChip/clean-code"},next:{title:"Tutorial Intro",permalink:"/tutos/docs/intro"}},l={},c=[{value:"1. Branches in Gitflow:",id:"1-branches-in-gitflow",level:3},{value:"2. Workflow:",id:"2-workflow",level:3},{value:"3. Tooling and Automation:",id:"3-tooling-and-automation",level:3},{value:"4. Best Practices:",id:"4-best-practices",level:3},{value:"Conclusion:",id:"conclusion",level:3}];function d(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The Gitflow model is a popular branching strategy used in software development projects, including Java applications. It provides a structured approach to managing code changes, releases, and collaboration among team members. Here's how you can adapt the Gitflow model for Java projects:"}),"\n",(0,o.jsx)(n.h3,{id:"1-branches-in-gitflow",children:"1. Branches in Gitflow:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Main Branches"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"master"}),": Represents the mainline of the codebase and contains production-ready code."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"develop"}),": Integration branch for ongoing development work. Developers merge their feature branches into ",(0,o.jsx)(n.code,{children:"develop"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Supporting Branches"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"feature branches"}),": Each new feature or enhancement is developed in its own feature branch branched off ",(0,o.jsx)(n.code,{children:"develop"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"release branches"}),": Created from ",(0,o.jsx)(n.code,{children:"develop"})," when preparing for a new release. Bug fixes and release-specific changes are made in these branches before merging into ",(0,o.jsx)(n.code,{children:"master"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"hotfix branches"}),": Emergency fixes for critical issues in production. Branched off ",(0,o.jsx)(n.code,{children:"master"})," and merged back into both ",(0,o.jsx)(n.code,{children:"master"})," and ",(0,o.jsx)(n.code,{children:"develop"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"2-workflow",children:"2. Workflow:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Start Feature"}),": Create a new feature branch from ",(0,o.jsx)(n.code,{children:"develop"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Develop Feature"}),": Work on the feature branch, committing changes locally."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Finish Feature"}),": Merge the feature branch back into ",(0,o.jsx)(n.code,{children:"develop"}),". Optionally, delete the feature branch after merging."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Start Release"}),": Create a release branch from ",(0,o.jsx)(n.code,{children:"develop"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Test Release"}),": Perform testing and bug fixes in the release branch."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Finish Release"}),": Merge the release branch into both ",(0,o.jsx)(n.code,{children:"master"})," and ",(0,o.jsx)(n.code,{children:"develop"}),". Tag the release on ",(0,o.jsx)(n.code,{children:"master"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Start Hotfix"}),": Create a hotfix branch from ",(0,o.jsx)(n.code,{children:"master"})," to address critical issues."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Test and Deploy Hotfix"}),": Test and deploy the hotfix to production."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Finish Hotfix"}),": Merge the hotfix branch into both ",(0,o.jsx)(n.code,{children:"master"})," and ",(0,o.jsx)(n.code,{children:"develop"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"3-tooling-and-automation",children:"3. Tooling and Automation:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use Git hosting platforms like GitHub, GitLab, or Bitbucket to manage repositories and collaborate with team members."}),"\n",(0,o.jsx)(n.li,{children:"Utilize Continuous Integration (CI) and Continuous Deployment (CD) tools like Jenkins, Travis CI, or GitLab CI/CD to automate build, test, and deployment processes."}),"\n",(0,o.jsx)(n.li,{children:"Consider using Gitflow plugins or extensions for Git clients like GitKraken, SourceTree, or GitExtensions to streamline the Gitflow workflow."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"4-best-practices",children:"4. Best Practices:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Keep commits small, atomic, and focused on a single logical change."}),"\n",(0,o.jsx)(n.li,{children:"Write meaningful commit messages following a consistent format."}),"\n",(0,o.jsxs)(n.li,{children:["Regularly update and rebase feature branches on ",(0,o.jsx)(n.code,{children:"develop"})," to incorporate changes from other developers."]}),"\n",(0,o.jsx)(n.li,{children:"Perform code reviews to ensure code quality, adherence to coding standards, and knowledge sharing among team members."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"conclusion",children:"Conclusion:"}),"\n",(0,o.jsx)(n.p,{children:"The Gitflow model provides a robust framework for managing Java projects with clear branching, versioning, and release management practices. By following the Gitflow workflow and leveraging appropriate tooling and automation, Java development teams can streamline their development processes, improve collaboration, and deliver high-quality software efficiently."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var o=r(6540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);