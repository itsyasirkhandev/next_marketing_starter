The role of this file is to describe common mistakes and confusions points that agents might encounter as they work in this project. If you ever encounter something in the project that surprises you, please alert the developer working with you and indicate that this is the case in the AgentMD file to help prevent future agents from having the same issue. 

## Agent info

Generally speaking, you should browse the codebase to figure out what is going on.

We have a few "philosophies" I want to make sure we honor throughout development:

### 1. Performance above all else

When in doubt, do the thing that makes the app feel the fastest to use.

This includes things like

- Optimistic updates
- Using the custom data loader patterns and custom link components with prewarm on hover
- Avoiding waterfalls in anything from js to file fetching

### 2. Good defaults

Users should expect things to behave well by default. Less config is best.

### 3. Convenience

We should not compromise on simplicity and good ux. We want to be pleasant to use with as little friction as possible. This means things like:

- All links are "share" links by default
- Minimize blocking states to let users get into app asap

### 4. Security

We want to make things convenient, but we don't want to be insecure. Be thoughtful about how things are implemented. Check team status and user status before committing changes. Be VERY thoughtful about endpoints exposed "publicly". Use auth and auth checks where they make sense to.


## Design Language

### Philosophy
Brutalist, typographic, minimal. The design should feel bold and direct—like a poster, not a dashboard. Prioritize clarity over decoration. Let typography and whitespace do the heavy lifting.

### Typography
- **Headings**: Font-black (900 weight), tight tracking
- **Body**: Regular weight, clean and readable
- **Monospace**: For technical info, timestamps, stats
- Use size contrast dramatically—massive headlines with small supporting text



### Interactive Elements
- Buttons: Solid backgrounds with bold text, clear hover states
- Links: Underlines, not color-only differentiation
- Hover states: Background fills or color shifts, no subtle opacity changes


### Do's
- Use bold typography to create hierarchy
- Embrace whitespace
- Keep interactions obvious and direct

### Don'ts
- No gradients or shadows (except subtle where functional)
- No decorative icons—only functional ones
- Don't hide information behind hover states

also I am using pnpm as my package manager, so use pnpm instead of npm

I am on windows and I have powershell 5 installed so use the commands that powershell 5 supportss