import { Issue } from '../../issueManagement/model/issue.model';

export interface IssueRepository {
    retrieve(): Promise<Issue[]>;
    findById(id: string): Promise<Issue>;
    createIssue(institution: Issue): Promise<Issue>;
    findByIssueName(name: string): Promise<Issue>;
}
