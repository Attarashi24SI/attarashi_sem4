import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Error401() {
    return (
        <>

                    <div className="p-6">
                        <PageHeader title="Error 401" breadcrumb={["Home", "Error 401"]} />

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
                                    color: "#3b82f6",
                                    marginBottom: "10px",
                                }}
                            >
                                401
                            </h1>

                            {/* TEXT */}
                            <p style={{ fontSize: "18px", color: "#1e40af", maxWidth: "500px" }}>
                                Unauthorized. Kamu perlu login untuk mengakses halaman ini.
                            </p>

                            {/* BUTTON */}
                            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                                <button
                                    style={{
                                        backgroundColor: "#3b82f6",
                                        color: "#fff",
                                        border: "none",
                                        padding: "10px 20px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => window.location.href = "/login"}
                                >
                                    Go to Login
                                </button>

                                <button
                                    style={{
                                        backgroundColor: "#eff6ff",
                                        color: "#1e40af",
                                        border: "1px solid #3b82f6",
                                        padding: "10px 20px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => window.location.href = "/"}
                                >
                                    Back to Home
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
                                    border: "1px solid #3b82f6",
                                    outline: "none",
                                }}
                            />
                        </div>
                    </div>

        </>
    );
}