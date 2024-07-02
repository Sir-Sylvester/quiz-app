import "./layout.css";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-darkNavy bg-lightGrey dark:text-white text-darkNavy font-RubikScribble">
      <div className={`min-h-svh w-full !bg-no-repeat !bg-cover background`}>
        <div className="max-w-screen-xl mx-auto py-8 px-12 space-y-8 md:space-y-16">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
