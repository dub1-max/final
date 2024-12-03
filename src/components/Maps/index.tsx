
import mapConfig from "@/static-data/mapConfig"
// Define the type for props
type MapsProps = {
    googleMapUrl: string;
};

// Use the defined type for the props
export default function Maps({ googleMapUrl }: MapsProps) {
    return (
        <div
            style={{
                width: "100%",
                height: "60vh",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(51, 46, 61, 0.9)",
                overflow: "hidden",
                marginTop: "2rem",
            }}
        >
            <iframe
                src={googleMapUrl}
                style={{ width: "100%", height: "100%", border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

