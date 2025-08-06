import { format } from "date-fns";
import { enUS } from "date-fns/locale";

export const getWeekdayShort = (date) => {
  // 0: Sunday, 1: Monday, ...
  return format(date, "EEE", { locale: enUS });
};

export const getDay = (date) => format(date, "d");

export const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

export const getDefaultRow = (daysOfMonth, clients, tasks) => {
  return {
    clientId: clients[0]?.id || 1,
    taskId: tasks[0]?.id || 1,
    totalHours: 0,
    ...Object.fromEntries(
      daysOfMonth.map((day) => [`day_${format(day, "yyyy-MM-dd")}`, 0])
    ),
  };
}; 