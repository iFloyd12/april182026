import React, { useEffect } from "react";
import QRCode from "qrcode.react";

export default function Home() {
  useEffect(() => {
    // Dynamically load the add-to-calendar-button script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/add-to-calendar-button@2";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h1>Alice & Bob's Wedding</h1>
      <p>We're getting married on May 20, 2026 – and you're invited!</p>

      <h2>Add to Your Calendar</h2>
      <add-to-calendar-button
        name="Alice & Bob's Wedding"
        options="Google,Apple,Outlook.com,Microsoft365,ICS"
        location="Seaside Resort, Dreamland"
        startDate="2026-05-20"
        startTime="15:00"
        endTime="18:00"
        timeZone="Europe/London"
        description="Join us for our wedding celebration!"
        lightMode="system"
        buttonsList
      ></add-to-calendar-button>

      <h2 style={{ marginTop: 40 }}>Scan for Event Info</h2>
      <QRCode value="https://aliceandbobwedding.com" size={180} />
    </main>
  );
}
