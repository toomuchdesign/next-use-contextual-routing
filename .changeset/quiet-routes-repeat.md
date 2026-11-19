---
'next-use-contextual-routing': patch
---

Preserve array-valued router query parameters as repeated keys in contextual hrefs. Pages rendered during contextual navigation now receive these values as arrays instead of comma-joined strings, and empty arrays are omitted instead of serialized as empty values.
