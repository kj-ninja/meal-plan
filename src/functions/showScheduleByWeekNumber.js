export const getActualWeekNumber = (d) => {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
};

export const getScheduleByWeekNumber = (weekNumber, schedules) => {
    return schedules.find(schedule => {
        return +schedule.weekNumber === weekNumber;
    });
};

export const getNextWeekNumber = (schedules, currentWeekNumber) => {
    return schedules
        .map(plan => plan.weekNumber)
        .sort((a, b) => a - b)
        .find(weekNumber => {
            return weekNumber > currentWeekNumber;
        });
};

export const getPreviousWeekNumber = (schedules, currentWeekNumber) => {
    return schedules
        .map(plan => plan.weekNumber)
        .sort((a, b) => b - a)
        .find(weekNumber => {
            return weekNumber < currentWeekNumber;
        });
};