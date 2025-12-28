export const BackgroundTexture = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      {/* Floating leaves */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute top-[20%] left-[10%] text-4xl animate-float">🍃</span>
        <span className="absolute top-[40%] right-[15%] text-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}>🌿</span>
        <span className="absolute top-[60%] left-[20%] text-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }}>🍃</span>
        <span className="absolute top-[80%] right-[25%] text-4xl animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }}>🌿</span>
      </div>
    </div>
  );
};
