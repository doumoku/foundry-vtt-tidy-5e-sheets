import { CONSTANTS } from 'src/constants';
import { SheetPreferencesService } from 'src/features/user-preferences/SheetPreferencesService';
import type { SortMethodScheme } from 'src/types/sort.types';

export const defaultItemSortSchemes = {
  [CONSTANTS.ITEM_SORT_METHOD_KEY_ALPHABETICAL_ASCENDING]: {
    key: CONSTANTS.ITEM_SORT_METHOD_KEY_ALPHABETICAL_ASCENDING,
    icon: 'fa-solid fa-arrow-down-a-z',
    onClick: async (doc, currentTabId) => {
      await SheetPreferencesService.setDocumentTypeTabPreference(
        doc.type,
        currentTabId,
        'sort',
        CONSTANTS.ITEM_SORT_METHOD_KEY_ALPHABETICAL_ASCENDING
      );
    },
    label: 'TIDY5E.SortMethod.AlphabeticalAscending.Label',
    tooltip: 'TIDY5E.SortMethod.AlphabeticalAscending.Tooltip',
    comparator: (a, b) => a.name.localeCompare(b.name, game.i18n.lang),
  },
  [CONSTANTS.ITEM_SORT_METHOD_KEY_ALPHABETICAL_DESCENDING]: {
    key: CONSTANTS.ITEM_SORT_METHOD_KEY_ALPHABETICAL_DESCENDING,
    icon: 'fa-solid fa-arrow-up-z-a',
    onClick: async (doc, currentTabId) => {
      await SheetPreferencesService.setDocumentTypeTabPreference(
        doc.type,
        currentTabId,
        'sort',
        CONSTANTS.ITEM_SORT_METHOD_KEY_ALPHABETICAL_DESCENDING
      );
    },
    label: 'TIDY5E.SortMethod.AlphabeticalDescending.Label',
    tooltip: 'TIDY5E.SortMethod.AlphabeticalDescending.Tooltip',
    comparator: (a, b) => b.name.localeCompare(a.name, game.i18n.lang),
  },
  [CONSTANTS.ITEM_SORT_METHOD_KEY_MANUAL]: {
    key: CONSTANTS.ITEM_SORT_METHOD_KEY_MANUAL,
    icon: 'fa-solid fa-arrow-down-short-wide',
    onClick: async (doc, currentTabId) => {
      await SheetPreferencesService.setDocumentTypeTabPreference(
        doc.type,
        currentTabId,
        'sort',
        CONSTANTS.ITEM_SORT_METHOD_KEY_MANUAL
      );
    },
    label: 'TIDY5E.SortMenu.OptionManual',
    tooltip: 'SIDEBAR.SortModeManual',
    comparator: (a, b) => (a.sort || 0) - (b.sort || 0),
  },
  [CONSTANTS.ITEM_SORT_METHOD_KEY_PRIORITY]: {
    key: CONSTANTS.ITEM_SORT_METHOD_KEY_PRIORITY,
    icon: 'fa-solid fa-arrow-down-1-9',
    onClick: async (doc, currentTabId) => {
      await SheetPreferencesService.setDocumentTypeTabPreference(
        doc.type,
        currentTabId,
        'sort',
        CONSTANTS.ITEM_SORT_METHOD_KEY_PRIORITY
      );
    },
    label: 'TIDY5E.SortMenu.OptionPriority',
    tooltip: 'SIDEBAR.SortModePriority',
    comparator: (a, b) =>
      a.linkedName?.localeCompare(b.linkedName, game.i18n.lang) ||
      a.level - b.level ||
      a.preparationMode - b.preparationMode ||
      a.prepared - b.prepared ||
      a.name.localeCompare(b.name, game.i18n.lang),
  },
  [CONSTANTS.ITEM_SORT_METHOD_KEY_EQUIPPED]: {
    key: CONSTANTS.ITEM_SORT_METHOD_KEY_EQUIPPED,
    icon: 'fa-solid fa-hand-fist equip-icon',
    onClick: async (doc, currentTabId) => {
      await SheetPreferencesService.setDocumentTypeTabPreference(
        doc.type,
        currentTabId,
        'sort',
        CONSTANTS.ITEM_SORT_METHOD_KEY_EQUIPPED
      );
    },
    label: 'DND5E.Equipped',
    tooltip: 'DND5E.Equipped',
    comparator: (a, b) =>
      b.system.equipped - a.system.equipped ||
      a.name.localeCompare(b.name, game.i18n.lang),
  },
  [CONSTANTS.ITEM_SORT_METHOD_KEY_PREPARED]: {
    key: CONSTANTS.ITEM_SORT_METHOD_KEY_PREPARED,
    icon: 'fa-solid fa-book',
    onClick: async (doc, currentTabId) => {
      await SheetPreferencesService.setDocumentTypeTabPreference(
        doc.type,
        currentTabId,
        'sort',
        CONSTANTS.ITEM_SORT_METHOD_KEY_PREPARED
      );
    },
    label: 'DND5E.Prepared',
    tooltip: 'DND5E.Prepared',
    comparator: (a, b) =>
      b.system.preparation?.prepared - a.system.preparation?.prepared ||
      +(b.system.preparation.mode === 'always') -
        +(a.system.preparation.mode === 'always') ||
      a.name.localeCompare(b.name, game.i18n.lang),
  },
} satisfies Record<string, SortMethodScheme>;
