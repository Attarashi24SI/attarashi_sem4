import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Error400() {
    return (
        <>

                    <div className="p-6">
                        <PageHeader title="Error 400" breadcrumb={["Home", "Error 400"]} />

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
                                    color: "#facc15",
                                    marginBottom: "10px",
                                }}
                            >
                                400
                            </h1>

                            {/* TEXT */}
                            <p style={{ fontSize: "18px", color: "#a16207", maxWidth: "500px" }}>
                                Bad Request. Permintaan yang kamu kirim tidak valid atau rusak.
                            </p>

                            {/* BUTTON */}
                            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                                <button
                                    style={{
                                        backgroundColor: "#facc15",
                                        color: "#000",
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
                                        backgroundColor: "#fff7ed",
                                        color: "#a16207",
                                        border: "1px solid #facc15",
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
                                    border: "1px solid #facc15",
                                    outline: "none",
                                }}
                            />
                        </div>
                    </div>

        </>
    );
}