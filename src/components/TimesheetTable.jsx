import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Copy, Trash2 } from "lucide-react";

const TimesheetTable = ({
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
  return (
    <div className="bg-light rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px]">
          <thead className="bg-secondary text-light">
            <tr>
              <th className="p-4 text-left font-medium sticky left-0 bg-secondary z-10 min-w-[200px]">
                Client
              </th>
              <th className="p-4 text-left font-medium min-w-[200px]">Task</th>
              <th className="p-4 text-center font-medium min-w-[100px]">
                Total Hours
              </th>
              {daysOfMonth.map((day) => (
                <th
                  key={format(day, "yyyy-MM-dd")}
                  className={`p-4 text-center font-medium min-w-[80px] ${
                    day.getDay() === 0 || day.getDay() === 6
                      ? "bg-accent2 text-dark"
                      : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-body-small">
                      {format(day, "EEE", { locale: vi })}
                    </span>
                    <span className="text-body font-bold">
                      {format(day, "dd")}
                    </span>
                    <span className="text-body-small">
                      {format(day, "MMM", { locale: vi })}
                    </span>
                  </div>
                </th>
              ))}
              <th className="p-4 text-center font-medium min-w-[120px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {timesheetData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-light-border-color hover:bg-medium-background transition-colors"
              >
                <td className="p-4 sticky left-0 bg-light z-10">
                  <select
                    value={row.clientId}
                    onChange={(e) =>
                      updateRow(row.id, "clientId", parseInt(e.target.value))
                    }
                    className="w-full p-2 border border-light-border-color rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4">
                  <select
                    value={row.taskId}
                    onChange={(e) =>
                      updateRow(row.id, "taskId", parseInt(e.target.value))
                    }
                    className="w-full p-2 border border-light-border-color rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {tasks.map((task) => (
                      <option key={task.id} value={task.id}>
                        {task.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4 text-center">
                  <div className="text-sub-header font-bold text-accent">
                    {row.totalHours}
                  </div>
                </td>
                {row.dailyHours.map((day) => (
                  <td
                    key={day.date}
                    className={`p-2 text-center ${
                      day.isWeekend ? "bg-accent4" : ""
                    }`}
                  >
                    <input
                      type="number"
                      min="0"
                      max="24"
                      step="0.5"
                      value={day.hours || ""}
                      onChange={(e) =>
                        updateDailyHours(row.id, day.date, e.target.value)
                      }
                      className="w-full p-1 text-center border border-light-border-color rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="0"
                    />
                  </td>
                ))}
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => copyRow(row.id)}
                      className="p-2 text-accent hover:text-accent2 transition-colors"
                      title="Copy row"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteRow(row.id)}
                      className="p-2 text-red-500 hover:text-red-700 transition-colors"
                      title="Delete row"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {/* Total Row */}
            <tr className="bg-accent4 font-bold">
              <td className="p-4 sticky left-0 bg-accent4 z-10">
                <span className="text-dark">TOTAL</span>
              </td>
              <td className="p-4">
                <span className="text-dark">-</span>
              </td>
              <td className="p-4 text-center">
                <span className="text-dark">{getGrandTotal()}</span>
              </td>
              {daysOfMonth.map((day) => (
                <td
                  key={format(day, "yyyy-MM-dd")}
                  className={`p-2 text-center ${
                    day.getDay() === 0 || day.getDay() === 6 ? "bg-accent3" : ""
                  }`}
                >
                  <span className="text-dark font-bold">
                    {getTotalHoursForDate(format(day, "yyyy-MM-dd"))}
                  </span>
                </td>
              ))}
              <td className="p-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimesheetTable;
