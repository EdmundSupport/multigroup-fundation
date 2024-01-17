import { SessionType, Session } from "src/api/v1/datasource/remas/shared/domain/model/aaa";

export const aaaConnectionProvider = [
    { provide: 'SESSION_TYPE_REPOSITORY', useValue: SessionType },
    { provide: 'SESSION_REPOSITORY', useValue: Session },
]

export const aaaModels = [
    SessionType,
    Session,
]