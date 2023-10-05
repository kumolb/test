import { Model } from 'mongoose';
import { Degree, DegreeDocument } from './dto/degree.dto';
export declare class DegreeService {
    private DegreeModel;
    constructor(DegreeModel: Model<DegreeDocument>);
    getDegree(): Promise<Degree[]>;
    addDegree(props: Degree): Promise<Degree>;
}
