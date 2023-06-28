# Desafío 3

## Ejercicio 1: ¿Cómo podrías pausar el trabajo en el commit actual para dedicarte a trabajar en master?

En este caso, podemos aplicar el comando `git stash --include-untracked` para preservar los archivos que estamos trabajando en la branch custom-navbar, y así, poder movernos a la rama master para hacer los fixes necesarios. La opción --include-untracked nos permite preservar todos los archivos, incluso aquellos que Git no está siguiendo hasta el momento.

Al terminar los ajustes en la rama master y realizar los commits y PRs necesarios; podemos volver a la rama custom-nabvar utilizando el comando `git checkout custom-navbar` y recuperar los archivos y avances en los que estábamos trabajando antes de la incidencia, utilizando el comando `git stash pop`.

## Ejercicio 2: ¿Cómo podrías subir los cambios a producción si es la rama master la que se usa para producción?

En este caso:

1. Primero se necesita crear un pull request para poder realizar el merge de la rama **front-react** en la rama **dev**.

2. Una vez realizado este primer merge, podremos realizar una nueva rama que parta de **dev** (supongamos) llamada **release/1.0.0** utilizando el comando `git checkout -b release/1.0.0`. Este nombre de la rama va a corresponderse con la versión (tag) del software que estamos por lanzar.

3. Esta nueva rama será testeada por el equipo de QA para controlar que todo funcione correctamente antes de realizar el paso a master.

4. Una vez que la rama **release/1.0.0** está lista para salir a producción, se realiza un tag anotado para marcar correctamente la versión del software que está por salir a producción. Para realizar el tag se utiliza el comando `git tag -a v1.0.0 -m "Version 1.0.0"`.

5. Una vez generada la tag debemos hacer un push para poder indicarle al remoto que esta tag fue generada. Para hacer ese push utilizamos el comando `git push origin v1.0.0`

6. Una vez que el tag está listo y se hizo el push, se hace el pull request a **master**, para que se pueda hacer el merge que corresponde, logrando que los cambios lleguen a producción.

7. A su vez, la rama **release/1.0.0** también tiene su merge a la rama **dev**, para que esta última quede actualizada al igual que **master**.
