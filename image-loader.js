/* Robust local/GitHub Pages image loader */
(function(){
  const extensions = ['.jpg','.jpeg','.png','.webp','.JPG','.JPEG','.PNG','.WEBP'];
  const images = Array.from(document.querySelectorAll('img[data-image]'));
  images.forEach(function(img){
    const base = img.getAttribute('data-image');
    let i = 0;
    function tryNext(){
      if(i >= extensions.length){
        // Keep the placeholder rather than showing a broken-image icon.
        return;
      }
      const candidate = 'images/' + base + extensions[i++];
      const test = new Image();
      test.onload = function(){ img.src = candidate; };
      test.onerror = tryNext;
      test.src = candidate;
    }
    tryNext();
  });
})();
