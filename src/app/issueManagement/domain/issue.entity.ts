import { Issue } from '../model/issue.model';

class DefaultIssue implements Issue {
    uniqueId: string;
    stateShort: string;
    name: string;
    addendum: string;
    city: string;
    zip: string;
    phone: string;
    fax: string;
    email: string[];

    constructor(id: string) {
        this.uniqueId = id;
    }
}

export function createIssue(id: string): Issue {
    return new DefaultIssue(id);
}
