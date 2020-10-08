const FloatingBox = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        --floaty-height: 96px;
        background: var(--purple700);
        box-shadow: 4px 4px hsl(170, 57%, 41%), 8px 8px hsl(170, 62%, 52%), 12px 12px hsl(170, 80%, 74%);
        border: 1px solid var(--primary-teal);
        border-radius: 4px 0px;
        padding: 16px 24px;
        height: var(--floaty-height);
        margin-top: calc(var(--floaty-height) / 2 * -1);
    `}</style>
  </div>
);

export default FloatingBox;
