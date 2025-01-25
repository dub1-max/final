import calConfig from "@/static-data/calConfig";
import SectionTitle from "../Common/SectionTitle";
type CalenderProps = {
  googleCalenderUrl: string;
};

export default function Calendar({ googleCalenderUrl }: CalenderProps) {
  return (
    <section>
      <br />
      <div > 
        <SectionTitle
          
          mainTitle="Book A Session"
          title="Book A Session"
          paragraph=""
        />
      </div>
      <div>
        <iframe
          style={{
            width: "100%",
            height: "80vh",
            borderRadius: "8px",
            boxShadow:
              "0 8px 20px 0px rgba(0, 48, 241, 0.5), 0 8px 40px 0px rgba(5, 230, 238, 0.5)",
            overflow: "hidden",
          }}
          src={googleCalenderUrl}
        ></iframe>
      </div>
    </section>
  );
}
