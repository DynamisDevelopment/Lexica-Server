import { UsersMutation } from './account/user/user'
import { LanguageMutation } from './dictionary/language/language'
import { TranslationMutation } from './dictionary/translation/translation'
import { WordMutation } from './dictionary/word/word'
import { ContentMutation } from './library/content/content'
import { AwardMutation } from './misc/award/award'
import { MessageMutation } from './misc/message/message'



export const Mutation = {
    ...UsersMutation,
    ...LanguageMutation,
    ...TranslationMutation,
    ...WordMutation,
    ...ContentMutation,
    ...AwardMutation,
    ...MessageMutation
}