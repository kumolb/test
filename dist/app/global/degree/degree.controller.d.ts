import { DegreeService } from './degree.service';
import { Degree } from './dto/degree.dto';
export declare class DegreeController {
    private readonly degreeService;
    constructor(degreeService: DegreeService);
    getDegree(): Promise<Degree[]>;
    createDegree(body: Degree): Promise<Degree>;
}
