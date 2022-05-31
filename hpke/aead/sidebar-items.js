initSidebarItems({"struct":[["AeadCtxR","The HPKE receiver’s context. This is what you use to `open` ciphertexts and `export` secrets."],["AeadCtxS","The HPKE senders’s context. This is what you use to `seal` plaintexts and `export` secrets."],["AeadTag","An authenticated encryption tag"],["AesGcm128","The implementation of AES-128-GCM"],["AesGcm256","The implementation of AES-256-GCM"],["ChaCha20Poly1305","The implementation of ChaCha20-Poly1305"],["ExportOnlyAead","An AEAD which can only be used for its `export()` function. The `open()` and `seal()` methods on an `AeadCtxR` or `AeadCtxS` which uses this AEAD underlyingly will panic if you call them"]],"trait":[["Aead","Represents authenticated encryption functionality"]]});