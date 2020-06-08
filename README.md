# Test Unitario con Angular y Jasmine
En este repositorio, encontrarás divididos en varias capas de nivel, ejemplos de formas de testear codígo en **Angular** con **Jasmine** y **Karma**.

## Recuerda que para poder correr las pruebas necesitas ejecutar los comandos

**ng test** *(para levantar el test)*

**ng test --code-coverage** *(está creara una carpeta a nivel de scr con las estadisticas de cuanto esta testeado nuestro codigo, solo es necesario abrir el archivo index.html)*
	
## Recuerda que existen 3 maneras de realizar Test en un proyecto
* **Test Unitarios:** *ésta consiste en probar unidades pequeñas de código.*

* **Test de Integración:** *nos permite probar la interacción entre varios componentes y APIS.*

* **Test End to End (E2E):** *consiste en probar toda la aplicación de punta a punta simulando la iteracción del usuario, estas suelen consumir mucho tiempo.*
	
## Tipos de Framework de Testing
Usualmente Angular utiliza el framework Jasmine con la libreria Karma para realizar testing, existen otros tales como Mocha con librerias como Chai y Sinon.
estás se diferencian por contener distintas funcionalidades y practicidad.

###### Si usas Jasmine, usarás cosas como:
	Karma ( para el Test Runner )
	Sinon ( posibilidad de usar fake servers )

###### Si usas Mocha, usarás cosas como:
	Chai ( para afirmaciones )
	Sinon ( para dobles de prueba y fake servers)
	Karma o Mocha CLI ( como test runner )
	
## Test Unitarios con Jasmine 
Basicamente las estructuras de los test unitarios se componen de la siguiente manera
###### Ejemplo
```
	describe("Mi primer Test Unitario", ()=>{
		it("Mi variable debe contener un 'Hola Mundo'", ()=>{
			let string = "Hola Mundo";
			expect( string ).toContain("Hola Mundo");
		});
	});
```

* **describe:** define una colección de test, esta función recibe dos parámetros, un string con la cual vamos a identificar la suite de prueba y una función de flecha, que esta va a contener nuestras pruebas.
* **it:** define un test en particular, esta función recibe como parámetros, un string identificador del test y una función de flecha que incluirá nuestra lógica de algoritmos a testear.
* **expect:** lo que espera recibir del test, es decir, se evalua el resultado de la prueba y esta se verifica mediante las condiciones que le apliquemos que sea verdadera.
	
Otra particularidad de los test es que podemos ejecutar funcionalidad

* _antes y después de_ **`cada`** _prueba._
* _antes y después de_ **`todas`** _las pruebas._

con las siguentes funciones:

* **beforeAll:** *se ejecuta una unica vez antes de todas las pruebas.*
* **afterAll:** *se ejecuta una unica vez despues de todas las pruebas.*
* **beforeEach:** *se ejecuta antes de cada una de las pruebas.*
* **afterEach:** *se ejecuta despues de cada una de las pruebas.*
	
###### Ejemplo
````
	describe('Pruebas con Before y After functions', () => {
		let expected = "";
		
		beforeAll(() => {
			console.log("Inicia la prueba");
		});
		
		beforeEach(() => {
			expected = "Hola Mundo";
		});

		afterEach(() => {
			expected = "";
		});

		it('dice Hola', () => {
			expect(helloWorld())
				.toEqual(expected);
		});
		
		afterAll(() => {
			console.log("Finalizó la prueba :D");
		});
	});
````


## Como saltear pruebas unitarias ya probadas para mejorar el tiempo de pruebas
Una de las ventajas que tiene Jasmine al igual que Mocha, es poder skippear o saltear pruebas que ya realizamos, ya sea por cuestión de tiempo o alguna necesidad,recuerda que el tiempo de testeo es proporcional con el tamaño de nuestro proyecto y el tipo de capa que usemos para realizarlos, no es lo mismo realizar pruebas unitarias que un E2E, donde el primero puede realizarse de forma independiente al resto del proyecto y el ultimo no.

