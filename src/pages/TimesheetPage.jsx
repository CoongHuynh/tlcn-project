import { useState } from "react";
import { format } from "date-fns";
import {
  Plus,
  Save,
  Download,
  Calendar,
  Clock,
  Users,
  FileText,
} from "lucide-react";
import { useTimesheet } from "../hooks/useTimesheet";
import HandsontableTimesheet from "../components/HandsontableTimesheet";

const TimesheetPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const {
    clients,
    tasks,
    daysOfMonth,
    timesheetData,
    addRow,
    deleteRow,
    updateDailyHours,
    updateRow,
    copyRow,
    getClientName,
    getTaskName,
    getTotalHoursForDate,
    getGrandTotal,
  } = useTimesheet(currentDate);

  const [selectedMonth, setSelectedMonth] = useState(
    format(currentDate, "yyyy-MM")
  );

  const handleMonthChange = (e) => {
    const [year, month] = e.target.value.split("-");
    const newDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    setCurrentDate(newDate);
    setSelectedMonth(e.target.value);
  };

  const handleSave = () => {
    // In real app, this would save to API
    console.log("Saving timesheet data:", timesheetData);
    alert("Timesheet saved successfully!");
  };

  const handleExport = () => {
    // In real app, this would export to Excel/CSV
    console.log("Exporting timesheet data:", timesheetData);
    alert("Timesheet exported successfully!");
  };

  return (
    <div className="min-h-screen bg-light-background-color">
      {/* Header */}
      <div className="bg-primary text-light p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent rounded-xl">
                <Calendar className="w-6 h-6 text-dark" />
              </div>
              <div>
                <h1 className="text-section-header text-light">Timesheet</h1>
                <p className="text-body text-accent3">
                  Track your work hours and project activities
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="btn-secondary flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleExport}
                className="btn-primary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Controls */}
        <div className="bg-light rounded-xl p-6 mb-6 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <label htmlFor="month-select" className="text-body font-medium">
                  Select Month:
                </label>
                <input
                  id="month-select"
                  type="month"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  className="p-2 border border-light-border-color rounded-md bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <button
              onClick={addRow}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Row
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="stats-card">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-body-small text-light">Total Clients</span>
            </div>
            <div className="text-section-header text-light">
              {timesheetData.length}
            </div>
          </div>
          <div className="stats-card">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-accent" />
              <span className="text-body-small text-light">Total Tasks</span>
            </div>
            <div className="text-section-header text-light">
              {timesheetData.length}
            </div>
          </div>
          <div className="stats-card">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-body-small text-light">Total Hours</span>
            </div>
            <div className="text-section-header text-light">
              {getGrandTotal()}
            </div>
          </div>
          <div className="stats-card">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-body-small text-light">Days in Month</span>
            </div>
            <div className="text-section-header text-light">
              {daysOfMonth.length}
            </div>
          </div>
        </div>

        {/* Handsontable Timesheet */}
        <HandsontableTimesheet
          daysOfMonth={daysOfMonth}
          timesheetData={timesheetData}
          clients={clients}
          tasks={tasks}
          updateRow={updateRow}
          updateDailyHours={updateDailyHours}
          copyRow={copyRow}
          deleteRow={deleteRow}
          getTotalHoursForDate={getTotalHoursForDate}
          getGrandTotal={getGrandTotal}
        />

        {/* Instructions */}
        <div className="mt-6 bg-light rounded-xl p-6 shadow-md">
          <h3 className="text-sub-header text-dark mb-4">Instructions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-body text-gray">
            <div>
              <h4 className="font-semibold text-dark mb-2">How to use:</h4>
              <ul className="space-y-1">
                <li>• Select month to view different periods</li>
                <li>• Choose client and task for each row</li>
                <li>• Enter hours for each day (0-24, 0.5 increments)</li>
                <li>• Weekend columns are highlighted in orange</li>
                <li>• Use copy button to duplicate rows</li>
                <li>• Total hours are calculated automatically</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-dark mb-2">Features:</h4>
              <ul className="space-y-1">
                <li>• Excel-like functionality</li>
                <li>• Copy and delete rows</li>
                <li>• Automatic calculations</li>
                <li>• Weekend highlighting</li>
                <li>• Responsive design</li>
                <li>• Save and export options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimesheetPage;
