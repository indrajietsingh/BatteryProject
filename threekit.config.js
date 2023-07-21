export default {
  credentials: {
    preview: {
      orgId: process.env.THREEKIT_PREVIEW_ORG_ID,
      publicToken: process.env.THREEKIT_PREVIEW_PUBLIC_TOKEN,
    },
    'admin-fts': {
      orgId: process.env.THREEKIT_ADMIN_FTS_ORG_ID,
      publicToken: process.env.THREEKIT_ADMIN_FTS_PUBLIC_TOKEN,
    },
  },

  products: {
    preview: {
      assetId: 'f9a68013-a042-4ea5-9b7c-208644d1a09e',
      configurationId: '',
      stageId: '',
    },
    'admin-fts': {
      assetId: undefined,
      configurationId: undefined,
      stageId: undefined,
    },
  },
};
