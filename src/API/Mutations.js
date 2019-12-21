import { UsersMutation } from './account/user'
import { LanguageMutation } from './dictionary/language'
import { TranslationMutation } from './dictionary/translation'
import { WordMutation } from './dictionary/word'
import { ContentMutation } from './library/content'
import { AwardMutation } from './misc/award'
import { MessageMutation } from './misc/message'



export const Mutation = {
    ...UsersMutation,
    ...LanguageMutation,
    ...TranslationMutation,
    ...WordMutation,
    ...ContentMutation,
    ...AwardMutation,
    ...MessageMutation
}