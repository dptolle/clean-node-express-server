import { IssueService } from './../../issueManagement/model/issue.model';
import { createService as createIssueService } from './../../issueManagement/application/issue.service';
import { ApplicationSystemError } from '../domain/technical.error';
import { IssueRepository } from '../../ports';

interface RepositoryOptions {
    issueRepository: IssueRepository;
}

export interface ServiceFactory {
    // tslint:disable-next-line:no-any
    getService(serviceName: string): any;
}

class DefaultServiceFactory implements ServiceFactory {
    private issueService: IssueService;

    constructor(repositories: RepositoryOptions) {
        const { issueRepository } = repositories;

        this.issueService = createIssueService(issueRepository);
    }

    getService(serviceName: string) {
        switch (serviceName) {
            case 'ISSUE':
                return this.issueService;
            default:
                throw new ApplicationSystemError(
                    `Unknown serviceName, serviceName=${serviceName}`
                );
        }
    }
}

function createFactory(config: RepositoryOptions): ServiceFactory {
    return new DefaultServiceFactory(config);
}

export { createFactory };
