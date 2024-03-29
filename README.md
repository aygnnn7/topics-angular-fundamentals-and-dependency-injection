
# Angular - My Notes

## Angular Fundamentals
### Angular's Working Principle
- Based on the MVC pattern.
  - **Controller**: `app.component.ts`
  - **Model**: `person.ts`
  - **View**: `app.component.html`

### Basic Angular Building Blocks:
- Modules
- Components
- Data Binding
- Dependency Injection
- Directives
- Decorators
- Services
- Templates
- Guards
- Pipes
- Metadatas

### Modules
- Structure allows grouping of application elements.
- `app.module` is usually the basic module.
- Modules must import each other to use elements.
- Use dependency injection.
- Use lazy loading for optimization.

### Components
- Represent the viewing layer.
- Consist of HTML and TypeScript files.
- Use data binding for model interaction.
- Can obtain service instances through dependency injection.

### Data Binding
- Facilitates dynamic data flow between model and templates.
- Changes in data automatically reflected on pages.
- Two-way binding: updates in model or template are instantly reflected.

### Dependency Injection
- Manages dependencies among application elements.

### Directives
- Special tags to manage HTML element behaviors and appearances.

### Decorators
- TypeScript feature used by Angular.
- Add metadata to classes or class members.
- Example: `@Component`, `@Injectable` decorators.

### Services
- Used for communication with external services (APIs), complex operations, or inter-component communication.

### Templates
- The HTML part of components.
- Contain HTML codes and Angular elements like directives, pipes.
- Support Data Binding.

### Guards
- Control permissions for route access.
- Decide user access during transitions.

### Pipes
- Process data during display.
- Convert data into different formats like date or currency.

### Components
- Pages presenting content to users.
- Each component is independent in functionality and appearance.
- Maintenance is modular and segmented.

### Component Elements:
- **Template**: Visual part (`templateUrl`). Can be done directly in .ts file.
- **Style**: Design part (`styleUrls`) for CSS, SCSS, etc.
- **Component Class**: Main element (.ts file). Manages data display and function processing.
- **Selector**: Reference property defining how to call the component.

### Metadata Decorator - '@'
- Defines how a component is configured, defined, and used.
- Example: `@Component{}`

### Data Binding Behavior
- In Angular, the concept of Binding refers to the live connection established between a model or function in the Component Class and an element or DOM object in the template.

### Types of Data Binding
- **Text Interpolation**: Used in the template to display a field/property value defined in the Component Class.
- **Property Binding**: Directly binds properties of HTML objects or directives in the template to data defined in the Component Class.
- **Event Binding**: Binds any DOM object event in the template to a function defined in the Component Class. Multiple functions can be bound to one event with the ';' symbol.
- **Two-Way Binding**: Enables instant updating of a field/property value in the Component Class when the value of a bound HTML object in the template changes, and vice versa.
- **Attribute Binding**: Binds the attributes of HTML elements directly to values from the Component Class.
- **Style and Class Binding**: Used for declaring CSS styles or classes for an HTML element.

### Interpolation Syntax
- In Angular, using the `{{..}}` operator to utilize any field or property value from the Component Class in HTML is known as Text Interpolation, and this expression is referred to as Interpolation Syntax.
- Interpolation performs One-Way Data Binding.
- It is structurally used only to read field or property values, thus reflecting them in the Template. It cannot perform any operation that might change the state of the application.
- Operations not used with interpolation include assignment operators, `new`, `typeof` keywords, `;` operator, increment/decrement operators, and bitwise operators.
- Allowed operations include arithmetic operations, string concatenation, template references, and function triggering.
- Interpolation directly prints HTML/script codes as plain text without handling them.
- Using `ngNonBindable` within an HTML tag disables the interpolation operator in that tag, printing its content as text without compilation.
- Additional usable structures include:
  - Pipes (e.g., `{{text | uppercase}}`)
  - Nullable operator `?` - used against null situations.
  - Non-Null Assertion operator `!` - used when you're certain something is not null.

### Directives
- Special tags used to add extra properties and behaviors to HTML elements.
- To impart a targeted behavior to an HTML element with a directive, simply declaring the directive's selector is sufficient.
- Built-in directives include:
  - `ngFor`: Used for iteration.
  - `ngIf`: Controls the visibility of HTML objects based on a condition.
  - `ngSwitch`: Controls visibility or content of HTML objects based on a condition, used with `ngSwitchCase` and `ngSwitchDefault`.
  - `ngClass`: Dynamically manages class values of HTML tags.
  - `ngStyle`: Dynamically manages style values of HTML tags.
  - `ngModel`: Facilitates two-way data binding operations in form objects.
  - `ngNonBindable`: Disables the effect of the Text Interpolation operator.

