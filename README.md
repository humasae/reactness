# README


## BACKEND

## problems with maven project
https://stackoverflow.com/questions/15046764/intellij-idea-not-recognizing-classes-specified-in-maven-dependencies

## docker
https://github.com/bezkoder/docker-compose-spring-boot-mysql/tree/master
https://www.bezkoder.com/docker-compose-spring-boot-mysql/

https://howtodoinjava.com/spring-boot/spring-boot-docker-compose/

You dont have to add **spring-boot-docker-compose** dependency if you want to create an image of the app itself, 
because it does recursively and launch docker command into app image

## JPA-HIBERNATE:
https://mkyong.com/spring-boot/spring-boot-spring-data-jpa-mysql-example/

## SECURITY
https://springjavatutorial.medium.com/spring-security-login-form-with-database-authentication-9adc66f889dc
https://tiagoamp.medium.com/rest-api-with-spring-boot-3-part-4-a09e5591b942
https://medium.com/@rameez.s.shaikh/spring-boot-3-spring-security-6-in-depth-understanding-927bb5e826ee
 - Instead of **javax.persistence** springboot 3 uses **jakarta.persistence**
 - This Api doesn't manage roles: https://wankhedeshubham.medium.com/spring-boot-security-with-userdetailsservice-and-custom-authentication-provider-3df3a188993f

### cookies
https://reflectoring.io/spring-boot-cookies/
https://medium.com/spring-boot/cookie-based-jwt-authentication-with-spring-security-756f70664673


## Additional libraries
https://projectlombok.org
 - https://projectlombok.org/features/Data
 - https://projectlombok.org/features/constructor
 
 
 
## FRONTEND
https://tailwindcss.com/docs/guides/vite

### secure JWT Token
https://javascript.plainenglish.io/how-to-secure-jwt-in-a-single-page-application-6a46e69fc393



## Autenticación http-only:
### En el servidor se configura:
 - **COOFIG**
 - configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173/")); 
 - configuration.setAllowCredentials(true);
 - **JWTService: obtener la cookie enviada desde el cliente**
 - (request.getCookies())
### En el cliente se envía con Axios: **withCredentials**
```
const api: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  // Puedes agregar aquí cualquier configuración adicional de Axios según tus necesidades
});
```