La forma para poder realizar el skip de nuestro test es anteponiendo el carácter **x**, esto funciona para cualquier método antes visto.
###### Ejemplo
````
	describe('Prueba de Skipear una función', () => {
		let expected = "";

		beforeEach(() => {
			expected = "Hola Mundo";
		});

		afterEach(() => {
			expected = "";
		});
		
		xafterAll(()=>{
			expect = "Hola soy una función skippeada!!";
		})

		it('dice Hola', () => {
			expect(helloWorld())
				.toEqual(expected);
		});
	});
````


## Usando un servicio mediante el uso de Spy (espias)
Jasmine ofrece tambien la posibilidad de obtener una clase y devolver directamente lo que nos interese sin tener que ejecutar sus metodos internamente.

Con la función **spyOn()** podemos hacer que un servicio nos retorne un valor que esperemos para ser evaluada. 

La estructura de esta función esta compuesta por dos parámetros, el servicio y el nombre del metodo que queremos testear.

###### Ejemplo
````
import {LoginComponent} from './login.component';
import {AuthService} from "./auth.service";

  describe('Prueba componente Login', () => {

    let component: LoginComponent;
    let service: AuthService;
    let spy: any;

    beforeEach(() => { 
      service = new AuthService();
      component = new LoginComponent(service);
    });

    afterEach(() => { 
      service = null;
      component = null;
    });


    it('El servicio de autenticación debe retornar verdadero si se pudo loggear', () => {
      spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
      expect(component.isLogged()).toBeTruthy();   
    });
  });
````

## Pruebas de formularios sin renderizarlos
Los test tambien nos dan la posibilidad de poder realizar pruebas de formularios sin tenerlos renderizados
veamos un ejemplo:

###### Ejemplo
````
import { LoginForm } from "./form";
import { FormBuilder } from "@angular/forms";

describe("Pruebas Formularios", () =>{
    let formulario: LoginForm;

    beforeEach( ()=> formulario = new LoginForm( new FormBuilder() ) );

    it("Debe de crear un formulario con dos campos",()=>{
        expect( formulario.form.contains('email')).toBeTruthy();
        expect( formulario.form.contains('password')).toBeTruthy();
    });

    it("El email debe de ser obligatorio",()=>{
        const control = formulario.form.get('email');
        control.setValue('');

        expect( control.valid ).toBeFalsy();
    });

    it("El email debe de ser valido",()=>{
        const control = formulario.form.get('email');
        control.setValue('unitaryTest@miemail.com');

        expect( control.valid ).toBeTruthy();
    });
})
````

Asi tambien nos ofrecen la posibilidad de interactuar con eventos como si fueramos usuarios
veamos un ejemplo

###### Ejemplo
````
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    it("Debe de llamar al servidor para borrar un medico", ()=>{

        spyOn(window, "confirm").and.returnValue(true); //<- aqui se emula la acción del evento "confirm" y se selecciona "Si"

        const espia = spyOn(servicio, "borrarMedico").and.returnValue(empty());

        componente.borrarMedico("1");

        expect( espia ).toHaveBeenCalledWith("1");
    })

    it("No debe de llamar al servidor para borrar un medico", ()=>{

        spyOn(window, "confirm").and.returnValue(false); //<- aqui se emula la acción del evento "confirm" y se selecciona "No"
        const espia = spyOn(servicio, "borrarMedico").and.returnValue(empty());

        componente.borrarMedico("1");

        expect( espia ).not.toHaveBeenCalledWith("1");
    })


});
````


**_Como ven los Test Unitarios nos da las posibilidad de poder analizar y probar en su totalidad nuestro codigo independientemente de nuestro HTML o incluso un Backend, y dandonos como resultado un codigo más solido y fiable garantizandonos un incremento de calidad del mismo._**



> by *Ricardo Maldonado* | [maldonadoricardo93@gmail.com]
