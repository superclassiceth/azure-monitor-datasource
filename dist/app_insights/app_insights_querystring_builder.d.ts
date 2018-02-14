/// <reference path="../../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
export default class AppInsightsQuerystringBuilder {
    private from;
    private to;
    grafanaInterval: any;
    aggregation: string;
    groupBy: string;
    timeGrainType: string;
    timeGrain: string;
    timeGrainUnit: string;
    filterExpressions: any[];
    constructor(from: any, to: any, grafanaInterval: any);
    setAggregation(aggregation: any): void;
    setGroupBy(groupBy: any): void;
    setInterval(timeGrainType: any, timeGrain: any, timeGrainUnit: any): void;
    setFilter(segment: string, operator: string, value: string | number): void;
    isNumeric(val: any): boolean;
    generate(): string;
}
