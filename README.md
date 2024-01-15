
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

## Angular Forms - Consepts & Approaches
- Form yapilanmasi kullaniclardan veri alabilmek yahut etkilesime girebilmek icin kullanilan yapilardir.
- Template-Driven Forms ve Model-Driven/Reactive Forms olamk uzere iki yaklasimla kullanilabilmektedirler.  
- Template-Driven Form: 
  - Angular Forms yapisini olusturmanin kolay yoludur.
  - Form elemenlarinin her birini 'ngModel' direktifi ile isaretleyerek calisma sergilemektedir.
  - Formun tasarimini ve yapilanidrmasini tamamen template uzerinden gerceklestirir.
- Model-Driven/Reactive Form:
  - Template-Driven Form'lara nazaran daha karmasik form islemleri icin uygun olan yaklasimdir.
  - Bu yaklasimda formun temel mantigi component uzerinde bir nesne/object olarak tanimlanir ve bu nesne HTML'de ki ilgili form etiketlerine bind edilir.
  - Bu yaklasimda form elemenlari ve bu form elemanlarindaki verilen degisiklik durumlari ilgili nesne tarafindan reaktif bir sekilde/dinamik olarak takip edilmektedir.
- Angular Form Konseptleri:
  - FormGroup: Bir form icerisinde bulunan bir grup kontrolu temsil eder. Icerisinde FormControl nesneleri barindirir.
  - FormArray: Form icerisinde dinamik olarak olusturulan kontrolleri temsil eden dizisel nesnedir.
  - FormControl: Form icerisinde bulunan, kullanicidan veri almamizi saglayacak olan tek bir kontrolu temsil eder.
  - FormBuilder: FormGroup, FormControl ve FormArray nesnelerini olusturmamizi kolaylastiacak olan bir servistir. Icerisindeki hazir fonksiyonlar sayesinde formu hizlica uretebilmemizi ve konfigure etmemizi saglar. 
  - FormGroup ile FormArray arasindaki en temek fark, FormGroup sabit bir form bolumunu temsil ederken, FormArray dinamik olarak yulenen form elemanlarni temsil eder.  
