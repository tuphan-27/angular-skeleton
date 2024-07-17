## Technologies Used

**Angular Version**: v17.

**Css Library**: Tailwind.

**Store Management**: Ngxs.

**Coding Convention and Format**: Eslint, Husky, Prettier.

## Folder Structure

### @core

This folder includes Angular-related elements shared across modules in the app:
- Directives
- Guards
- Pipes
- Services

### @layouts

This folder includes components used to create layouts:
- Navigation Bar
- Header
- Footer

### @store

This folder includes the global store management in the app.

### @widgets

This folder includes shared components used accross modules in the app.
**Note**: these components should handle non-business logic and not depend on features.

- Button
- Popup
- Chart

### pages

This folder includes modules handling non-business logic. Each page represent for one routing,
- Landing Page
- 404 Page

### shared

This folder includes Typescript-related elements shared across modules in the app:
- Constants
- Models
- Enums
- Ultilities

### modules

This folder includes modules handling business logic. Each module should represent a specific feature.
- Dashboard
- Email Settings
- Account Settings

### modules/shared

This folder includes modules handling business logic are shared accross featured modules.
