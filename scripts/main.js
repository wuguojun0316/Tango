forge.pdfviewer = {
    open: function (url, success, error) {

        // (optional) use the native viewer if we're on iOS                                                                                                                                                                        
        if (forge.is.ios()) {
            forge.tools.getURL(url, function (url) {
                forge.tabs.open(url, success, error);
            });
            return;
        }

        // a simple modal container for our viewer                                                                                                                                                                                 
        var container = document.createElement("div");
        container.style.position = "fixed";
        container.style.top = "50px";
        container.style.right = 0;
        container.style.bottom = 0;
        container.style.left = 0;
        container.style.overflow = "auto";
        container.style.background = "white";

        // the parent div for the PDF viewer                                                                                                                                                                                       
        var viewer = document.createElement("div");
        viewer.className = "pdfViewer";
        container.appendChild(viewer);

        // instantiate a PDF.js pdfViewer                                                                                                                                                                                          
        var pdfViewer = new PDFJS.PDFViewer({
            container: container
        });
        container.addEventListener("pagesinit", function () {
            pdfViewer.currentScaleValue = "page-width";
        });

        // fetch document if it lives on a remote server                                                                                                                                                                           
        if (url.indexOf("http") === 0) {
            forge.file.cacheURL(url, function (file) {
                forge.file.URL(file, function (url) {
                    if (forge.is.ios()) {
                        url = file.uri; // iOS XHR handles local URL's differently to Android                                                                                                                                      
                    }
                    PDFJS.getDocument(url).then(function(document) {
                        pdfViewer.setDocument(document);
                    });
                }, error);
            }, error);
        } else {
            PDFJS.getDocument(url).then(function(document) {
                pdfViewer.setDocument(document);
            });
        }
        
        // a simple header with a close button                                                                                                                                                                                     
	var header = document.createElement("div");
        header.style.position = "fixed";
    	header.style.top = 0;
	header.style.right = 0;
	header.style.left = 0;
	header.style.lineHeight = "50px";
	header.style.background = "#f8f8f8";

	var close = document.createElement("span");
	close.style.color = "#007AFF";
	close.style.marginLeft = "10px";
	close.innerHTML = "Close";
	close.onclick = function () {
            pdfViewer.cleanup();
            pdfViewer = null;
            document.body.removeChild(header);
            document.body.removeChild(container);
            success();
	};
        header.appendChild(close);

	document.body.appendChild(container);
	document.body.appendChild(header);
    }
};