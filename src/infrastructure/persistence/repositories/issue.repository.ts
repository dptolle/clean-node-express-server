import {
    IssueRepository,
    Issue,
    createIssue,
    ApplicationDomainError
} from '../../../app/ports';
import { mapModelToIssue } from './data-mappers';
import { IssueModel } from '../data-store/mongoose/schemas/issue.schema';
import { IssueSchema } from '../data-store/mongoose/mongoose';
import {
    createRepository,
    RepositoryBase
} from '../data-store/mongoose/mongoose.repository';

class DefaultIssueRepository implements IssueRepository {
    constructor(private baseRepo: RepositoryBase<IssueModel>) {}

    findById(id: string): Promise<Issue> {
        return this.baseRepo.findById(id).then(m => {
            if (!m) {
                throw new ApplicationDomainError(`Issue not found. id=${id}`);
            }
            return mapModelToIssue(m);
        });
    }

    retrieve(): Promise<Issue[]> {
        return this.baseRepo.retrieve().then(modelArray => {
            return modelArray.map(m => mapModelToIssue(m));
        });
    }

    createIssue(Issue: Issue): Promise<Issue> {
        const newIssue = new IssueSchema({
            uniqueId: Issue.uniqueId,
            name: Issue.name
        });
        return this.baseRepo
            .create(newIssue)
            .then(model => createIssue(model._id.toHexString()));
    }

    findByIssueName(name: string): Promise<Issue> {
        return this.baseRepo
            .findOne({ name1: name })
            .then((model: IssueModel) => {
                if (!model) {
                    throw new ApplicationDomainError(
                        `Issue not found. name=${name}`
                    );
                }
                return createIssue(model._id.toHexString());
            });
    }
}

export const repository: IssueRepository = new DefaultIssueRepository(
    createRepository(IssueSchema)
);
