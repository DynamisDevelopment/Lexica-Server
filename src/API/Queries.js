import { UsersQuery } from './account/user/user'
import { LanguageQuery } from './dictionary/language/language'
import { TranslationQuery } from './dictionary/translation/translation'
import { WordQuery } from './dictionary/word/word'
import { ContentQuery } from './library/content/content'
import { AwardQuery } from './misc/award/award'
import { MessageQuery } from './misc/message/message'



export const Query = {
    ...UsersQuery,
    ...LanguageQuery,
    ...TranslationQuery,
    ...WordQuery,
    ...ContentQuery,
    ...AwardQuery,
    ...MessageQuery
}



