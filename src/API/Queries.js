import { UsersQuery } from './account/user'
import { LanguageQuery } from './dictionary/language'
import { TranslationQuery } from './dictionary/translation'
import { WordQuery } from './dictionary/word'
import { ContentQuery } from './library/content'
import { AwardQuery } from './misc/award'
import { MessageQuery } from './misc/message'



export const Query = {
    ...UsersQuery,
    ...LanguageQuery,
    ...TranslationQuery,
    ...WordQuery,
    ...ContentQuery,
    ...AwardQuery,
    ...MessageQuery
}



