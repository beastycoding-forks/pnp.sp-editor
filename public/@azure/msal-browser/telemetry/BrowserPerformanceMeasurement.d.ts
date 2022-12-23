import { IPerformanceMeasurement } from "@azure/msal-common";
export declare class BrowserPerformanceMeasurement implements IPerformanceMeasurement {
    private measureName;
    private correlationId;
    private startMark;
    private endMark;
    constructor(name: string, correlationId: string);
    static supportsBrowserPerformance(): boolean;
    startMeasurement(): void;
    endMeasurement(): void;
    flushMeasurement(): number | null;
}
//# sourceMappingURL=BrowserPerformanceMeasurement.d.ts.map