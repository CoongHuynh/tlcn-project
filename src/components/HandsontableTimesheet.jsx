import React, { useRef, useEffect, useMemo, useState } from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import Handsontable from "handsontable";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import "handsontable/dist/handsontable.full.css";

registerAllModules();

const getWeekdayShort = (date) => {
  // 0: Sunday, 1: Monday, ...
  return format(date, "EEE", { locale: enUS });
};

const getDay = (date) => format(date, "d");

const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

const getDefaultRow = (daysOfMonth, clients, tasks) => {
  return {
    clientId: clients[0]?.id || 1,
    taskId: tasks[0]?.id || 1,
    totalHours: 0,
    ...Object.fromEntries(
      daysOfMonth.map((day) => [`day_${format(day, "yyyy-MM-dd")}`, 0])
    ),
  };
};

const HandsontableTimesheet = ({
  daysOfMonth,
  timesheetData,
  clients,
  tasks,
  updateRow,
  updateDailyHours,
  copyRow,
  deleteRow,
  getTotalHoursForDate,
  getGrandTotal,
}) => {
  const hotTableRef = useRef(null);
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

  // Add total row at the end
  const getTableDataWithTotal = () => {
    const tableData = [...data];
    // Calculate total for each day column
    const totalRow = {
      clientId: "",
      taskId: "",
      totalHours: data.reduce(
        (sum, r) => sum + (parseFloat(r.totalHours) || 0),
        0
      ),
    };
    daysOfMonth.forEach((day) => {
      const key = `day_${format(day, "yyyy-MM-dd")}`;
      totalRow[key] = data.reduce(
        (sum, r) => sum + (parseFloat(r[key]) || 0),
        0
      );
    });
    tableData.push(totalRow);
    return tableData;
  };

  // Custom header renderer for 2 rows
  function afterGetColHeader(col, TH) {
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
  }

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

  // Add/remove row handlers
  const handleAddRow = () => {
    setData((prev) => [...prev, getDefaultRow(daysOfMonth, clients, tasks)]);
  };
  const handleRemoveRow = () => {
    if (data.length > 1) setData((prev) => prev.slice(0, -1));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex gap-2 p-2">
        <button className="btn-primary" onClick={handleAddRow}>
          Add Row
        </button>
        <button className="btn-secondary" onClick={handleRemoveRow}>
          Remove Row
        </button>
      </div>
      <HotTable
        ref={hotTableRef}
        data={getTableDataWithTotal()}
        columns={columns}
        colHeaders={colHeaders}
        rowHeaders={true}
        width="100%"
        height="auto"
        minRows={5}
        maxRows={100}
        manualRowResize={true}
        manualColumnResize={true}
        fixedColumnsLeft={3}
        stretchH="none"
        contextMenu={true}
        copyPaste={true}
        fillHandle={true}
        licenseKey="non-commercial-and-evaluation"
        afterChange={handleAfterChange}
        afterGetColHeader={afterGetColHeader}
        cells={(row, col) => {
          // Make total row readOnly
          if (row === data.length) {
            return { readOnly: true, className: "htCenter htTotalRow" };
          }
        }}
        className="htCenter handsontable"
      />
    </div>
  );
};

export default HandsontableTimesheet;
