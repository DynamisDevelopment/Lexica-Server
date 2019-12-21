import { UsersSubscription } from './account/user'
import { LanguageSubscription } from './dictionary/language'
import { TranslationSubscription } from './dictionary/translation'
import { WordSubscription } from './dictionary/word'
import { ContentSubscription } from './library/content'
import { AwardSubscription } from './misc/award'
import { MessageSubscription } from './misc/message'



export const Subscription = {
    ...UsersSubscription,
    ...LanguageSubscription,
    ...TranslationSubscription,
    ...WordSubscription,
    ...ContentSubscription,
    ...AwardSubscription,
    ...MessageSubscription
}



