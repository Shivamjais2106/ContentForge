// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
// import Footer from "@/components/footer/Footer";
// import {AuthProvider} from "@/context/AuthContext";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="flex flex-col min-h-screen">
//         <AuthProvider>
//         <Navbar />
//        <main className="flex-grow">
//         {children}
//        </main>
//         <Footer/>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }


// import { AuthProvider } from "@/context/AuthContext";
// import { ContentProvider } from "@/context/ContentContext";
// import Navbar from "@/components/navbar/Navbar";
// import Footer from "@/components/footer/Footer";
// import "./globals.css";

// export const metadata = {
//   title: "ContentForge",
//   description: "AI-powered content generation platform",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <AuthProvider>
//           <ContentProvider>
//             {children}
//           </ContentProvider>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }


import { AuthProvider } from "@/context/AuthContext";        // ← import karo
import { ContentProvider } from "@/context/ContentContext";  // ← import karo
import ConditionalLayout from "@/components/ConditionalLayout"; // ← import karo
import "./globals.css";

export const metadata = {
  title: "ContentForge",
  description: "AI-powered content generation platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ContentProvider>
            <ConditionalLayout>
              {children}
            </ConditionalLayout>
          </ContentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}