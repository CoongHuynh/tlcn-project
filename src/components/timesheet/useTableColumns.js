import { useMemo } from "react";
import { format } from "date-fns";
import { getDay, isWeekend, getWeekdayShort } from "./utils";

export const useTableColumns = (daysOfMonth, clients, tasks) => {
  // Column headers: 2 rows (day, weekday)
  const colHeaders = useMemo(() => {
    const base = [
      "Client",
      "Task",
      "Total Hours",
      ...daysOfMonth.map((day) => getDay(day)),
    ];
    return base;
  }, [daysOfMonth]);

  const colHeaders2 = useMemo(() => {
    const base = [
      "",
      "",
      "",
      ...daysOfMonth.map((day) => getWeekdayShort(day)),
    ];
    return base;
  }, [daysOfMonth]);

  // Columns definition
  const columns = useMemo(() => {
    const base = [
      {
        data: "clientId",
        type: "dropdown",
        source: clients.map((c) => c.id),
        renderer: function (instance, td, row, col, prop, value) {
          const client = clients.find((c) => c.id === value);
          td.innerHTML = client ? client.name : "";
          td.className = "htDropdown";
          return td;
        },
        width: 160,
        allowInvalid: false,
      },
      {
        data: "taskId",
        type: "dropdown",
        source: tasks.map((t) => t.id),
        renderer: function (instance, td, row, col, prop, value) {
          const task = tasks.find((t) => t.id === value);
          td.innerHTML = task ? task.name : "";
          td.className = "htDropdown";
          return td;
        },
        width: 160,
        allowInvalid: false,
      },
      {
        data: "totalHours",
        type: "numeric",
        readOnly: true,
        width: 100,
        renderer: function (instance, td, row, col, prop, value) {
          td.innerHTML = `<div class='text-center font-bold text-accent'>${
            value || 0
          }</div>`;
          td.className = "htCenter";
          return td;
        },
      },
    ];
    // Day columns
    daysOfMonth.forEach((day) => {
      const key = `day_${format(day, "yyyy-MM-dd")}`;
      base.push({
        data: key,
        type: "numeric",
        width: 60,
        className: isWeekend(day) ? "weekend-cell" : "",
        validator: (value, callback) => {
          // Only allow numbers between 0.5 and 12, step 0.5
          if (value === null || value === "") return callback(true);
          const num = parseFloat(value);
          callback(num >= 0.5 && num <= 12 && num % 0.5 === 0);
        },
        renderer: function (instance, td, row, col, prop, value) {
          td.innerHTML = value || "";
          td.className = "htCenter" + (isWeekend(day) ? " weekend-cell" : "");
          return td;
        },
      });
    });
    return base;
  }, [daysOfMonth, clients, tasks]);

  return { columns, colHeaders, colHeaders2 };
}; 