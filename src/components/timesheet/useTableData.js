import { useState, useEffect } from "react";
import { format } from "date-fns";
import { getDefaultRow } from "./utils";

export const useTableData = (timesheetData, daysOfMonth, clients, tasks) => {
  const [data, setData] = useState([]);

  // Ensure at least 5 rows
  useEffect(() => {
    let newData = timesheetData.map((row) => {
      const base = {
        clientId: row.clientId,
        taskId: row.taskId,
        totalHours: row.totalHours,
      };
      daysOfMonth.forEach((day) => {
        const key = `day_${format(day, "yyyy-MM-dd")}`;
        const dayData = row.dailyHours?.find(
          (d) => d.date === format(day, "yyyy-MM-dd")
        );
        base[key] = dayData?.hours || 0;
      });
      return base;
    });
    while (newData.length < 5) {
      newData.push(getDefaultRow(daysOfMonth, clients, tasks));
    }
    setData(newData);
  }, [timesheetData, daysOfMonth, clients, tasks]);

  const addRow = () => {
    setData((prev) => [...prev, getDefaultRow(daysOfMonth, clients, tasks)]);
  };

  const removeRow = () => {
    if (data.length > 1) setData((prev) => prev.slice(0, -1));
  };

  return { data, setData, addRow, removeRow };
}; 