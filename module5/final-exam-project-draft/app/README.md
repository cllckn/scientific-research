
## 1. Access Control: Authentication and Authorization with JWT (JSON Web Tokens)

### 1.1 Role Based Access Control

* **Access Control** is the process of controlling how system actors interact with resources, based on predefined rules, policies, and permissions.
* **Actors** (also called *subjects* or *principals*) are entities that interact with a system, including human users,
  software applications, services, and devices. They may perform operations such as accessing, modifying, or executing resources.

<img src="../../../resources/images/rbac-infographic.png" alt="rbac-infographic" class="w-full" >
* **Resources** are the objects or assets that actors interact with.
  * Operating system: memory (read, write, execute), files (read, write, execute), directories, and network ports (listen, connect).
  * Database: tables (insert, update, select, delete), views, stored procedures, and functions.
  * Application software: interfaces (access), web pages (access), and functions (execute).

* **Permissions** are approvals to perform specific operations (such as read, write, execute, or delete) on resources.
  A permission is an *operation + resource*, for example "read on table `customers`".

* **Authentication** is the process of verifying the identity of an actor (for example, with a password, a one-time
  code, a passkey, or biometrics). Using more than one factor is called multi-factor authentication (MFA).

* **Authorization** is the process of deciding whether an authenticated actor is allowed to perform a specific action
  on a specific resource, based on the permissions it has been granted.


* **Role-Based Access Control (RBAC)** is a widely used approach:
    * Permissions are assigned to **roles** rather than to individual actors, which simplifies management.
    * Actors are then assigned to roles and inherit the permissions of those roles.
    * It helps scalability and simplifies administration in systems with many users and resources.
    * It supports the **principle of least privilege**: a role should hold only the permissions it needs.

* RBAC relationships:

| Actors               | ⟷ M:N ⟷ | Roles         | ⟷ M:N ⟷ | Permissions          | ⟷ M:1 ⟷ | Resources       |
|----------------------|----------|---------------|----------|----------------------|----------|-----------------|
| user, system, device |          | admin, editor |          | read, update, access |          | table, web page |

* RBAC is not the only model. Others include attribute-based access control (ABAC), which decides based on attributes of the user, resource, and context.



* Activity matrix
  ![Activity Matrix](../../../resources/images/activity-matrix.png)

---

### 1.2 JWT (JSON Web Token)

A **JWT (JSON Web Token)**, defined in [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519), is a compact, self-contained token for transmitting claims between parties as a JSON object. It is commonly used for authentication and authorization.

