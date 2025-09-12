import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-background">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-2 text-primary">404</h1>
        <p className="text-lg text-muted-foreground mb-4">Halaman tidak ditemukan</p>
        <a href="/" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2">
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default NotFound;
