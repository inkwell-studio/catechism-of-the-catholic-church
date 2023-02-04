import { OtherSourceEnum } from './other-source-enum.ts';
import { ReferenceBase } from './reference-base.ts';
import { ReferenceEnum } from './reference-enum.ts';

export type OtherReference = ReferenceBase & {
    readonly referenceType: ReferenceEnum.OTHER;
    readonly direct: boolean;
    readonly source: OtherSourceEnum;
    readonly pointer: string;
};