A JWT is normally **signed**, not just encoded. The signature lets the receiver verify that the token was issued by a trusted party and has not been modified. However, a signed JWT is **not encrypted**: anyone who has the token can read its contents. Do not store sensitive data (such as passwords) in it unless the token is encrypted separately (JWE, [RFC 7516](https://datatracker.ietf.org/doc/html/rfc7516)).

#### **How Does JWT Work?**
1. **User logs in** → The client sends credentials to the server.
2. **Server generates a JWT** → If the credentials are valid, the server creates a JWT and signs it with a secret key (HS256) or a private key (RS256/ES256).
3. **Client stores the token** → For example in `localStorage` or in a cookie. Note: any script injected into the page (XSS) can read `localStorage`. `HttpOnly`, `Secure`, `SameSite` cookies are generally safer against that, but need CSRF protection.
4. **Client sends the token** → With each request, in the `Authorization` header: `Authorization: Bearer <token>`.
5. **Server verifies the JWT** → It checks the signature, the expected algorithm (never trust the token's own `alg` value, and reject `none`), and the expiry (`exp`). In larger systems it also checks the issuer (`iss`) and audience (`aud`). If everything is valid and the role allows the action, access is granted; otherwise it is denied (401 / 403).

![](../../../resources/images/authentication-with-jwt.png)

#### **Structure of a JWT**
A JWT consists of three parts, separated by dots (`.`):

`Header.Payload.Signature`

- **Header** → The token type and the signing algorithm.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- **Payload** → The claims (user data, expiry, and so on).

```json
{
  "sub": "1",
  "username": "user1",
  "name": "Jane Lee",
  "role": 1,
  "iat": 1767225600,
  "exp": 2000000000
}
```

- `sub` (subject): who the token is about. `iat`: issued at. `exp`: expiry. All times are in seconds since 1 January 1970 (UTC).
- `sub`, `iat` and `exp` are standard (registered) claims. `username`, `name` and `role` are custom claims.

- **Signature** → Proves the header and payload were not modified. The header and payload are each encoded with Base64URL, joined with a dot, and signed:

```plain
HMACSHA256(
    base64UrlEncode(header) + "." + base64UrlEncode(payload),
    secret_key
)

secret_key: my-secret-key-is-this-at-least-256-bits
```

- HS256 requires a secret of at least 256 bits (32 bytes). Use a long random value in real projects, and never publish it.

The JWT generated from the values above is:

```plain
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcm5hbWUiOiJ1c2VyMSIsIm5hbWUiOiJKYW5lIExlZSIsInJvbGUiOjEsImlhdCI6MTc2NzIyNTYwMCwiZXhwIjoyMDAwMDAwMDAwfQ.vjfYS5zcCfCxLl_A_YaDMCySag6RkCKhofJ7lnPQENo
```

The token is **encoded but not encrypted**: anyone can decode the header and payload. Because it is signed, any change to them invalidates the signature (tampering is detected).

* Try it with the [JWT debugger](https://jwt.io/) (do not paste real tokens from production systems).

#### **Key Properties of JWT**
- **Stateless** → The server does not need to store sessions. Trade-off: a valid token cannot be easily revoked before it expires, so use short expiry times, often with refresh tokens.
- **Compact** → Small enough to send in an HTTP header: `Authorization: Bearer <token>`.
- **Tamper-evident** → Any change to the header or payload breaks the signature. (Encryption is possible with JWE, but it is rarely used.)
- **Scalable** → Works well in distributed systems. With asymmetric keys (RS256/ES256), other services can verify tokens using only the public key.

#### **Security Reminders**
- Always verify the token **on the server**. Decoding a token in the browser (for example, to redirect by role) only improves the user experience; it is not security.
- Use short-lived tokens, and keep the signing key secret.
- Follow the JWT best practices in [RFC 8725](https://datatracker.ietf.org/doc/html/rfc8725).

---

### 1.3 Multi-Factor Authentication (MFA)

**Multi-Factor Authentication (MFA)** is a security method that requires users to prove their identity with two or more **different types of factors** before access is granted.

#### **Factors of Authentication**
1. **Something you know** → Password, PIN.
2. **Something you have** → Authenticator app (one-time codes), security key, smartphone with a passkey.
3. **Something you are** → Biometrics (fingerprint, face recognition).

The factors must come from **different categories**. A password plus a PIN is two steps but only one factor type, so it is not MFA.

#### **Why Use MFA?**
- A stolen or leaked password alone is no longer enough to log in.
- It reduces the impact of password breaches and reused passwords.
- It is commonly used in banking, enterprise logins, and cloud services.

#### **Not All MFA Is Equally Strong**

| Method | Strength | Notes |
|---|---|---|
| SMS / voice code | Weakest | Can be intercepted (for example by SIM swapping). NIST classes SMS as a *restricted* authenticator: allowed, but not recommended. |
| Authenticator app (TOTP code) | Better | No phone network involved, but a user can still be tricked into typing the code on a fake website. |
| Passkey / FIDO2 security key | Strongest | **Phishing-resistant**: the login is cryptographically bound to the real website, so it does not work on a fake one. |

* NIST SP 800-63-4 (finalized in July 2025) pushes organizations towards phishing-resistant authentication such as passkeys.
