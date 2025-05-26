import React, { useState } from "react";

const days = [
  { title: "יום 1 – 17.9 – הגעה לטוקיו", activities: ["נחיתה בטוקיו, צ’ק-אין למלון בשינג’וקו/שיבויה", "טיול קל: גני שינג’וקו, ארוחת ערב מקומית"] },
  { title: "יום 2 – 18.9 – נסיעה לקיוטו", activities: ["נסיעה בשינקנסן לקיוטו (Nozomi – כשעתיים)", "שוק נישיקי, מקדש קיומיזו-דרה, אזור גיון"] },
  { title: "יום 3 – 19.9 – קיוטו", activities: ["קינקאקוג’י, יער הבמבוק בארשיאמה, גשר טוגטסוקיו"] },
  { title: "יום 4 – 20.9 – אוסקה + אקספו 2025", activities: ["נסיעה לאוסקה, ביקור באקספו ביומשימה, שופינג בדוטונבורי, חזרה לקיוטו"] },
  { title: "יום 5 – 21.9 – קיוטו", activities: ["פושימי אינארי, שוק אוכל, מוזיאון או מרחצאות אונסן"] },
  { title: "יום 6 – 22.9 – אוסקה", activities: ["טירת אוסקה, אקווריום קאיוקאן, אמריקאמורה, חזרה לקיוטו"] },
  { title: "יום 7 – 23.9 – קיוטו", activities: ["מוזיאון התרבות או מנגה, שיטוט ברובע פילוסופים"] },
  { title: "יום 8 – 24.9 – יום חופשי בקיוטו", activities: ["חזרה למקומות אהובים, זמן קניות או מנוחה"] },
  { title: "יום 9 – 25.9 – חזרה לטוקיו", activities: ["נסיעה חזרה לטוקיו, שיבויה: מעבר שיבויה, קניון שיבויה 109"] },
  { title: "יום 10 – 26.9 – הר פוג’י", activities: ["טיול יום לקוואגוצ’יקו, תצפיות, אגם קוואגוצ’י, חזרה לטוקיו בערב"] },
  { title: "יום 11 – 27.9 – אקיהברה והרג’וקו", activities: ["בוקר: אקיהברה – אלקטרוניקה, צהריים וערב בהר’גוקו + ביקור ב-Fender Flagship Tokyo"] },
  { title: "יום 12 – 28.9 – גינזה", activities: ["גינזה: מותגים, כלבו, יוניקלו, שוק טסוקיג’י"] },
  { title: "יום 13 – 29.9 – אופציה: דיסנילנד/אודייבה", activities: ["יום מלא בדיסני או באודייבה – מוזיאונים, קניות ונוף"] },
  { title: "יום 14 – 30.9 – יום חופשי בטוקיו", activities: ["חזרה לאזורים שאהבתם, קניות אחרונות, קפה עם נוף"] },
  { title: "יום 15 – 1.10 – מנוחה והתארגנות", activities: ["זמן חופשי לקראת טיסה, סידור מזוודות"] },
  { title: "יום 16 – 2.10 – טיסה בלילה", activities: ["צ'ק-אאוט מהמלון, טיסה חזרה לישראל"] }
];

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ direction: "rtl", padding: 20, fontFamily: "sans-serif" }}>
      <h1>טיול ליפן 2025</h1>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap", marginBottom: 10 }}>
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            style={{
              margin: 4,
              padding: 8,
              border: selected === index ? "2px solid blue" : "1px solid gray",
              background: selected === index ? "#eef" : "#fff",
              cursor: "pointer"
            }}
          >
            {day.title.split(" – ")[0]}
          </button>
        ))}
      </div>
      <div style={{ border: "1px solid #ccc", padding: 10 }}>
        <h2>{days[selected].title}</h2>
        <ul>
          {days[selected].activities.map((act, i) => (
            <li key={i}>{act}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
