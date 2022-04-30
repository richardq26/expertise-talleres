# Expertise búsqueda de talleres

### Documentación de api:
[URL ENDPOITNS](https://documenter.getpostman.com/view/14224194/UyrGBZh9)
## Uso:
Para el uso de la api se requiere acceder a la URL en el punto "Documentación de api"                 

Los endpoints no se encuentran con autorización o restricción de algún tipo.      

### Comandos:   
npm run local => Iniciar serverless offline          
npm run test => Iniciar pruebas unitarias de servicios con jest   
npm run deploy => Desplegar en aws lambda         

### Arquitectura
![Image text](https://github.com/richardq26/expertise-talleres/blob/master/arquitectura.jpeg)   
                                       
### Diagrama de base de datos   
![Image text](https://github.com/richardq26/expertise-talleres/blob/master/DiagramaBD.png)  
            
### Sonarqube       
![Image text](https://github.com/richardq26/expertise-talleres/blob/master/sonar.png)

### Comandos git
Se utilizó git cherry-pick para solo pasar 2 commits de la rama develop a la rama master(producción)           
Sean los commits de develop:      
9aeac95     
830e210      
9e136fb          
Se realizan los comandos:             
git checkout master       
git cherry-pick 9aeac95     
git cherry-pick 9e136fb      