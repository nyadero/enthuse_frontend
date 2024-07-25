import { ActiveCommentTypeEnum } from "../enums/active-comment.enum";

export interface ActiveComment{
    id: string;
    type: ActiveCommentTypeEnum;
}