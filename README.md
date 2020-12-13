# Semana-3-28

## Sprint Semana III

Proyecto de frontend y backend del módulo de inicio de sesión.

## Equipo 28 integrantes:

-	Daniel Alejandro Eslava Avendaño
-	Heywin Hernando Meneses Perez
-	Carlos Eduardo Ruiz Pacheco
<<<<<<< HEAD
-	Michael Arias Fajardo
- Fabián Tadeo Henao Escalante
=======
-	Michael Arias Fajardo-
- Fabián Tadeo Henao Escalante

>>>>>>> 90f61775cd14515192fa6caf9208323acca58a4d
## Actividades Semana 3

1. Documentar el proyecto. 
> documento de requerimientos, documento del proyecto, casos de uso e historias de usuario
2. construir un módulo de inicio de sesión
> user: campo nombre de usuario, campo contraseña y botón inicio de sesión
3. Documenar las pruebas del proyecto
> documento de pruebas
4. Ruta backend y su consumo
> '/api/auth/signin'
> exitoso: res.status(200).send({ accessToken: token });
> No existe usuario: res.status(404).send('User Not Found.');
> Contraseña invalida: res.status(401).send({ auth: false, accessToken: null, reason:
"Invalid Password!" });
5. Data base mySQL 
> consultas de sequelize cli, name, email y password de tipo string. 
