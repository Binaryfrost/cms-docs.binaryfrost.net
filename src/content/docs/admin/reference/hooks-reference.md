---
title: Hooks Reference
---

For instructions on how to register custom hooks, see [Hook Plugins](/admin/plugins/hook-plugins/).

All `before*` hooks (except for `beforeWebsiteHookCalled`) can throw an error to cancel the action.

## serverStart

**Type** : `(hook: ServerStartHook) => void`

## beforeCollectionTitleModifyHook

**Type** : `(hook: BeforeAfterCollectionTitlesModifyHook) => void`

## afterCollectionTitleModifyHook

**Type** : `(hook: BeforeAfterCollectionTitlesModifyHook) => void`

## beforeMediaCreateHook

**Type** : `(hook: BeforeAfterMediaHook<Omit<Media, 'timestamp'>>) => void`

## afterMediaCreateHook

**Type** : `(hook: BeforeAfterMediaHook<Omit<Media, 'timestamp'>>) => void`

## afterMediaConfirmHook

**Type** : `(hook: BeforeAfterMediaHook<MediaWithUrls>) => void`

## beforeMediaDeleteHook

**Type** : `(hook: BeforeAfterMediaHook) => void`

## afterMediaDeleteHook

**Type** : `(hook: BeforeAfterMediaHook) => void`

/** Called server-side before a POST request is sent to the website hook */
## beforeWebsiteHookCalled

**Type** : `(hook: BeforeWebsiteHookCalledHook) => void`


## beforeWebsiteCreateHook

**Type** : `(hook: { website: Website }) => void`

## afterWebsiteCreateHook

**Type** : `(hook: { website: Website }) => void`

## beforeWebsiteModifyHook

**Type** : `(hook: { website: Website }) => void`

## afterWebsiteModifyHook

**Type** : `(hook: { website: Website }) => void`

## beforeWebsiteDeleteHook

**Type** : `(hook: { website: Website }) => void`

## afterWebsiteDeleteHook

**Type** : `(hook: { website: Website }) => void`


## beforeCollectionCreateHook

**Type** : `(hook: { collection: Collection }) => void`

## afterCollectionCreateHook

**Type** : `(hook: { collection: Collection }) => void`

## beforeCollectionModifyHook

**Type** : `(hook: { collection: Collection }) => void`

## afterCollectionModifyHook

**Type** : `(hook: { collection: Collection }) => void`

## beforeCollectionDeleteHook

**Type** : `(hook: { collection: Collection }) => void`

## afterCollectionDeleteHook

**Type** : `(hook: { collection: Collection }) => void`


## beforeCollectionInputCreateHook

**Type** : `(hook: { collectionInput: CollectionInput }) => void`

## afterCollectionInputCreateHook

**Type** : `(hook: { collectionInput: CollectionInput }) => void`

## beforeCollectionInputModifyHook

**Type** : `(hook: { collectionInput: CollectionInput }) => void`

## afterCollectionInputModifyHook

**Type** : `(hook: { collectionInput: CollectionInput }) => void`

## beforeCollectionInputDeleteHook

**Type** : `(hook: { collectionInput: CollectionInput }) => void`

## afterCollectionInputDeleteHook

**Type** : `(hook: { collectionInput: CollectionInput }) => void`


## beforeCollectionEntryCreateHook

**Type** : `(hook: { collectionEntry: CollectionEntryWithData }) => void`

## afterCollectionEntryCreateHook

**Type** : `(hook: { collectionEntry: CollectionEntryWithData }) => void`

## beforeCollectionEntryModifyHook

**Type** : `(hook: { collectionEntry: CollectionEntryWithData }) => void`

## afterCollectionEntryModifyHook

**Type** : `(hook: { collectionEntry: CollectionEntryWithData }) => void`

## beforeCollectionEntryDeleteHook

**Type** : `(hook: { collectionEntry: CollectionEntryWithData }) => void`

## afterCollectionEntryDeleteHook

**Type** : `(hook: { collectionEntry: CollectionEntryWithData }) => void`
