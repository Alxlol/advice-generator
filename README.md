## Tailwind CSS

My first project using Tailwind CSS. Had a few issues getting the built in breakpoints working, turns out I had to define the breakpoints in the tailwind.config.js under theme -> screens then rebuild tailwind (npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch)

# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](/design/desktop-design.jpg)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - For styles
