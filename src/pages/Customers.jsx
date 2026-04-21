import PageHeader from "../components/PageHeader";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";

export default function Customers() {
  return (
    <>
      <div className="flex bg-gray-100 min-h-screen">
        {/* SIDEBAR */}
        <Sidebar />

        <div className="flex-1">
          {/* HEADER */}
          <Header />

          <div className="p-6">
            <PageHeader />

            
          </div>
        </div>
      </div>
    </>
  );
}
