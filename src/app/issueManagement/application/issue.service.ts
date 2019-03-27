import { IssueRepository } from '../../ports';
import { IssueService, Issue } from '../model/issue.model';

class DefaultIssueService implements IssueService {
    constructor(private institutionRepository: IssueRepository) {}

    async retrieveIssues(): Promise<Issue[]> {
        let institutions = await this.institutionRepository.retrieve();

        return institutions.filter(
            (institution: Issue) => institution.name !== 'dummy'
        );
    }
}

export function createService(
    institutionRepository: IssueRepository
): IssueService {
    return new DefaultIssueService(institutionRepository);
}
