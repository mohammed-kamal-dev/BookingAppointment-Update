import { Time } from "@angular/common";

export interface ScheduleForCreateDto {
    startDate: string;
    endtDate: string;
    sessionTime: number;
    restTimeBetweenSession: number;
    restTimeBetweenPeriod: number;
    morningPeriodStartTime: Time;
    morningPeriodEndTime: Time;
    nightPeriodStartTime: Time;
    nightPeriodEndTime: Time;
    doctorId: string;
}