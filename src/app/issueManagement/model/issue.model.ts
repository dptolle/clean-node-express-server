export interface Issue {
    uniqueId: string;
    name: string;
}

export interface IssuePort {
    retrieveIssues(): Promise<Issue[]>;
}

export interface IssueService extends IssuePort {}
