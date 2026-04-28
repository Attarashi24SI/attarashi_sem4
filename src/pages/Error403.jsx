import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Error403() {
    return (
        <>

                    <div className="p-6">
                        <PageHeader title="Error 403" breadcrumb={["Home", "Error 403"]} />

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "40px",
                            }}
                        >
                            {/* IMAGE */}
                            <img
                                src="/images/error.png"
                                alt="Error"
                                style={{ width: "200px", marginBottom: "20px" }}
                            />

                            {/* CODE */}
                            <h1
                                style={{
                                    fontSize: "72px",
                                    color: "#ef4444",
                                    marginBottom: "10px",
                                }}
                            >
                                403
                            </h1>

                            {/* TEXT */}
                            <p style={{ fontSize: "18px", color: "#7f1d1d", maxWidth: "500px" }}>
                                Forbidden. Kamu tidak memiliki akses ke halaman ini.
                            </p>

                            {/* BUTTON */}
                            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                                <button
                                    style={{
                                        backgroundColor: "#ef4444",
                                        color: "#fff",
                                        border: "none",
                                        padding: "10px 20px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => window.location.href = "/"}
                                >
                                    Go to homepage
                                </button>

                                <button
                                    style={{
                                        backgroundColor: "#fee2e2",
                                        color: "#7f1d1d",
                                        border: "1px solid #ef4444",
                                        padding: "10px 20px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Contact us
                                </button>
                            </div>

                            {/* SEARCH */}
                            <input
                                type="text"
                                placeholder="Search here"
                                style={{
                                    marginTop: "30px",
                                    padding: "12px 20px",
                                    width: "300px",
                                    borderRadius: "30px",
                                    border: "1px solid #ef4444",
                                    outline: "none",
                                }}
                            />
                        </div>
                    </div>

        </>
    );
}