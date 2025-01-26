Extenciones a instalar
*live server


/Herramienta para desplejar mi web
Heroku

credenciales para la cuenta de Heroku geroku ya pide pagos

user: erickemmanuelquinonezestrada@gmail.com
pass: Emmanuelx*9PHoq



alternativas para desplejar mi web

Railway.app
#Comandos para subir el proyecto usando GitHub
#instalar git    
    yum install git


#Configurando Git con la herramienta llamada git config erramienta llamada git config
git config




#Identidad

user: emmanull
pass: emmanuelx*9PH

git config --global user.name "emmanull"
git config --global user.email erixqui@gmail.com

#Comprueba la configuracion de Git
git config --list


#¿Cómo obtener ayuda?  página del manual 
git help <verb>
$ git <verb> --help
$ man git-<verb>

git help config

#Obteniendo un repositorio Git
#Ir al directorio de tu proyecto para importarlo en github 
git init

git add .

git commit -m "f-web"

git remote add origin https://github.com/emmanull/TONL.git

#Dirígete a Settings > Developer settings > Personal access tokens > Tokens (classic).
#GitHub ha deshabilitado el uso de contraseñas para autenticación HTTPS. Ahora necesitas usar un Token de Acceso Personal (PAT).
#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





#Esto sincronizará tu repositorio local con los cambios recientes en la rama master
git push -u origin master


git remote set-url origin https://github.com/emmanull/P2.git
#eliminar el remonoto
git remote remove origin


#crear una nueva rama
git checkout -b masterErick
git push -u origin masterErick



















Render.com
Vercel
Fly.io