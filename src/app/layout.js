import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from '@/componentes/Menu';

export const metadata = {
  title: "eShop - LPE",
  description: "Estudo de caso desenvolvido em LPE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        <Menu/>
        {children}
      </body>
    </html>
  );
}
