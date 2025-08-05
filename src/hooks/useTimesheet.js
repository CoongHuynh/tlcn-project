import { useState, useCallback, useMemo, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isWeekend,
  isSameDay,
} from "date-fns";
import { vi } from "date-fns/locale";

export const useTimesheet = (currentDate = new Date()) => {
  // Sample data - in real app, this would come from API
  const [clients] = useState([
    { id: 1, name: "Omnicom Media Group" },
    { id: 2, name: "Client A" },
    { id: 3, name: "Client B" },
    { id: 4, name: "Client C" },
  ]);

  const [tasks] = useState([
    { id: 1, name: "Design System Development" },
    { id: 2, name: "UI/UX Design" },
    { id: 3, name: "Frontend Development" },
    { id: 4, name: "Backend Development" },
    { id: 5, name: "Testing & QA" },
    { id: 6, name: "Project Management" },
  ]);

  // Generate days of the month
  const daysOfMonth = useMemo(() => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    return eachDayOfInterval({ start, end });
  }, [currentDate]);

  // Initial timesheet data
  const [timesheetData, setTimesheetData] = useState(() => [
    {
      id: 1,
      clientId: 1,
      taskId: 1,
      totalHours: 0,
      dailyHours: daysOfMonth.map((day) => ({
        date: format(day, "yyyy-MM-dd"),
        hours: 0,
        isWeekend: isWeekend(day),
      })),
    },
  ]);

  // Update timesheet data when month changes
  useEffect(() => {
    setTimesheetData((prev) =>
      prev.map((row) => ({
        ...row,
        dailyHours: daysOfMonth.map((day) => ({
          date: format(day, "yyyy-MM-dd"),
          hours: 0,
          isWeekend: isWeekend(day),
        })),
        totalHours: 0,
      }))
    );
  }, [daysOfMonth]);

  // Add new row
  const addRow = useCallback(() => {
    const newRow = {
      id: Date.now(),
      clientId: 1,
      taskId: 1,
      totalHours: 0,
      dailyHours: daysOfMonth.map((day) => ({
        date: format(day, "yyyy-MM-dd"),
        hours: 0,
        isWeekend: isWeekend(day),
      })),
    };
    setTimesheetData((prev) => [...prev, newRow]);
  }, [daysOfMonth]);

  // Delete row
  const deleteRow = useCallback((rowId) => {
    setTimesheetData((prev) => prev.filter((row) => row.id !== rowId));
  }, []);

  // Update daily hours
  const updateDailyHours = useCallback((rowId, date, hours) => {
    setTimesheetData((prev) =>
      prev.map((row) => {
        if (row.id === rowId) {
          const updatedDailyHours = row.dailyHours.map((day) =>
            day.date === date ? { ...day, hours: parseFloat(hours) || 0 } : day
          );
          const totalHours = updatedDailyHours.reduce(
            (sum, day) => sum + day.hours,
            0
          );
          return {
            ...row,
            dailyHours: updatedDailyHours,
            totalHours,
          };
        }
        return row;
      })
    );
  }, []);

  // Update row data
  const updateRow = useCallback((rowId, field, value) => {
    setTimesheetData((prev) =>
      prev.map((row) => (row.id === rowId ? { ...row, [field]: value } : row))
    );
  }, []);

  // Copy row
  const copyRow = useCallback(
    (rowId) => {
      const rowToCopy = timesheetData.find((row) => row.id === rowId);
      if (rowToCopy) {
        const newRow = {
          ...rowToCopy,
          id: Date.now(),
          dailyHours: rowToCopy.dailyHours.map((day) => ({ ...day, hours: 0 })),
        };
        setTimesheetData((prev) => [...prev, newRow]);
      }
    },
    [timesheetData]
  );

  // Get client name by ID
  const getClientName = useCallback(
    (clientId) => {
      const client = clients.find((c) => c.id === clientId);
      return client?.name || "";
    },
    [clients]
  );

  // Get task name by ID
  const getTaskName = useCallback(
    (taskId) => {
      const task = tasks.find((t) => t.id === taskId);
      return task?.name || "";
    },
    [tasks]
  );

  // Calculate total hours for a specific date
  const getTotalHoursForDate = useCallback(
    (date) => {
      return timesheetData.reduce((total, row) => {
        const dayData = row.dailyHours.find((day) => day.date === date);
        return total + (dayData?.hours || 0);
      }, 0);
    },
    [timesheetData]
  );

  // Calculate grand total
  const getGrandTotal = useCallback(() => {
    return timesheetData.reduce((total, row) => total + row.totalHours, 0);
  }, [timesheetData]);

  return {
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
  };
};
