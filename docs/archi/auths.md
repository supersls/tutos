There are several well-known application authentication types used to secure access to software applications:

1. **Username/Password Authentication**: This is the most common form of authentication where users provide a unique username and password combination to access the application.

2. **Token-based Authentication**: In this method, the application issues a token (such as JSON Web Tokens or JWT) to authenticated users after they log in. The token is then sent with each subsequent request to authenticate the user's identity.

3. **OAuth (Open Authorization)**: OAuth is an authentication protocol that allows users to grant third-party applications limited access to their resources without sharing their credentials. It is commonly used for social login and API authorization.

4. **OpenID Connect**: OpenID Connect is an authentication layer built on top of the OAuth 2.0 protocol. It provides authentication and single sign-on (SSO) capabilities for applications.

5. **SAML (Security Assertion Markup Language)**: SAML is an XML-based standard for exchanging authentication and authorization data between identity providers and service providers. It is commonly used for web-based SSO authentication.

6. **LDAP (Lightweight Directory Access Protocol)**: LDAP is a protocol used for accessing and managing directory information. It's often used for centralized authentication, where user credentials and attributes are stored in a central directory server.

7. **Biometric Authentication**: Biometric authentication uses unique biological characteristics such as fingerprints, facial recognition, or iris scans to verify a user's identity.

8. **Multi-factor Authentication (MFA)**: MFA requires users to provide two or more forms of authentication before granting access to the application. This could include a combination of passwords, security tokens, biometric verification, or other factors.

These authentication methods can be used alone or in combination to provide robust security for applications depending on the specific requirements and use cases.