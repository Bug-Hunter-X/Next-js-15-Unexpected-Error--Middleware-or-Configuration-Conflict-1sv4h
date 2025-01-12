```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello world!</div> 
  );
}
```
This simple Next.js 15 app might unexpectedly throw an error if you have a specific configuration or middleware interfering with the rendering process. For example, if you're using middleware to redirect or manipulate the request, and that middleware throws an error, it could lead to unexpected behavior or a blank screen, instead of the simple 'Hello world!' message.  The error might not be immediately obvious in the console, making it tricky to debug.