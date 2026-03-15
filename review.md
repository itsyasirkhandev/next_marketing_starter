# Codebase Review: Next.js Starter with TanStack Query

This review evaluates the project based on its stated philosophies: "Performance above all else," "Good defaults," "Convenience," "Security," and its bold, direct design language.

## 1. Code Quality & Adherence to Best Practices

- **Missing TanStack Query Provider:** You have `@tanstack/react-query` installed, but there is no `QueryClientProvider` or `QueryClient` set up anywhere in the tree (e.g., in a `providers.tsx` file wrapped around `layout.tsx`). The library cannot be used in Client Components without it.
- **`next-seo` vs. App Router Metadata:** You have `next-seo` installed (`package.json`), but Next.js App Router (which you are using) has a powerful, built-in [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata). You are already using `export const metadata: Metadata` in `src/app/layout.tsx`. **Recommendation:** Uninstall `next-seo` to reduce dependency bloat and stick to the native Next.js API.
- **Feature-Sliced Architecture:** The `src/features` directory structure is excellent for scaling and maintainability. However, the empty `index.ts` files in `src/features/example/*` are exporting nothing. This can confuse linters or bundle analyzers. Consider using `.gitkeep` for scaffolding or adding meaningful template code.

## 2. Potential Bugs & Edge Cases

- **Server Component Compatibility in `axios.ts`:**
  - The commented-out authentication interceptor attempts to read from `localStorage` (`typeof window !== "undefined"`). If `axios` is used within Server Components to fetch data, this logic will bypass the token injection entirely, causing unauthorized errors on the server.
  - **Fix:** If you need authenticated SSR data fetching, you must read tokens using `cookies()` from `next/headers` (for server context) and only rely on `localStorage`/client cookies for Client Components.
- **Unused Radix UI Dependency:** You are using `@base-ui/react` (which is fantastic for performance) for primitives like `Button` and `Input`, but `@radix-ui/*` is still in `package.json`. If Radix is fully replaced by Base UI, remove the Radix dependencies to prevent bundle bloat.

## 3. Performance Optimizations

_(Philosophy: "Performance above all else")_

- **Font Loading Waterfall:** In `src/app/layout.tsx`, you are importing and loading **six** different variable fonts (`Geist`, `Geist_Mono`, `Inter`, `Playfair_Display`, `JetBrains_Mono`, `Roboto`). This creates unnecessary overhead, increasing First Contentful Paint (FCP) and degrading performance.
  - **Fix:** Only load the exact fonts used in your bold design language. For instance, drop `Roboto` and `Inter` if `Geist` and `Playfair_Display` represent your main typography.
- **`axios` vs. Native `fetch`:** Next.js heavily optimizes the native `fetch` API in the App Router, providing caching, memoization, and revalidation out of the box (`fetch(url, { next: { revalidate: 3600 } })`).
  - **Recommendation:** `axios` bypasses Next.js's native Data Cache. While `axios` is fine for client-side mutations, you should prefer a lightweight native `fetch` wrapper for server-side queries to fully utilize Next.js cache capabilities.

## 4. Readability & Maintainability

- **Bold Design Language:** The code directly reflects the "poster-like" design philosophy described in `GEMINI.md`. Using `tailwindcss/postcss` with `@theme inline` in `globals.css` keeps the theming remarkably clean and highly readable.
- **Component Structure:** The UI components in `src/components/ui` are cleanly abstracted and use `class-variance-authority` perfectly. They are easy to maintain.
- **Dead Code & Comments:** The `axios.ts` file has several commented-out blocks regarding tokens. Cleaning these up and moving the standard implementation into a documented guide will make the source code cleaner.

## 5. Security Concerns

_(Philosophy: "Security: Be VERY thoughtful")_

- **XSS Vulnerability with `localStorage`:** The suggested implementation in `axios.ts` stores the `auth_token` in `localStorage`. This is highly susceptible to Cross-Site Scripting (XSS) attacks.
  - **Recommendation:** Use `httpOnly`, `Secure`, `SameSite=Lax` cookies for session tokens. This ensures the token cannot be read by malicious JavaScript, fulfilling the "Security" mandate. Next.js Server Actions and `cookies()` make this very convenient to implement.
- **Error Leaks in Axios Interceptor:** The response interceptor logs raw `error.message` to `console.error`. If a backend error returns sensitive stack traces or internal URL paths, it could be exposed in the client's browser console. Always sanitize errors before logging them on the client.

## Summary of Action Items:

1.  **Add `<QueryClientProvider>`** to a client-side wrapper in the layout.
2.  **Remove `next-seo`** and rely strictly on the App Router Metadata API.
3.  **Trim unused Google Fonts** from `layout.tsx`.
4.  **Replace `localStorage` auth** with `httpOnly` cookies for secure SSR hydration.
5.  **Consider moving from Axios to a `fetch` wrapper** to unlock Next.js advanced caching.
