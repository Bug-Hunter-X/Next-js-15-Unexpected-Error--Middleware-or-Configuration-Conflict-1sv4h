```javascript
//middleware.js
export function middleware(req, res) {
  try {
    // Your middleware logic here
    // ...
  } catch (error) {
    console.error('Middleware error:', error);
    // Handle the error appropriately, e.g., redirect to an error page
    return NextResponse.redirect(new URL('/error', req.url));
  }
}

export const config = {
  matcher: ['/'] //or other relevant routes
};
```
By wrapping middleware logic in a `try...catch` block, you can handle errors gracefully, log detailed messages for debugging, and prevent the entire application from crashing due to unforeseen issues in your middleware functions.  Remember to adapt the error handling to your specific needs and application structure.