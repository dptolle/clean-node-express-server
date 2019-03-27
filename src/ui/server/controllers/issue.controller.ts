import { Request, Response } from 'express';
import { Issue, IssuePort } from '../../../app/ports';
import { logger } from '../../../aspects';
import { Controller } from '../model/controler.model';

interface IssueDTO {
    uniqueId: string;
    name: string;
}

export interface IssueController extends Controller {
    listIssues(req: Request, res: Response): void;
}

class DefaultIssueController implements IssueController {
    constructor(private issueService: IssuePort) {}

    async listIssues(req: Request, res: Response) {
        let dto;
        await this.issueService
            .retrieveIssues()
            .then((issues: Issue[]) => {
                dto = issues.map(i => this.fromIssueEntityToDTO(i));
                res.status(200).json(dto);
            })
            .catch((err: Error) => {
                logger.error(`Unable to retrieve issues. error=${err}`);
                dto = {
                    title: 'Error getting all issues',
                    obj: err
                };
                res.status(500).json(dto);
            });

        logger.info('IssueController.listIssues, Response sent');
        return res.end();
    }

    private fromIssueEntityToDTO(inst: Issue): IssueDTO {
        return {
            uniqueId: inst.uniqueId,
            name: inst.name
        };
    }
}

export function createController(service: IssuePort) {
    return new DefaultIssueController(service);
}
