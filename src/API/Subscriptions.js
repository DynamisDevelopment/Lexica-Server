import { UsersSubscription } from './account/user/user'
import { LanguageSubscription } from './dictionary/language/language'
import { TranslationSubscription } from './dictionary/translation/translation'
import { WordSubscription } from './dictionary/word/word'
import { ContentSubscription } from './library/content/content'
import { AwardSubscription } from './misc/award/award'
import { MessageSubscription } from './misc/message/message'



export const Subscription = {
    ...UsersSubscription,
    ...LanguageSubscription,
    ...TranslationSubscription,
    ...WordSubscription,
    ...ContentSubscription,
    ...AwardSubscription,
    ...MessageSubscription
}



