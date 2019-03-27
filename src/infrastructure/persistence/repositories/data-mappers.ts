import { Issue, createIssue } from '../../../app/ports';
import { IssueModel } from '../data-store/mongoose/schemas/issue.schema';

function mapModelToIssue(i: IssueModel): Issue {
    const issue = createIssue(i._id);
    return {
        ...issue,
        ...{
            name: i.name,
            uniqueId: i.uniqueId
        }
    };
}

export { mapModelToIssue };
