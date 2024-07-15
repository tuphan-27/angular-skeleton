## Getting Started

**Angular Version**: v17.

**Css Library**: Tailwind.

**Store Management**: Ngxs.

**Coding Convention and Format**: Eslint, Husky, Prettier.

## Folder Structure

### @core

Includes Angular-related elements (directives, pipes, guards, interceptors, pipes, services) shared across modules in the app.

### @layouts

Includes components used to create layouts, such as navbar, header and footer.

### @store

Includes global store management for the app.

### @widgets

Includes shared components used across modules in the app. These components should handle non-business logic.

### pages

Includes modules handling non-business logic, such as the landing page or not-found page.

### shared

Includes Typescript elements (constants, enums, models, ultilities) shared across modules in the app.

### modules

Includes modules handling business logic. Each module should represent a specific feature.

### modules/shared

Includes shared modules handling business logic are used to accross featured modules.
