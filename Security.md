<!-- @format -->

Reference >> ??

# Vulnerabilities - Nested dependency trees

From Book - Node Cookbook - Securing Node.js

This ecosystem is key to Node.js's success. But it does lead to large, nested dependency trees within our applications. Not only must we be concerned with the security of the application code that we write ourselves, but we must also consider the security of the code included in the modules in our dependency tree. Even the most mature and popular modules and frameworks may contain security vulnerabilities.

```bash

$ npm audit

$ npm audit fix  # update the dependencies to fixed verions
```

There is some dependencies that wont be update or fix, it requires a manual update and require changes in your application code

# Secure session cookies

Session cookies can be marked with a Secure attribute. The Secure attribute forces the browser to not use HTTP to send cookies back to the server. This is to avoid Man-In-The-Middle (MITM) attacks. In production applications, HTTPS and secure cookies should be used. But in development, it's easier to use HTTP.

It's typical for a production environment to apply the SSL encryption at the load balancer layer. A load balancer is a technology in an application architecture that is responsible for boosting the efficiency of the application by distributing a set of tasks over a set of resources – for example, distributing login requests to servers.

# HTTP headers - Helmet

Express.js is a lightweight web framework, so certain measures that are typically taken to better secure applications are not implemented by the core framework. One of the precautionary measures we can take is to set certain security-related HTTP headers on requests. Sometimes, this is referred to as "hardening" the headers of our HTTP requests.

Use

```bash
$ localhost:8000/user/signup
```

The next configuration is settele by autonatic by Helmet.
Headers Protection

```js
const http = require("http");

const server = http.createServer((req, res) => {
  secureHeaders(res);

  res.end("Hello World!");
});

const secureHeaders = (res) => {
  res.setHeader("X-DNS-Prefetch-Control", "off");
  res.setHeader("Expect-CT", "max-age=0");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-Download-Options", "noopen");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Permitted-Cross-Domain-Policies", "none");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("X-XSS-Protection", "1; mode=block");
};

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

# Protecting against HTTP parameter pollution attacks

One of the easiest groups of vulnerabilities to exploit is injection attacks, with SQL injection attacks being the most common. SQL injection attacks are where an attacker injects malicious SQL into an application to delete, distort, or expose data stored in the database.

If an application accepts input in any form, you need to take necessary precautions to ensure that malicious inputs cannot exploit your application.

Parameter pollution is a type of injection attack where the HTTP parameters of a web application's HTTP endpoints are injected with specific malicious input. HTTP parameter pollution can be used to expose internal data or even cause a Denial of Service (DoS) attack, where an attacker tries to interrupt a resource and render it inaccessible by the resource's intended users.

In the recipe, we'll look at how we can protect an HTTP server against parameter pollution attacks. Parameter pollution attacks are where malicious input is injected into URL parameters.
