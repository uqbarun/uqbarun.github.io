---
title: OWASP Top 10 2017
---

# OWASP Top 10 2017

## A2:2017-Broken Authentication

**CWE-287: Improper Authentication**

La confirmación de la identidad del usuario, la autenticación y la gestión de sesiones son fundamentales para protegerse contra ataques relacionados con la autenticación. Pueden existir debilidades en la autenticación si la aplicación:

* Permite ataques automatizados, como el relleno de credenciales, donde el atacante tiene una lista de nombres de usuario y contraseñas válidas.
* Permite ataques de fuerza bruta u otros ataques automatizados.
* Permite contraseñas predeterminadas, débiles o conocidas, como "Password1" o "admin/admin".
* Utiliza procesos de recuperación de credenciales débiles o ineficaces y procesos de "olvidó su contraseña", como "respuestas basadas en el conocimiento", que no pueden garantizar la seguridad.
* Utiliza contraseñas en texto plano, encriptadas o con un hash débil (ver A3:2017-Exposición de datos sensibles).
* Tiene autenticación de múltiples factores ausente o ineficaz.
* Expone IDs de sesión en la URL (por ejemplo, mediante reescritura de URL).
* No rota los IDs de sesión después de un inicio de sesión exitoso.
* No invalida adecuadamente los IDs de sesión. Las sesiones de usuario o los tokens de autenticación (especialmente los tokens de inicio de sesión único (SSO)) no se invalidan correctamente durante el cierre de sesión o un período de inactividad.