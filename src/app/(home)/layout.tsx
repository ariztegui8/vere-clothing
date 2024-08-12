import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <Navbar />
            {children}
            <div className='bg-[#303030] py-8 px-4 md:px-6 xl:px-12'>
                <Footer />
            </div>
        </div>

    );
}