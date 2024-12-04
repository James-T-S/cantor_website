import Navbar from "./components/navbar";


export const metadata = {
  title: "Cantor College",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Navbar />

          
          {children}
          

          <footer>
            <ul>
              <li>How to find us:</li>
              <li>Cantor College</li>
              <li>Main Street</li>
              <li>Sheffield</li>
              <li>SC4 2BB</li>
              <li>Tel:(01321) 2340 235</li>
              <li>Fax: (01321) 2340 236</li>
              <li>Email: info@cantorcollege.ac.uk</li>
            </ul>
          </footer>
        </div>
      </body>
    </html>
  );
}