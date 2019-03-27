import { createIssue } from '../issue.entity';

describe('Issue object', () => {
    it('should be created', () => {
        const inst = createIssue('test');
        expect(inst).toBeTruthy();
    });
});