### Structural Directives
 - A type of directive that allows us to make changes on the page by physically manipulating the HTML object and the DOM structure. 
 - Structural directives are called with the * character.
 - Structural directives can physically change the structure of the template by altering the appearance of DOM elements in the HTML template.
 - Normal directives do not change the appearance of DOM elements in the HTML template; they only add extra features. 
 - TemplateRef represents the template used by the directive. 
 - ViewContainerRef is a reference to the container that holds the content of a template in Angular. This container is used to dynamically add or remove HTML elements.

### What is a Pipe?
- A structure specific to Angular used to change the way data is displayed.
- Built-in pipes:
	- Currency Pipe: Converts numerical values to a monetary format. (Uses the application's default currency)
	- DatePipe: Formats date values.
	- SlicePipe: Allows access to certain ranges in arrays.
	- JsonPipe: Converts an object to JSON format.
	- UpperCasePipe: Converts textual values entirely to uppercase.
	- LowerCasePipe: Converts textual values entirely to lowercase.
	- TitleCasePipe: Capitalizes the first letter of each word in the text.
	- KeyValuePipe: Allows access to both the key and value of data in Key-Value format.
	- PercentPipe: Formats numerical values as percentages.
	- and others.
- A pipe can be created via the terminal instruction "ng g p ...".
- The name of a pipe class should conventionally include 'Pipe'.
- A pipe must implement PipeTransform.
- A pipe must be declared with @Pipe and named using name: 'x'.
- The 'transform' function in a pipe is the function that manipulates/transforms the value used by the pipe.
- The 'transform' function's value parameter gives us the value we are working on, while args provide us the parameters we are working with. Alternatively, we can define parameters ourselves like a:number, b:string.

## What is Angular Component Communication?
- Angular Component Communication is a concept that refers to the processes of sharing data and events between Angular components.
- Parent to Child Communication - The method used to send data from a parent component to a child component. Here, the input method is used.
- Child to Parent Communication - The method used to send data from a child component to a parent component. Here, the output method is used.

## Component Life Cycle Hook
- Bir angular componentinin olsuturudugu andan itibaren silindigi/imha edildigi ana kadar surecteki belirli noktalarda calistirilmasi icin tasarlanmis olan davranissal metotlari ifade etmektedir. Bir componentin yasam surecinde uygun noktalardaki tepkilerini/reflekslerini ifade eden bir kavramdir.
- Bu metotlar; uygulamanin kullanimi surecinde, component'in veri guncellemesi, DOM ile etkilesime girmesi veyahut takip edlien verilerdeki degisimler gibi gorevleri yerine getirmenize yardimci olabilirler.
- General order of the methods/events:
  1. constructor: Initially, the constructor is triggered programmatically.
  2. ngOnChanges: This is triggered when the component's Input variables change via selector reference.
  3. ngOnInit: Triggered when the component is first created.
  4. ngDoCheck: Often triggers this method when the component is updated. It works in the change detection cycle.
  5. ngAfterContentInit: Triggered when the content of the component is created for the first time.
  6. ngAfterContentChecked: Triggered when the content of the component is updated.
  7. ngAfterViewInit: Triggered when the component's view/template is first created.
  8. ngAfterViewChecked: Triggered when the component's view/template is updated.
  9. ngOnDestroy: Triggered when the component is being removed or destroyed.

## Forms - Consepts & Approaches
- Form structures are used to collect data from users or interact with them.
- There are two approaches to using them: Template-Driven Forms and Model-Driven/Reactive Forms.

### Template-Driven Form:
  - A simpler way to create Angular Forms structure.
  - Works by marking each form element with the 'ngModel' directive.
  - The design and structure of the form are entirely carried out through the template.

### Model-Driven/Reactive Form:
  - A more suitable approach for complex form operations compared to Template-Driven Forms.
  - In this approach, the basic logic of the form is defined as an object on the component and this object is bound to the corresponding form tags in HTML.
  - In this approach, form elements and changes in these form elements are reactively/dynamically tracked by the related object.

### Angular Form Concepts:
  - **FormGroup**: Represents a group of controls within a form. Contains FormControl objects.
  - **FormArray**: A sequential object representing dynamically created controls within a form.
  - **FormControl**: Represents a single control within a form that allows us to collect data from the user.
  - **FormBuilder**: A service that facilitates the creation of FormGroup, FormControl, and FormArray objects. With its ready-to-use functions, it allows us to quickly produce and configure the form.
  - The primary difference between FormGroup and FormArray is that while FormGroup represents a fixed section of a form, FormArray represents dynamically loaded form elements.


## Forms - Changing the Status

### What is Changing the Status?
- The concept of changing the status refers to a set of functions in Angular that allow us to programmatically change the state of a form structure.
- Through these functions, we can programmatically or via user interface change the status of a form and its controls, and generally update their state.

### `markAsTouched` Function
- This function changes the 'touched' property of a form or any control within it to true if any action is taken.
- If you set the 'onlySelf' parameter to true in this function, it will only affect the 'touched' property of the structure in which it's used.
**Example:**
- `this.frm.get("name").markAsTouched()` -> `name control touched: true`

### `markAllAsTouched` Function
- Changes the touched value of all controls under a form group to true.

### `markAsUntouched` Function
- This function sets the touched property of the triggered form or form control to false. It is preferred for programmatic touches when indicating that the related structure has not been touched.

### `markAsDirty` Function
- This function allows us to programmatically change the 'dirty' value of the relevant form or form control.

### `markAsPristine` Function
- This function enables us to change the 'pristine' value of the relevant form or form control to true. Thus, it can appear as if the form has not been touched or worked on.

### `disable & enable` Functions
- `disable`: Deactivates the form/control where it is used.
- `enable`: Activates the form/control where it is used.



## Forms - Validations
- In Angular architecture, there are two types of validators: sync validators and async validators.
- Validators in Angular architecture are functions.

### Built-in Validators
- Within Angular's ReactiveForms module, there are a few ready-to-use built-in validators. These include: `min`, `max`, `required`, `requiredTrue`, `email`, `minlength`, and `maxlength`.
**Usage example**: `name: ["", Validators.required]`

### Obtaining Validation and Error Messages
- In the validation processes of form structures, if there are errors, we need to provide users with short and meaningful messages about these errors.

### Creating Custom Validators
- For this, we can use the ValidatorFn interface.
### Async Validator
- This type of validator is generally used for processes that require data from an external service for validation, which are typically long-running.

### Comparison Validators
- Used when comparing values of two different controls. These validators are given to FormGroup rather than FormControl. This allows simultaneous access to two or more controls. Example applications: Password verification, start-end date compatibility, etc., where two control comparisons are needed.

## Dependency Injection
- The dependency injection pattern is built-in.
- In Angular, there are five actors for Dependency Injection: consumer, dependency, injection token (DI Token), provider, and injector.

### Consumer:
- The class that needs the dependency (e.g., Component, directive, service, etc.).

### Dependency:
- The service that is desired to be in the consumer.

### Injection Token (DI Token):
- A value that uniquely identifies dependencies.

### Provider:
- Where dependencies are stored along with the Injection Token (IoC Container).

### Injector:
- Structures that allow us to inject dependencies at the required points. They use the DI Token in the injection process.

### `@Injectable` Decorator
- If you want to directly inject a class without adding it to the provider, you can mark the class with the `@Injectable` decorator and set the `providedIn` property to `root`.
- Generally the services in Angular are marked with `@Injectable` decorator.


### `providedIn` Parameter of `@Injectable`
- `providedIn: 'root'`: This value ensures that the related service is added as a singleton to the application's main module. The service can be accessed from anywhere in the application and will be provided as a singleton.
- `providedIn: 'any'`: This option provides the service in a way that allows multiple instances. It will generate a new instance for each module, leading to the creation of a new instance for every module.
- `providedIn: 'platform'`: This value indicates that the services are specific to the platform. It is typically used in services designed for platform-independent applications like Universal.

### Types of Providers
- Class Provider: Used when a type/class is to be provided.
- Value Provider: Used when we want to provide simple/textual values and functions.
- Factory Provider: Used when configuring the service to be provided requires external configuration values, connection to an API due to different needs, or if the object to be provided should exhibit different behaviors under certain conditions. This need can be fulfilled using `useFactory`.
- Aliased Class Provider: Used when we want to represent a provided service with a different reference. It essentially allows us to give an alias to the provided service.

### `@Self` Decorator
The `@Self` decorator instructs that the relevant dependency should only be sought in the current component or directive.

### `SkipSelf` Decorator
The `SkipSelf` decorator, on the other hand, instructs that the relevant dependency should be sought not in the component but in a parent component where it is called.

### `Optional` Decorator
Makes access to the relevant dependency optional.

### View Providers
The `viewProviders` property allows providing services to all child components and directives referenced in the template of the component where it is used.

## What is a Service in Angular?
- In Angular architecture, a service is essentially a class that performs a specific function/operation/responsibility.
- We often use service structures to take on the business logic responsibilities in components.
- The component will utilize the service to fulfill this responsibility, thereby freeing the components from handling business processes.
- Services can be more effectively used and managed with the `@Injectable` decorator, alongside the dependency injection mechanism.
- A service can be created using the command `ng g s services/example`.

### Areas of Use:
- Can be used while conducting business logic.
- Can retrieve data from any external service or API.
- Can maintain the general state of the application.
- Can facilitate data communication between components.
