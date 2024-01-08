
# Angular Building Blocks - My Notes
---
## Angular's Working Principle
- Based on the MVC pattern.
  - **Controller**: `app.component.ts`
  - **Model**: `person.ts`
  - **View**: `app.component.html`

## Basic Angular Building Blocks:
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

---

## Components
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

---

## Data Binding Behavior
- In Angular, the concept of Binding refers to the live connection established between a model or function in the Component Class and an element or DOM object in the template.

### Types of Data Binding
- **Text Interpolation**: Used in the template to display a field/property value defined in the Component Class.
- **Property Binding**: Directly binds properties of HTML objects or directives in the template to data defined in the Component Class.
- **Event Binding**: Binds any DOM object event in the template to a function defined in the Component Class. Multiple functions can be bound to one event with the ';' symbol.
- **Two-Way Binding**: Enables instant updating of a field/property value in the Component Class when the value of a bound HTML object in the template changes, and vice versa.
- **Attribute Binding**: Binds the attributes of HTML elements directly to values from the Component Class.
- **Style and Class Binding**: Used for declaring CSS styles or classes for an HTML element.

---

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

---
