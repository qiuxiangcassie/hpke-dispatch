(function() {var implementors = {};
implementors["chacha20"] = [{"text":"impl&lt;R:&nbsp;Rounds, MC:&nbsp;MaxCounter&gt; <a class=\"trait\" href=\"cipher/stream/trait.StreamCipher.html\" title=\"trait cipher::stream::StreamCipher\">StreamCipher</a> for <a class=\"struct\" href=\"chacha20/struct.ChaCha.html\" title=\"struct chacha20::ChaCha\">ChaCha</a>&lt;R, MC&gt;","synthetic":false,"types":["chacha20::chacha::ChaCha"]},{"text":"impl&lt;R:&nbsp;Rounds&gt; <a class=\"trait\" href=\"cipher/stream/trait.StreamCipher.html\" title=\"trait cipher::stream::StreamCipher\">StreamCipher</a> for <a class=\"struct\" href=\"chacha20/struct.XChaCha.html\" title=\"struct chacha20::XChaCha\">XChaCha</a>&lt;R&gt;","synthetic":false,"types":["chacha20::xchacha::XChaCha"]}];
implementors["ctr"] = [{"text":"impl&lt;B, F&gt; <a class=\"trait\" href=\"cipher/stream/trait.StreamCipher.html\" title=\"trait cipher::stream::StreamCipher\">StreamCipher</a> for <a class=\"struct\" href=\"ctr/struct.Ctr.html\" title=\"struct ctr::Ctr\">Ctr</a>&lt;B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"cipher/block/trait.BlockEncrypt.html\" title=\"trait cipher::block::BlockEncrypt\">BlockEncrypt</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"ctr/flavors/trait.CtrFlavor.html\" title=\"trait ctr::flavors::CtrFlavor\">CtrFlavor</a>&lt;B::<a class=\"associatedtype\" href=\"cipher/block/trait.BlockCipher.html#associatedtype.BlockSize\" title=\"type cipher::block::BlockCipher::BlockSize\">BlockSize</a>&gt;,&nbsp;</span>","synthetic":false,"types":["ctr::Ctr"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()