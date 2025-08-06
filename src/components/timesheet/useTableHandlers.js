import { format } from "date-fns";

export const useTableHandlers = (data, setData, daysOfMonth, updateRow, updateDailyHours) => {
  // Custom header renderer for 2 rows
  const afterGetColHeader = (col, TH, colHeaders, colHeaders2) => {
    if (col < 0) return;
    if (!TH) return;
    // Remove old
    while (TH.firstChild) TH.removeChild(TH.firstChild);
    // Top: day
    const dayDiv = document.createElement("div");
    dayDiv.textContent = colHeaders[col];
    dayDiv.style.fontWeight = "bold";
    dayDiv.style.fontSize = "14px";
    dayDiv.style.textAlign = "center";
    // Bottom: weekday
    const weekDiv = document.createElement("div");
    weekDiv.textContent = colHeaders2[col];
    weekDiv.style.fontSize = "12px";
    weekDiv.style.color = "#888";
    weekDiv.style.textAlign = "center";
    TH.appendChild(dayDiv);
    TH.appendChild(weekDiv);
  };

  // Handle cell changes
  const handleAfterChange = (changes, source) => {
    if (!changes || source === "loadData") return;
    const newData = [...data];
    changes.forEach(([row, prop, oldValue, newValue]) => {
      if (row === data.length) return; // ignore total row
      if (prop === "clientId" || prop === "taskId") {
        newData[row][prop] = newValue;
        updateRow(row, prop, newValue);
      } else if (prop.startsWith("day_")) {
        newData[row][prop] = newValue;
        updateDailyHours(row, prop.replace("day_", ""), newValue);
        // Update totalHours for the row
        const total = daysOfMonth.reduce((sum, d) => {
          const k = `day_${format(d, "yyyy-MM-dd")}`;
          return sum + (parseFloat(newData[row][k]) || 0);
        }, 0);
        newData[row]["totalHours"] = total;
      }
    });
    setData(newData);
  };

  return { afterGetColHeader, handleAfterChange };
}; 